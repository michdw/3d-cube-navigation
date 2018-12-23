var cube = $('.cube');

function rotateCube(horiz, vert, newInset, newFace) {
  // hide features on originally visible side of cube
  $('.nav, .insets>div').hide();
  // rotate cube a certain way on x and y axis
  cube.css('transform', 'rotateY(' + horiz + 'deg) rotateX(' + vert + 'deg)')
    .css('-webkit-transform', 'rotateY(' + horiz + 'deg) rotateX(' + vert + 'deg)');
  // change color of features to correspond with new side
  $('.nav').css('color', newFace.data('color'));
  newInset.css('background', newFace.data('bg'));
  // make features visible- nav buttons fade in further below
  newInset.delay(400).fadeIn(700);
}

$(document).ready(function() {
  $('.preload').fadeOut();
  $('.homeicon').hide();
  // center inset becomes visible
  $('.centerInset').css('background', $('.centerFace').data('bg'));
  $('.colorSquare:nth-of-type(1)').css('background', $('.topFace').data('bg'));
  $('.colorSquare:nth-of-type(2)').css('background', $('.leftFace').data('bg'));
  $('.colorSquare:nth-of-type(3)').css('background', $('.rightFace').data('bg'));
  $('.colorSquare:nth-of-type(4)').css('background', $('.bottomFace').data('bg'));
  $('.centerInset').fadeIn();

  $('.toHome').hover(function() {
    $(this).css('cursor', 'pointer');
    $('.home').css('text-shadow', '0 0 20px #fff');
  }, function() {
    $('.home').css('text-shadow', 'none');
  });

  // move inset when hovering over nav buttons
  $('.navTop').hover(function() {
    $('.insets').css('transform', ' rotateX(-16deg)');
  }, function() {
    $('.insets').css('transform', 'rotateX(0)');
  });
  $('.navLeft').hover(function() {
    $('.insets').css('transform', ' rotateY(16deg)');
  }, function() {
    $('.insets').css('transform', 'rotateY(0)');
  });
  $('.navRight').hover(function() {
    $('.insets').css('transform', ' rotateY(-16deg)');
  }, function() {
    $('.insets').css('transform', 'rotateY(0)');
  });
  $('.navBottom').hover(function() {
    $('.insets').css('transform', ' rotateX(16deg)');
  }, function() {
    $('.insets').css('transform', 'rotateX(0)');
  });

  //move cube on click
  var navFadeIn = function(thisNav) {
    $('.home, .nav').not(thisNav).delay(400).fadeIn(700);
  }

  $('.navTop').click(function() {
    rotateCube(0, -90, $('.topInset'), $('.topFace'));
    navFadeIn(this);
   });
  $('.navLeft').click(function() {
    rotateCube(90, 0, $('.leftInset'), $('.leftFace'));
    navFadeIn(this);
   });
  $('.navRight').click(function() {
    rotateCube(-90, 0, $('.rightInset'), $('.rightFace'));
    navFadeIn(this);
   });
  $('.navBottom').click(function() {
    rotateCube(0, 90, $('.bottomInset'), $('.bottomFace'));
    navFadeIn(this);
   });
  $('.toHome, .insets>div').click(function() {
    rotateCube(0, 0, $('.centerInset'), $('.centerFace'));
    $('.home').fadeOut();
    $('.nav').delay(400).fadeIn(700);
  });

}); //end ready
