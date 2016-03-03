(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();

    $('body').progressTracker({

    // Allows for navigating between content sections
    linking: true,

    // "constant" = always visiable
    // "hover" = shows on mouse hover
    tooltip: "hover",

    // The number specified is added to the default value at which the tracker changes to the next section.
    positiveTolerance: 0,

    // The number specified is subtracted from the default value at which the tracker changes to the next section.
    negativeTolerance: 0,

    // Only displays the progress tracker when the user is between the top of the first section and the bottom of the last;
    // It is only shown when the tracker sections are in view.
    // Specify false if you want the tracker to always show.
    displayWhenActive: false,

    // Specify the value (in pixels) that you wish the progress tracker to be hidden when it is below that.
    disableBelow: 0,

    // Specifies what the plugin takes into account when deciding when to switch to the next section.
    // "tracker" or "viewport"
    tracking: "viewport"

	});
    
    $('.flip').click(function(){
        $(this).find('.card').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space