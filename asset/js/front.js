(function ($) {
    //Fix navbar multiple level
    var navbar = $('.pi-navbar-nav');
    var hasBrand = navbar.parents('.navbar').find('.navbar-brand').length;
    navbar.find('>li').each(function () {
        var $this = $(this);
        var caretStr = '<span class="pi-navbar-caret"></span>';
        caretStr += '<span class="pi-navbar-caret pi-navbar-caret-outer"></span>';
        if ($this.find('li').length) {
            $this.append(caretStr);
        }
    });
    navbar.find('ul').addClass('dropdown-menu');

    if (!hasBrand) {
        navbar.css('marginLeft', '-15px');
    }

    /* var width = $('.pi-header').width();
    if (width > 767 && width < 1024) {
        $('.pi-header-body-footer').css({'margin-top': '200px'});
    } else if (width > 1023 && width < 1280) {
        $('.pi-header-body-footer').css({'margin-top': '280px'});
    } else if (width > 1279 && width < 1366) {
        $('.pi-header-body-footer').css({'margin-top': '350px'});
    } else if (width > 1365 && width < 1440) {
        $('.pi-header-body-footer').css({'margin-top': '350px'});
    } else if (width > 1439 && width < 1600) {
        $('.pi-header-body-footer').css({'margin-top': '400px'});
    } else if (width > 1599 && width < 1680) {
        $('.pi-header-body-footer').css({'margin-top': '500px'});
    } else if (width > 1679 && width < 1920) {
        $('.pi-header-body-footer').css({'margin-top': '750px'});
    } else if (width > 1919 && width < 2880) {
        $('.pi-header-body-footer').css({'margin-top': '900px'});
    } */
})(jQuery)