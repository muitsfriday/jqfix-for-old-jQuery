# jqfix-for-old-jQuery
## V 0.1
### legacy fix support for jQuery

jQuery Old Support.

##.on()
jQuery older version than 1.7 can use .on() to bind(live) an event.
```
$('body').on('click', function(e){
	console.log('on click body', e);
});
```

##.off()
jQuery older version than 1.7 can use .off() to unbind(die) an event.
```
$('body').off('click');
```

##.prop()
jQuery older version than 1.6 can use .prop() to getting a attribute and properties of elements
```
// get property value
$('input').prop('type');
// set property value
$('input').prop('data-id', 10);
// get properties value of more than one elements
$('input').prop('type', function(i, val){ 
	# do sone thing with attr value {val} at element index {i} with element {this}
});
// set properties
$('input').prop({
	'class' : 'input-style',
	'readonly' : false
});
```

