'use strict';

// Declare app level module which depends on filters, and services
angular.module('krakn', [
                           'ionic',
                           'krakn.config',
                           // 'krakn.routes',
                           'krakn.filters',
                           'krakn.services',
                           'krakn.directives',
                           'krakn.controllers',
                           'simpleLoginTools',
                           'routeSecurity',
                           // 'ngAnimate',
                           'ngTouch',
                           'ngRoute',
                           'ui.router'
                        ])


   .config(['$routeProvider', '$stateProvider', '$urlRouterProvider', function($routeProvider, $stateProvider, $urlRouterProvider) {

     $stateProvider
       // Abstract menu state that routes all other states
       .state('kraknMenu', {
         url: "/krakn",
         abstract: true,
         templateUrl: "partials/menu.html",
         controller: "MenuCtrl"
       })

       .state('kraknMenu.about', {
         url: "/about",
         views: {
           'menuContent' :{
             templateUrl: "partials/about.html",
             controller: "AboutCtrl"
           }
         }
       })

       .state('kraknMenu.chat', {
         url: "/chat",
         views: {
           'menuContent' :{
             authRequired: true, // Must be authenticated to access
             templateUrl: "partials/chat.html",
             controller: "ChatCtrl"
           }
         }
       })

       .state('kraknMenu.account', {
         url: "/account",
         views: {
           'menuContent' :{
             authRequired: true, // Must be authenticated to access
             templateUrl: "partials/account.html",
             controller: "AccountCtrl"
           }
         }
       })

       .state('kraknMenu.login', {
         url: "/login",
         views: {
           'menuContent' :{
             templateUrl: "partials/login.html",
             controller: "LoginCtrl"
           }
         }
       })
     
     $urlRouterProvider.otherwise("/krakn/login");
   }])


   .run(['loginService', '$rootScope', 'FBURL', '$location', '$ionicScrollDelegate',
      function(loginService, $rootScope, FBURL, $location, $ionicScrollDelegate) {
        if( FBURL === 'https://INSTANCE.firebaseio.com' ) {
           // double-check that the app has been configured
           angular.element(document.body).html('<h1>Please configure app/js/config.js before running!</h1>');
           setTimeout(function() {
              angular.element(document.body).removeClass('hide');
           }, 250);
        }
        else {
           // establish authentication
           $rootScope.auth = loginService.init('/login');
           $rootScope.FBURL = FBURL;
        }

         // only scroll to the bottom if on chat view
         if($location.$$path == 'krakn/chat') {
           $ionicScrollDelegate.scrollBottom(true);
         }
     }
  ]);
