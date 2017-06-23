/* ---- INICIALIZAR CAROUSEL ---- */

$(document).ready(function(){
	$('.carousel').carousel();
});

/* ---- EFECTO SMOOTH SCROLL ---- */

// Select all links with hashes
$('a[href*="#"]')

  // Remove links that don't actually link to anything
 /* .not('[href="#"]')
  .not('[href="#0"]')*/
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

/* ---- #HABILIDADES: BARRA PROGESO ---- */

/*botones*/
var $imgHtml = $('#imgHtml');
var $imgCss = $('#imgCss');
var $imgJs = $('#imgJs');
var $imgJquery = $('#imgJquery');
var $imgGit = $('#imgGit');

/*barras*/
var $barraBasico = $('#basico');
var $barraInter = $('#intermedio');

$barraBasico.hide();
$barraInter.hide();

$imgHtml.click(function(){
	$barraBasico.hide();
	$barraInter.show();
});

$imgCss.click(function(){
	$barraBasico.hide();
	$barraInter.show();
});

$imgJs.click(function(){
	$barraBasico.hide();
	$barraInter.show();
});

$imgJquery.click(function(){
	$barraBasico.hide();
	$barraInter.show();
});

$imgGit.click(function(){
	$barraBasico.show();
	$barraInter.hide();
});



