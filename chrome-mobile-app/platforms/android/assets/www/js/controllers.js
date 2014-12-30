'use strict';

/* Controllers */

angular.module('krakn.controllers', [
                                       'ionic',
                                       'ngAnimate'
                                    ])

   // defined in index.html, all other controllers defined in app.js
   .controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
     $scope.leftButtons = [{
       type: 'button-icon button-clear ion-navicon',
       tap: function(e) {
         $ionicSideMenuDelegate.toggleLeft($scope.$$childHead);
       }
     }];
   })


   .controller("MenuCtrl", ['$scope', 'loginService', '$location', '$ionicScrollDelegate', function($scope, loginService, $location, $ionicScrollDelegate) {
     $scope.toggleMenu = function() {
       $scope.sideMenuController.toggleLeft();
     };

     $scope.logout = function() {
         loginService.logout();
         $scope.toggleMenu();
         // $location.path('krakn/login');
     };
   }])


   .controller('AboutCtrl', ['$scope', 'syncData', function($scope, syncData) {
      syncData('syncedValue').$bind($scope, 'syncedValue');
   }])


  .controller('ChatCtrl', ['$scope', 'syncData', '$ionicScrollDelegate', '$ionicLoading', '$rootScope',
      function($scope, syncData, $ionicScrollDelegate, $ionicLoading, $rootScope) {
         // split email on @ for minor privacy improvement before binding to $scope
         var userEmail = $rootScope.auth.user.email,
             userName  = userEmail.split('@');

         $scope.data = {
            newMessage      : null,
            user            : userName[0],
            receivedTime    : Number(new Date())
         }

         // constrain number of messages by limit into syncData
         // add the array into $scope.messages
         $scope.messages = syncData('messages', 20);

         // scroll to bottom of list on view loaded
         $ionicScrollDelegate.scrollBottom(true);

         // displayed as chat input placholder
         $scope.feedback = 'something on your mind?';
         // displays as class on chat input placeholder
         $scope.feeling  = 'stable';

         // add new messages to the list
         $scope.addMessage = function() {
            if(    $scope.data.newMessage
                && $scope.data.user
                && $scope.data.receivedTime ) {
              // new data elements cannot be synced without adding them to FB Security Rules
               $scope.messages.$add({
                                       text         : $scope.data.newMessage,
                                       user         : $scope.data.user,
                                       receivedTime : $scope.data.receivedTime
                                   });
               // clean up
               $scope.data.newMessage = null;

               // scroll the view up when new message added
               // $ionicScrollDelegate.scrollBottom(true);

               $scope.feedback = 'Done! What\'s next?';
               $scope.feeling  = 'stable';
            }
            else {
               $scope.feedback = 'Please write a message before sending';
               $scope.feeling  = 'assertive';
            }
         };

         $ionicScrollDelegate.scrollBottom(true);


         // Trigger the loading indicator
        $scope.show = function() {

          // Show the loading overlay and text
          $scope.loading = $ionicLoading.show({

            // The text to display in the loading indicator
            content: 'Loading',

            // The animation to use
            animation: 'fade-in',

            // Will a dark overlay or backdrop cover the entire view
            showBackdrop: true,

            // The maximum width of the loading indicator
            // Text will be wrapped if longer than maxWidth
            maxWidth: 200,

            // The delay in showing the indicator
            showDelay: 500
          });
        };

        // Hide the loading indicator
        $scope.hide = function(){
          $scope.loading.hide();
        };

        function deleteMessage(item) {

        }

        // Bottoms that display when a list item is swipped to the left
        $scope.itemButtons = [
          {
            text: '',
            type: 'button-assertive icon ion-android-trash',
            onTap: function(item) {
              deleteMessage(item);
            }
          }
        ];
      }
   ])


   .controller('LoginCtrl', ['$scope', 'loginService', '$location',
      function($scope, loginService, $location) {
         $scope.data = {
            "email"      : null,
            "pass"       : null,
            "confirm"    : null,
            "createMode" : false
         }

         $scope.login = function(cb) {
            $scope.err = null;
            if( !$scope.data.email ) {
               $scope.err = 'Please enter an email address';
            }
            else if( !$scope.data.pass ) {
               $scope.err = 'Please enter a password';
            }
            else {
               loginService.login($scope.data.email, $scope.data.pass, function(err, user) {
                  $scope.err = err? err + '' : null;
                  if( !err ) {
                     cb && cb(user);
                     $location.path('krakn/chat');
                  }
               });
            }
         };


         $scope.createAccount = function() {
            $scope.err = null;
            if( assertValidLoginAttempt() ) {
               loginService.createAccount($scope.data.email, $scope.data.pass,
                  function(err, user) {
                     if( err ) {
                        $scope.err = err? err + '' : null;
                     }
                     else {
                        // must be logged in before I can write to my profile
                        $scope.login(function() {
                           loginService.createProfile(user.uid, user.email);
                           $location.path('krakn/account');
                        });
                     }
                  });
            }
         };

         function assertValidLoginAttempt() {
            if( !$scope.data.email ) {
               $scope.err = 'Please enter an email address';
            }
            else if( !$scope.data.pass ) {
               $scope.err = 'Please enter a password';
            }
            else if( $scope.data.pass !== $scope.data.confirm ) {
               $scope.err = 'Passwords do not match';
            }
            return !$scope.err;
         }
      }])


   .controller('AccountCtrl', ['$scope', 'loginService', 'changeEmailService', 'firebaseRef', 'syncData', 'FBURL',
      function($scope, loginService, changeEmailService, firebaseRef, syncData, FBURL) {
         
         $scope.syncAccount = function() {
            $scope.user = {};
            syncData(['users', $scope.auth.user.uid]).$bind($scope, 'user').then(function(unBind) {
               $scope.unBindAccount = unBind;
            });
         };
         // set initial binding
         $scope.syncAccount();

         $scope.data = {
            "oldpass" : null,
            "newpass" : null,
            "confirm" : null
         }

         $scope.reset = function() {
            $scope.err      = null;
            $scope.msg      = null;
            $scope.emailerr = null;
            $scope.emailmsg = null;
         };

         $scope.updatePassword = function() {
            $scope.reset();
            loginService.changePassword(buildPwdParms());
         };

         $scope.updateEmail = function() {
           $scope.reset();
           // disable bind to prevent junk data being left in firebase
           $scope.unBindAccount();
           changeEmailService(buildEmailParms());
         };

         function buildPwdParms() {
            return {
               email: $scope.auth.user.email,
               oldpass: $scope.data.oldpass,
               newpass: $scope.data.newpass,
               confirm: $scope.data.confirm,
               callback: function(err) {
                  if( err ) {
                     $scope.err = err;
                  }
                  else {
                     $scope.data.oldpass = null;
                     $scope.data.newpass = null;
                     $scope.data.confirm = null;
                     $scope.msg          = 'Password updated!';
                  }
               }
            };
         }
         function buildEmailParms() {
            return {
               newEmail: $scope.newemail,
               pass: $scope.pass,
               callback: function(err) {
                  if( err ) {
                     $scope.emailerr = err;
                     // reinstate binding
                     $scope.syncAccount();
                  }
                  else {
                     // reinstate binding
                     $scope.syncAccount();
                     $scope.newemail = null;
                     $scope.pass     = null;
                     $scope.emailmsg = 'Email updated!';
                  }
               }
            };
         }
      }
   ]);