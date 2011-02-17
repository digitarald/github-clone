(function(){

if (document.querySelector('span#github-clone-repository')) return;

var description = document.querySelector('p#url_description');
if (!description) return;

// Utility
var setStyle = function(element, style){
	for (var key in style)
		element.style[key] = style[key];
};

var addListeners = function(element, listeners){
	for (var key in listeners)
		element.addEventListener(key, listeners[key], false);
};

// Add tooltip
var tipsy = function(){
	var script = document.createElement('script'),
		head = document.querySelector('head');

	script.src = chrome.extension.getURL('updateTipsy.js');
	script.type = 'text/javascript';
	head.appendChild(script);
};

// Images
var hover = chrome.extension.getURL('icon-hover.png'),
	icon = 'url(' + chrome.extension.getURL('icon.png') + ')',
	iconHover = 'url(' + hover + ')';

// Old school preloading
new Image().src = hover;

// Element
var element = document.createElement('span'),
	title = 'clone to disk',
	over;

element.id = 'github-clone-repository';
element.classList.add('clippy-tooltip');

var setTitle = function(text){
	element.setAttribute('original-title', text || title);
	tipsy();
};

setTitle();

setStyle(element, {
	backgroundImage: icon,
	width: '14px',
	height: '14px',
	display: 'inline-block'
});

// ToDo somehow add tipsy

addListeners(element, {
	
	mouseover: function(){
		over = true;
		setStyle(element, {
			backgroundImage: iconHover
		});
	},

	mouseout: function(){
		over = false;
		setStyle(element, {
			backgroundImage: icon
		});
	},

	click: function(event){
		event.preventDefault();

		var clone = 'cloning',
			dots = '';

		element.classList.remove('removeTipsy');
		element.classList.add('hasTipsy');
		var timer = setInterval(function(){
			setTitle(clone + dots);
			dots += '.';
			if (dots.length > 3) dots = '';
		}, 300);

		chrome.extension.sendRequest({
			URL: document.querySelector('input#url_field').value
		}, function(success){
			clearInterval(timer);
			if (success) setTitle('Successfully cloned!');
			
			setTimeout(function(){
				if (!over){
					element.classList.add('removeTipsy');
					element.classList.remove('hasTipsy');
				}
				setTitle();
			}, 1500);
		});
	}

});

description.parentNode.insertBefore(element, description);

})();
