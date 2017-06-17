(function($) {

	var $_body = $('body');

	// add support for on.
	if(typeof $.fn.on === 'undefined'){

		var _onEventLiveDataHandler = function(targetele, eventname, selector, data, handler){
			$(selector).live(eventname, data, handler);
		};

		var _onEventLiveHandler = function(targetele, eventname, selector, handler){
			$(selector).live(eventname, handler);
		};

		var _onEventHandler = function(targetele, eventname, handler){
			$(targetele).bind(eventname, handler);
		};


		$.fn.on = function(eventname, selector, data, handler){

			if(typeof handler === 'function'){
				this.each(function(){
					_onEventDataHandler(this, eventname, selector, data, handler);
				});
			}
			else{
				if(typeof data === 'function'){
					handler = data;
					this.each(function(){
						_onEventLiveHandler(this, eventname, selector, handler);
					});
				}
				else{
					this.each(function(){
						handler = selector;
						_onEventHandler(this, eventname, handler);
					});
				}
			}
			return this;
		};
	}

	// add support for off.
	if(typeof $.fn.off === 'undefined'){

		var _offEventLiveHandler = function(targetele, eventname, selector, handler){
			$(selector).die(eventname, handler);
		};

		var _offEventHandler = function(targetele, eventname, handler){
			$(targetele).unbind(eventname, handler);
		};

		var _offEventLive = function(targetele, eventname, selector){
			$(selector).die(eventname);
		};

		var _offEvent = function(targetele, eventname){
			$(targetele).unbind(eventname);
		};

		var _off = function(targetele){
			$(targetele).unbind();
			$(targetele).die();
		};


		$.fn.off = function(eventname, selector, handler){

			if(typeof handler === 'function'){
				this.each(function(){
					_offEventLiveHandler(this, eventname, selector, handler);
				});
			}
			else{
				if(typeof selector === 'function'){
					handler = selector;
					this.each(function(){
						_offEventHandler(this, eventname, handler);
					});
				}
				else if(typeof selector === 'string'){
					this.each(function(){
						_offEventLive(this, eventname, selector);
					});
				}
				else{
					if(typeof eventname === 'string'){
						this.each(function(){
							_offEvent(this, eventname);
						});
					} 
					else if(typeof eventname === 'undefined'){
						this.each(function(){
							_off(this);
						});
					}
				}
			}
			return this;
		};
	}

	// add support for prop.
	if(typeof $.fn.prop === 'undefined'){

		$.fn.prop = function(attr, value){

			if(typeof value === 'undefined'){

				if(typeof attr === 'string'){

					if(['checked', 'selected', 'disabled', 'readonly'].indexOf(attr.toLowerCase()) >= 0){
						var attrval = $(this).attr(attr);
						if(typeof attrval !== 'undefined'){
							if (typeof attrval === 'string') return attrval.toLowerCase() == attr.toLowerCase();
						}
						return attrval;
					}

					return $(this).attr(attr);
				}
				else if(typeof attr === 'object'){

					for(var i in attr){
						$(this).prop(i, attr[i]);
					}

					return this;
				}

			} 
			else if(typeof value !== 'function'){

				if(typeof attr === 'string'){

					if(['checked', 'selected', 'disabled', 'readonly'].indexOf(attr.toLowerCase()) >= 0){
						return $(this).attr(attr, value == attr.toLowerCase() ? attr.toLowerCase() : value ? true : false);
					}

					return $(this).attr(attr, value);
				}

			}
			// typeof value === 'function'
			else {

				if(typeof attr === 'string'){

					var i = 0;

					this.each(function(){
						var $ele = $(this);
						if(['checked', 'selected', 'disabled', 'readonly'].indexOf(attr.toLowerCase()) >= 0){
							var val = $ele.attr(attr, value == attr.toLowerCase() ? attr.toLowerCase() : value ? true : false);
							value.apply($ele, [i++, val]);
						}
						else{
							var val = $ele.attr(attr, value);
							value.apply($ele, [i++, val]);
						}
					});

					return this;
				}

			}

		};
	}

})(jQuery);
