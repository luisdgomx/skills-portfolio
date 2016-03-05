(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.modal-trigger').leanModal();

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

    var owl = $("#owl-social-media");

      owl.owlCarousel({
      items : 1, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });

  owl.trigger('owl.play',1000);

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
var demo = new CountUp("CountUp1", 0, 8465, 0, 2.5, options); demo.start(); //Líneas de Código
 demo = new CountUp("CountUp2", 0, 16, 0, 2.5, options); demo.start(); //Proyectos
 demo = new CountUp("CountUp3", 0, 2920, 0, 2.5, options); demo.start(); //Tazas de Café

var radarChartData = {
        labels: ["SQL Server", "MySQL", "Postgres", "Oracle", "Mongo"],
        datasets: [
            {
                label: "Experiencia %",
                fillColor: "rgba(31, 143, 193, 0.2)",
                strokeColor: "rgba(31, 143, 193, 0.9)",
                pointColor: "rgba(31, 143, 193, 0.9)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [80,75,60,50,40]
            },
            {
                label: "Proyectos",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(193, 31, 52, 0.9)",
                pointColor: "rgba(193, 31, 52, 0.9)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [6,4,3,2,1]
            }
        ]
    };
    window.onload = function(){
        window.myRadar = new Chart(document.getElementById("chart-area").getContext("2d")).Radar(radarChartData, {
            responsive: true
        });
    }

