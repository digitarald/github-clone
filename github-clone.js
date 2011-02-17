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

// Images
var hover = chrome.extension.getURL('icon-hover.png'),
	icon = 'url(' + chrome.extension.getURL('icon.png') + ')',
	iconHover = 'url(' + hover + ')';

// Old school preloading
new Image().src = hover;

// Element
var element = document.createElement('span');
element.id = 'github-clone-repository';
element.classList.add('clippy-tooltip');
element.setAttribute('original-title', 'clone to disk');

setStyle(element, {
	backgroundImage: icon,
	width: '14px',
	height: '14px',
	display: 'inline-block'
});

// ToDo somehow add tipsy

addListeners(element, {
	mouseover: function(){
		setStyle(element, {
			backgroundImage: iconHover
		});
	},

	mouseout: function(){
		setStyle(element, {
			backgroundImage: icon
		});
	},

	click: function(event){
		event.preventDefault();

		chrome.extension.sendRequest({
			URL: document.querySelector('input#url_field').value
		}, function(){});
	}
});

description.parentNode.insertBefore(element, description);

// Add tooltip
var script = document.createElement('script');
script.src = chrome.extension.getURL('addTipsy.js');
script.type = 'text/javascript';
document.querySelector('head').appendChild(script);

})();
