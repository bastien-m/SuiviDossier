angular.module('FollowCaseApp')
	.controller('FollowCtrl', ['$scope', 'userServices', function($scope, userServices) {

		console.log(userServices.email);

	}]);