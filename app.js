angular.module('FollowCaseApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {

		$routeProvider.when('/Login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginCtrl'
		})
		.when('/Follow', {
			templateUrl: 'partials/follow.html',
			controller: 'FollowCtrl'
		})
		.otherwise({
			templateUrl: 'partials/login.html',
			controller: 'LoginCtrl'
		});


	}]);