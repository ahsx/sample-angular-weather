"use strict";

angular
	.module( APPNAME )
	.controller('AppController', ['$scope', '$state', function( $scope, $state )
	{	
		var states = ['top', 'right', 'bottom', 'left'];
		var n = states.length;
		var current = next();

		function next()
		{
			var i = -1;
			if ( current != undefined )
				i = states.indexOf( current );
			var j = i;

			while ( j == i )
			{
				j = (Math.random()*n | 0);
			}

			return states[j];
		}

		function go( state )
		{
			$state.go(state, {}, {
				reload: true,
				location: false
			});
		}

		go( current );
		
		$scope.$on('shift', function(e)
		{
			current = next();
			go( current );
		});
		
	}]);
;