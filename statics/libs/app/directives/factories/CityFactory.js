angular
	.module(APPNAME)
	.service('City', function()
	{

		/**
		 *	Default city name
		 **/
		this.text = '';
		// this.text = 'Llanfairpwllgwyngyll';

		/**
		 *	Max characters allowed
		 **/
		this.max = 20;

		/**
		 *	Add character to the city name
		 *
		 *	@param character String
		 *	@return String
		 **/
		this.add = function( character )
		{
			if ( this.text.length < this.max )
				this.text += character;

			return this.text;
		}

		/**
		 *	Remove a qty of character
		 *
		 *	@param qty int
		 *	@return String
		 **/
		this.remove = function( qty )
		{
			// console.log('remove %s - %d', this.text, qty);

			var qty = Math.min( this.text.length, qty );
			this.text = this.text.substr( 0, this.text.length-qty );

			// console.log('result %s', this.text);

			return this.text;
		}
	})
;