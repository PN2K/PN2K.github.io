$(function() {
	$.fn.disableSelection = function() { return $(this).css('user-select', 'none').css('-khtml-user-select', 'none').css('-moz-user-select', 'none').css('-o-user-select', 'none').css('-webkit-user-select', 'none'); }
	$('#nav').disableSelection();
	$.rotatorrr({ titlesSelector: '#nav a', slidesSelector: '#content .page' });
	$('.page-gallery').poptrox({ popupPadding: 7, usePopupCaption: true });
	$('#content').fadeTo(0, 0.01).fadeTo(700, 1);
});
