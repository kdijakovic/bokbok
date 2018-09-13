$(function() {
    // Navigation
    let nav = $('#nav');
    let openMenu = $('#menu-open');
    let closeMenu = $('#menu-close');
    let overlay = $('#nav-overlay');

    openMenu.click(openNav);
    closeMenu.click(closeNav);
    overlay.click(closeNav);

    function openNav(event) {
        nav.addClass('active');
        overlay.addClass('active');
        event.preventDefault();
    }

    function closeNav(event) {
        nav.removeClass('active');
        overlay.removeClass('active');
        event.preventDefault();
    }

    // Header
    scrollNav();
    $(window).scroll(scrollNav);

    function scrollNav() {
        if (window.pageYOffset > 100) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    }

    // Anchors
    $('a[href^="#"]').each(function() {
        $(this).click(function(event) {
            let target = $(this).attr('href').substring(1);
            let offset = 0;

            if (target) {
                offset = $('#' + target).offset().top;
                history.pushState(null, null, '#' + target);
            } else {
                history.pushState(null, null, window.origin);
            }

            $('html, body').animate({
                scrollTop: offset
            },500);
            event.preventDefault();
        });
    });

    // Emails
    $('a.mailto').each(function() {
        let href = atob($(this).attr('data-href')).split('.');
        let mt = ['mail', 'to', ':', href[2], '@', href[0], '.', href[1]].join('');
        $(this).attr('href', mt);
    });
});

