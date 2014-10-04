"use strict";

angular
	.module(APPNAME)
	.controller('PaneController', ['$scope', '$state', '$rootScope', 'City', 'WeatherService', function( $scope, $state, $rootScope, City, WeatherService )
	{
		var colors = ['bittersweet', 'persiangreen', 'mantis', 'buttercup', 'limedspruce'];
		var n = colors.length;

		var transitions = ['slide-top', 'slide-right', 'slide-bottom', 'slide-left'];
		var m = transitions.length;

		$scope.city = City.reset();
		$scope.country = '';
		$scope.validated = false;
		$scope.loading = false;
		$scope.loaded = false;
		$scope.error = false;
		$scope.color = colors[ Math.random()*n | 0 ];
		$scope.transition = transitions[ Math.random()*m | 0 ];

		$scope.temperature = '15° - 17°';
		$scope.humidity = '35';
		$scope.pressure = '1024';
		$scope.location = '50.85, 4.35';
		$scope.sunrise = '05:48:31 GMT';
		$scope.sunset = '05:48:31 GMT';

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
								$scope.loading = true;
							});

							getWeather();
						}
						break;

					// case 'shift':
					// 	console.warn('Shift to another pane');
					// 	$rootScope.$broadcast('shift');
					// 	break;
						
					// case 'alt':
					// 	$scope.$apply(function()
					// 	{
					// 		$scope.loaded = !$scope.loaded;
					// 	});
					// 	break;
				}
			}

			function getWeather()
			{
				WeatherService
					.fetchForCity( $scope.city )
					.then(function(data)
					{
						console.log('Data retrieved', data);

						$scope.loading = false;
						if (data.cod && data.cod == 404)
						{
							$scope.error = true;
							return;
						}

						var min = (data.main.temp_min-32) * 5 / 9;
						var max = (data.main.temp_max-32) * 5 / 9;

						$scope.temperature = data.main.temp_min + '° - ' + data.main.temp_max + '°';
						$scope.humidity = data.main.humidity;
						$scope.pressure = data.main.pressure;
						$scope.location = data.coord.lat + ', ' + data.coord.lon;
						$scope.sunrise = new Date(data.sys.sunrise);
						$scope.sunset = new Date(data.sys.sunset);
						$scope.country = data.sys.country;

						$scope.loaded = true;
					})

			}
		});	
	}]);