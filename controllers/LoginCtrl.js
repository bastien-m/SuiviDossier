angular.module('FollowCaseApp')
	.controller('LoginCtrl', ['$scope', '$location', 'userServices', function($scope, $location, userServices) {

		$scope.login = function() {
			console.log('user login');
			userServices.login($scope.form.email, $scope.form.caseNumber);
			console.log(userServices.email);
			$location.path('/Follow');
		}		

	}]);