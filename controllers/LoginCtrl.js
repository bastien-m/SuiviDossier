angular.module('FollowCaseApp')
	.controller('LoginCtrl', ['$scope', '$location', '$rootScope', 'userServices',
	 function($scope, $location,$rootScope, userServices) {

		$scope.login = function() {
			userServices.login($scope.form.email, $scope.form.caseNumber);
			$rootScope.$broadcast('userLoggedIn');
			$location.path('/Follow');
		}

	}]);
