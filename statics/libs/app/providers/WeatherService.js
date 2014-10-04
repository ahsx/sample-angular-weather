angular
	.module( APPNAME )
	.service('WeatherService', ['$http', function($http){
		
		this.fetchForCity = function( city )
		{
			var url = "http://api.openweathermap.org/data/2.5/weather";

			return $http({
				method: 'JSONP',
				url: url,
				params: {
					q: city,
					units: 'metric',
					callback: 'JSON_CALLBACK'
				}
			})
			.then(function(data)
			{
				return data.data;
			})
			.catch(function(err)
			{
				console.error('Error in weather fecth', err);
			});
		}


	}])