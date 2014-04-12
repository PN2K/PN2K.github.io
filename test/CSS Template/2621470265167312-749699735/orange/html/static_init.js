$(function() {
	$.fn.disableSelection = function() { return $(this).css('user-select', 'none').css('-khtml-user-select', 'none').css('-moz-user-select', 'none').css('-o-user-select', 'none').css('-webkit-user-select', 'none'); }
	$('#nav').disableSelection();
	$('.page-gallery').poptrox({ popupPadding: 7, usePopupCaption: true });
});
