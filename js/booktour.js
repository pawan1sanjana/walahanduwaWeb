AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

$(window).on('scroll', function() {
    $('.fade-in').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
            $(this).addClass('visible');
        }
    });
    $('.tour-section').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
            $(this).addClass('visible');
        }
    });
});
