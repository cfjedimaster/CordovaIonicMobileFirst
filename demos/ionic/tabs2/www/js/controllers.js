angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
	$scope.doRefresh = function() {
		console.log("got more stuff");
		$scope.friends.push({
			id:$scope.friends.length, name:"Random person "+($scope.friends.length+1)
		});
		console.dir($scope.friends);
		$scope.$broadcast('scroll.refreshComplete');
		//$scope.apply();
	};
	
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
