(function(){

var selector = 'span#github-clone-repository',
	element = jQuery(selector);

if (!element) return;

element.tipsy({
	gravity: 's'
});

if (element[0].classList.contains('hasTipsy')) element.trigger('mouseover');
if (element[0].classList.contains('removeTipsy')) element.trigger('mouseout');

})();
