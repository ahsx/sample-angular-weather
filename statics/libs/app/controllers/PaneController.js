"use strict";

angular
	.module(APPNAME)
	.controller('PaneController', ['$scope', 'City', '$state', '$rootScope', function( $scope, City, $state, $rootScope )
	{
		var colors = ['bittersweet', 'persiangreen', 'mantis', 'buttercup', 'limedspruce'];
		var n = colors.length;

		var transitions = ['slide-top', 'slide-right', 'slide-bottom', 'slide-left'];
		var m = transitions.length;

		$scope.city = City.reset();
		$scope.country = '';
		$scope.validated = false;
		$scope.color = colors[ Math.random()*n | 0 ];
		$scope.transition = transitions[ Math.random()*m | 0 ];

		$scope.$on('keypress', function( event, keyEvent )
		{
			var code = keyEvent.which;

			console.log('KeyCode: %d [%s]', code, Keyboard.find(code) );

			if ( $scope.validated )
			{
				console.log('validated have to have a new pane');
				console.warn('Shift to another pane');
				$rootScope.$broadcast('shift');

			}
			else if ( Keyboard.isLetter(code) )
			{
				$scope.$apply(function()
				{
					$scope.city = City.add( Keyboard.find(code) );
				});
			}
			else
			{
				switch ( Keyboard.find(code) )
				{
					case 'backspace':
						keyEvent.preventDefault();
						$scope.$apply(function()
						{
							$scope.city = City.remove( 1 );
						});
						break;
					case 'space':
						$scope.$apply(function()
						{
							$scope.city = City.add(' ');
						});
						break;
					case 'enter':

						if ( $scope.city.length > 1 )
						{
							$scope.$apply(function()
							{
								$scope.validated = true;
							});
						}
						break;

					case 'shift':
						console.warn('Shift to another pane');
						$rootScope.$broadcast('shift');
						break;
						
				}
			}
		});	
	}]);