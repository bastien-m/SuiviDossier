angular.module('FollowCaseApp')
	.controller('FollowCtrl', ['$scope', 'userServices', 'stepServices',
	 function($scope, userServices, stepServices) {
		$scope.steps = stepServices.getServicesHistory();
	}])
	.factory('stepServices', function() {

		var services = [
				{
					step: 1,
					title: 'Déclaration',
					content: 'Déclaration de votre sinistre sur notre site',
					date: '11/09/2015',
					done: true
				},
				{
					step: 2,
					title: 'Prise en charge par SPB',
					content: 'Prise en charge de votre dossier par notre service de gestion',
					date: '13/09/2015',
					done: true
				},
				{
					step: 3,
					title: 'Demande de pièce',
					content: 'Déclaration acceptée, demande par SPB d\'envoi de votre bien pour réparation par SPB Service',
					date: '13/09/2015',
					done: true
				},
				{
					step: 4,
					title: 'Réception du bien par SPB Service',
					content: 'Réception, en cours de diagnostique par SPB Service',
					date: '24/09/2015',
					done: false
				}
			];

		return {
			getServicesHistory: function(claimNumber) {
				return services;
			},
			getDetails: function(stepId) {
				angular.forEach(services, function(service, index) {
					if (service.step === stepId) {
						return service;
					}
				});
				return undefined;
			}
		}

	})
	.controller('CardCtrl', ['$scope', 'stepServices', function($scope, stepServices) {

	}])
	.directive('statusCard', function() {
		return {
			link: function(scope, element, attrs) {
				scope.card = scope[attrs['step']];
			},
			restrict: 'E',
			templateUrl: 'partials/statusCard.html',
			controller: 'CardCtrl'
		}
	})
