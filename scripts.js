$(document).ready(function() {
    // Hamburger Menu Toggle
    $('#hamburger').click(function() {
        $('.nav-links').toggleClass('active');
        $(this).toggleClass('active');
    });

    // Contact Popup
    $('#contact-btn').click(function() {
        $('#contact-popup').fadeIn();
    });

    $('#popup-close').click(function() {
        $('#contact-popup').fadeOut();
    });

    // Smooth Scroll
    $('.nav-links a').click(function(event) {
        event.preventDefault();
        
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50 // Adjust the offset as needed
        }, 800); // Duration for the scroll
    });

    // Close contact popup when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('#contact-popup, #contact-btn').length) {
            $('#contact-popup').fadeOut();
        }
    });

});
