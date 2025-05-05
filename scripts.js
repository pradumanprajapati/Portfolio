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

    document.getElementById("viewAllBtn").addEventListener("click", function() {
        // Get the experience section and the timeline container
        var experienceSection = document.getElementById("experience");
        var timeline = document.querySelector(".timeline");
    
        // Toggle the full-screen class
        experienceSection.classList.toggle("full-screen");
    
        // Update the button text when clicked
        var button = document.getElementById("viewAllBtn");
        if (experienceSection.classList.contains("full-screen")) {
          button.innerHTML = '<span>Close</span><i class="fas fa-arrow-left"></i>';
          // Add a background overlay
          var overlay = document.createElement('div');
          overlay.id = 'overlay';
          overlay.style.position = 'fixed';
          overlay.style.top = 0;
          overlay.style.left = 0;
          overlay.style.width = '100%';
          overlay.style.height = '100%';
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          overlay.style.zIndex = 9998;
          document.body.appendChild(overlay);
    
          // Close the full-screen when overlay is clicked
          overlay.addEventListener('click', function() {
            experienceSection.classList.remove('full-screen');
            document.body.removeChild(overlay);
            button.innerHTML = '<span>View All</span><i class="fas fa-arrow-right"></i>';
          });
        } else {
          // Remove the background overlay
          document.body.removeChild(document.getElementById('overlay'));
          button.innerHTML = '<span>View All</span><i class="fas fa-arrow-right"></i>';
        }
      });
});
