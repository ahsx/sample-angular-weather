angular
	.module(APPNAME)
	.animation('.result', [function(){
		return {

			enter: function (element, done)
			{
				var childs = jQuery(element).find('li');
				childs.css('opacity',0);
				TweenMax.staggerTo( childs, 1, {opacity:1, x:-10, onComplete:done}, .1)

			    // optional onDone or onCancel callback
			    // function to handle any post-animation
			    // cleanup operations
			    return function(isCancelled) 
			    {
			      if(isCancelled) 
			      {
			        jQuery(element).stop();
			      }
			    }
			},

		    leave: function( element, done)
		    {
		    	console.log('FadeLeave', element.eq(0));
		    	
		    	var childs = jQuery(element).find('li');
				childs.css('opacity', 1);
				TweenMax.staggerTo( childs, .3, {opacity:0, x:10, onComplete:done}, .1)


			    // optional onDone or onCancel callback
			    // function to handle any post-animation
			    // cleanup operations
			    return function(isCancelled) {
			      if(isCancelled) {
			        jQuery(element).stop();
			      }
			    }
		    },

		    addClass: function()
		    {
		    	console.log('Fade addClass');
		    },
		  };
	}]);