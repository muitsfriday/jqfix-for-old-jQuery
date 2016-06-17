# jqfix-for-old-jQuery
## V 0.1
### legacy fix support for jQuery

jQuery Old Support.

##.on()
jQuery older version than 1.7 can use .on() for bind(live) an event.
```
$('body').on('click', function(e){
	console.log('on click body 2', e);
});
```

##.off()
jQuery older version than 1.7 can use .off() for unbind(die) an event.
```
$('body').off('click');
```
