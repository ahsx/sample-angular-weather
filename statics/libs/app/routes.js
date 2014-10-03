"use strict";

angular
	.module(APPNAME)
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider
			.otherwise("/");

		$stateProvider

			////////////////// 
			// 		top 	//
			//////////////////
			.state('top', {
				name: 'top',
				url: '/',
				controller: 'PaneController',
				templateUrl: '/statics/partials/pane.html'
			})

			////////////////// 
			// 		right 	//
			//////////////////
			.state('right', {
				name: 'right',
				url: '/right',
				controller: 'PaneController',
				templateUrl: '/statics/partials/pane.html'
			})
			
			////////////////// 
			// 		bottom 	//
			//////////////////
			.state('bottom', {
				name: 'bottom',
				url: '/bottom',
				controller: 'PaneController',
				templateUrl: '/statics/partials/pane.html'
			})
			
			////////////////// 
			// 		left 	//
			//////////////////
			.state('left', {
				name: 'left',
				url: '/left',
				controller: 'PaneController',
				templateUrl: '/statics/partials/pane.html'
			})
	}]);