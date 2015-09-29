angular.module('FollowCaseApp')
	.controller('MenuCtrl', ['$scope', '$location','$rootScope', 'userServices',
	function($scope, $location, $rootScope, userServices) {

		$scope.$on('userLoggedIn', function(event, args) {
			$scope.isLogged = true;
		});



		$scope.login = function() {
			userServices.logout();
			$scope.isLogged = false;
			$location.path('/login');
		}

		$scope.logout = function() {
			userServices.logout();
			$scope.isLogged = false;
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
