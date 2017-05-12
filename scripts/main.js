;(function($){
	'use strict';
			
    $(function () {
    var tabContainers = $('.tabs > div');
    tabContainers.hide().filter(':first').show();

    $('.ba-tab-navigation__link').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('.ba-tab-navigation__link').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});

})(jQuery);

