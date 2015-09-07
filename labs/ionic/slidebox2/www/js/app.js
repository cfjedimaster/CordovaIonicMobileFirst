// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.factory('imagefactory', function($q) {
	
	return {
		getImages:function() {
			var deferred = $q.defer();
			var images = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg", "img/cat4.jpg"];
	
					deferred.resolve(images);
			return deferred.promise;

			
		}	
	};
	
})
.controller("main", function($scope, imagefactory) {

	$scope.images = [];
	imagefactory.getImages().then(function(items) {
		console.log(items);	
		$scope.images = items;
	});
	
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
