(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.modal-trigger').leanModal();
    new Philter();
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

  owl.trigger('owl.play',3000);

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-75221901-1', 'auto');
  ga('send', 'pageview');

  var controller = $.superscrollorama();
  // controller.addTween(10, TweenMax.to($('#title-line1'), .75, {css:{top: 600}, ease:Quad.easeOut}),200);
  controller.addTween('#title-line1', TweenMax.from( $('#title-line1'), .75, {css:{letterSpacing:20,opacity:0}, ease:Quad.easeOut}));
  controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .5, {css:{opacity: 0}}));
  controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'64px'}, ease:Quad.easeInOut}));

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
                data: [80,75,60,50,30]
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

var linedata = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
    datasets: [
        {
            label: "Usuarios",
            fillColor: "rgba(210, 19, 19,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(210, 19, 19,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [6500, 5900, 8000, 8100, 5600, 5500, 4000]
        },
        {
            label: "Nuevos Usuarios",
            fillColor: "rgba(31, 143, 193, 0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(31, 143, 193,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [2800, 4800, 4000, 1900, 8600, 2700, 9000]
        }
    ]
};

    window.onload = function(){
        window.myRadar = new Chart(document.getElementById("chart-area").getContext("2d")).Radar(radarChartData, {
            responsive: true
        });

        window.myLineChart = new Chart(document.getElementById("chart-analytics").getContext("2d")).Line(linedata, {
            responsive: true,
            bezierCurve: true
        });
    }

$("#form1").submit(function(event) {
     var ajaxRequest;

    /* Stop form from submitting normally */
    event.preventDefault();

    /* Clear result div*/
    $("#result").html('');

    if($('#comments').val() == "" || $('#subject').val() == ""  || $('#first_name').val() == ""  || $('#email').val() == "" )
    {
        $("#result").html('Completa los datos que faltan para enviar el correo');
        return false;
    }

    /* Get from elements values */
    var values = { //Fetch form data
            'comments'     : $('#comments').val(),
            'subject'     : $('#subject').val(),
            'first_name'     : $('#first_name').val(),
            'last_name'     : $('#last_name').val(),
            'email'     : $('#email').val(),
        };

    /* Send the data using post and put the results in a div */
    /* I am not aborting previous request because It's an asynchronous request, meaning 
       Once it's sent it's out there. but in case you want to abort it  you can do it by  
       abort(). jQuery Ajax methods return an XMLHttpRequest object, so you can just use abort(). */
       ajaxRequest= $.ajax({
            url: "sendMail.php",
            type: "POST",
            data: values
        });

      /*  request cab be abort by ajaxRequest.abort() */

     ajaxRequest.done(function (response, textStatus, jqXHR){
          // show successfully for submit message
          $("#result").html('Gracias por contactarme');
     });

     /* On failure of request this function will be called  */
     ajaxRequest.fail(function (){

       // show error
       $("#result").html('Ha ocurrido un error por favor inténtalo más tarde');
     });
   });
   
