"use strict";

angular
	.module(APPNAME)
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/red");

		$stateProvider
			.state('red', {
				name: 'red',
				url: '/red',
				controller: 'PaneController',
				templateUrl: '/statics/partials/red.html'
			})
	});