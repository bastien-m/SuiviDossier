angular.module('FollowCaseApp')
	.controller('MenuCtrl', ['$scope', '$location', 'userServices', function($scope, $location, userServices) {
		console.log(userServices);
		console.log(angular.isDefined(userServices.caseNumber));
		console.log(angular.isDefined(userServices.email));
		if (angular.isDefined(userServices.caseNumber) && angular.isDefined(userServices.email)) {
			$scope.isLogged = true;
		}
		else {
			$scope.isLogged = false;
		}


		$scope.login = function() {
			console.log('login');
			$location.path('/login');
		}

		$scope.logout = function() {
			userServices.logout();
			$location.path('/login');
		}

	}])
	.factory('userServices', function() {
		return {
			login: function(email, caseNumber) {
				this.email = email;
				this.caseNumber = caseNumber;
			},

			logout: function() {
				this.email = '';
				this.caseNumber = '';
			}
		};
	})
	.directive('menuElement',['userServices', function(userServices) {
		return {
			restrict: 'E',
			templateUrl: 'partials/menu.html',
			controller: 'MenuCtrl'
		};
	}]);