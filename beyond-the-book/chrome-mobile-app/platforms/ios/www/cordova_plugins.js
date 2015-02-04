cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryEntry.js",
        "id": "org.apache.cordova.file.DirectoryEntry",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryReader.js",
        "id": "org.apache.cordova.file.DirectoryReader",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Entry.js",
        "id": "org.apache.cordova.file.Entry",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/File.js",
        "id": "org.apache.cordova.file.File",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileEntry.js",
        "id": "org.apache.cordova.file.FileEntry",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileError.js",
        "id": "org.apache.cordova.file.FileError",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileReader.js",
        "id": "org.apache.cordova.file.FileReader",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileSystem.js",
        "id": "org.apache.cordova.file.FileSystem",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadOptions.js",
        "id": "org.apache.cordova.file.FileUploadOptions",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadResult.js",
        "id": "org.apache.cordova.file.FileUploadResult",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileWriter.js",
        "id": "org.apache.cordova.file.FileWriter",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Flags.js",
        "id": "org.apache.cordova.file.Flags",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/LocalFileSystem.js",
        "id": "org.apache.cordova.file.LocalFileSystem",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Metadata.js",
        "id": "org.apache.cordova.file.Metadata",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/ProgressEvent.js",
        "id": "org.apache.cordova.file.ProgressEvent",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems.js",
        "id": "org.apache.cordova.file.fileSystems"
    },
    {
        "file": "plugins/org.apache.cordova.file/www/requestFileSystem.js",
        "id": "org.apache.cordova.file.requestFileSystem",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/resolveLocalFileSystemURI.js",
        "id": "org.apache.cordova.file.resolveLocalFileSystemURI",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/ios/FileSystem.js",
        "id": "org.apache.cordova.file.iosFileSystem",
        "merges": [
            "FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems-roots.js",
        "id": "org.apache.cordova.file.fileSystems-roots",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.labs.keyboard/www/keyboard.js",
        "id": "org.apache.cordova.labs.keyboard.keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "file": "plugins/org.chromium.common/events.js",
        "id": "org.chromium.common.events",
        "clobbers": [
            "chrome.Event"
        ]
    },
    {
        "file": "plugins/org.chromium.common/errors.js",
        "id": "org.chromium.common.errors"
    },
    {
        "file": "plugins/org.chromium.common/stubs.js",
        "id": "org.chromium.common.stubs"
    },
    {
        "file": "plugins/org.chromium.common/helpers.js",
        "id": "org.chromium.common.helpers"
    },
    {
        "file": "plugins/org.chromium.runtime/api/app/runtime.js",
        "id": "org.chromium.runtime.app.runtime",
        "clobbers": [
            "chrome.app.runtime"
        ]
    },
    {
        "file": "plugins/org.chromium.runtime/api/runtime.js",
        "id": "org.chromium.runtime.runtime",
        "clobbers": [
            "chrome.runtime"
        ]
    },
    {
        "file": "plugins/org.chromium.runtime/lib/CryptoJS/sha256.js",
        "id": "org.chromium.runtime.CryptoJS-sha256"
    },
    {
        "file": "plugins/org.chromium.runtime/lib/CryptoJS/enc-base64-min.js",
        "id": "org.chromium.runtime.CryptoJS-enc-base64-min"
    },
    {
        "file": "plugins/org.chromium.bootstrap/api/app/window.js",
        "id": "org.chromium.bootstrap.app.window",
        "clobbers": [
            "chrome.app.window"
        ]
    },
    {
        "file": "plugins/org.chromium.bootstrap/api/mobile.js",
        "id": "org.chromium.bootstrap.mobile.impl",
        "clobbers": [
            "chrome.mobile.impl"
        ]
    },
    {
        "file": "plugins/org.chromium.bootstrap/api/helpers/ChromeExtensionURLs.ios.js",
        "id": "org.chromium.bootstrap.helpers.ChromeExtensionURLs"
    },
    {
        "file": "plugins/org.chromium.i18n/i18n.js",
        "id": "org.chromium.i18n.I18n",
        "clobbers": [
            "chrome.i18n"
        ]
    },
    {
        "file": "plugins/org.chromium.polyfill.xhr_features/xhr-blob.js",
        "id": "org.chromium.polyfill.xhr_features.xhr-blob",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.chromium.storage/storage.js",
        "id": "org.chromium.storage.Storage",
        "clobbers": [
            "chrome.storage"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.engine.crosswalk": "0.0.1-dev",
    "org.apache.cordova.file": "1.1.1-dev",
    "org.apache.cordova.inappbrowser": "0.4.1-dev",
    "org.apache.cordova.network-information": "0.2.9-dev",
    "org.apache.cordova.statusbar": "0.1.6-dev",
    "org.apache.cordova.labs.keyboard": "0.1.2",
    "org.chromium.common": "1.0.1",
    "org.chromium.runtime": "1.0.1",
    "org.chromium.navigation": "1.0.1",
    "org.chromium.bootstrap": "1.0.2",
    "org.chromium.i18n": "1.0.1",
    "org.chromium.polyfill.CustomEvent": "1.0.0",
    "org.chromium.polyfill.xhr_features": "1.0.0",
    "org.chromium.polyfill.blob_constructor": "1.0.0",
    "org.chromium.storage": "1.0.1"
}
// BOTTOM OF METADATA
});