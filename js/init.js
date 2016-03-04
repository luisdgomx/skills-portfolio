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

var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
};
var demo = new CountUp("CountUp1", 0, 5000, 0, 2.5, options); demo.start();
 demo = new CountUp("CountUp2", 0, 2000, 0, 2.5, options); demo.start();
 demo = new CountUp("CountUp3", 0, 3000, 0, 2.5, options); demo.start();

var radarChartData = {
        labels: ["SQL Server", "MySQL", "Postgres", "Oracle"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65,59,90,81,56]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28,48,40,19,96]
            }
        ]
    };
    window.onload = function(){
        window.myRadar = new Chart(document.getElementById("chart-area").getContext("2d")).Radar(radarChartData, {
            responsive: true
        });
    }
