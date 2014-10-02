angular
	.module(APPNAME)
	.controller('PaneController', function( $scope, City )
	{
		$scope.city = City.text;
		$scope.country = '';

		$scope.$on('keypress', function( event, keyEvent )
		{
			var code = keyEvent.which;

			console.log('KeyCode: %d [%s]', code, Keyboard.find(code) );

			if ( Keyboard.isLetter(code) )
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
						
				}
			}
		});

		$scope.update = function()
		{
			
		}	
	})