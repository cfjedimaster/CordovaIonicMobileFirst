// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller("main", function($scope) {
	console.log("main run");
	
	function onSuccess(imageData) {
		console.log('success');
		$scope.$apply(function() {
			$scope.src = imageData;
		});
		console.log($scope.src);
	}

	function onFail(message) {
		alert('Failed because: ' + message);
	}	

	//Use from Camera
	$scope.takePicture = function() {
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
			sourceType: Camera.PictureSourceType.CAMERA,
			destinationType: Camera.DestinationType.FILE_URI
		});

	};

	//Use from Library
	$scope.selectPicture = function() {
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			destinationType: Camera.DestinationType.FILE_URI
		});

	};

	
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
