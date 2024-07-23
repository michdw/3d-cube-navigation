var cube = $(".cube");

function rotateCube(horiz, vert, newInset, newSide) {
  // hide features on originally visible side of cube
  $(".nav, .insets>div").hide();
  // rotate cube a certain way on x and y axis
  cube.css("transform", "rotateY(" + horiz + "deg) rotateX(" + vert + "deg)");
  // change color of features to correspond with new side
  $(".nav").css("color", newSide.data("color"));
  newInset.css("background", newSide.data("bg"));
  // make features visible- nav buttons fade in further below
  newInset.delay(400).fadeIn(700);
}

var navFadeIn = function (thisNav) {
  $(".nav").not(thisNav).delay(400).fadeIn(700);
  $(".homeicon").fadeIn();
};

$(document).ready(function () {
  $(".preload").fadeOut();

  $(".homeicon").hide();
  // center inset becomes visible
  $(".centerInset").css("background", $(".centerFace").data("bg"));
  $(".centerSquare:nth-of-type(1)").css("background", $(".topFace").data("bg"));
  $(".centerSquare:nth-of-type(2)").css(
    "background",
    $(".leftFace").data("bg")
  );
  $(".centerSquare:nth-of-type(3)").css(
    "background",
    $(".rightFace").data("bg")
  );
  $(".centerSquare:nth-of-type(4)").css(
    "background",
    $(".bottomFace").data("bg")
  );
  $(".centerInset").fadeIn();

  $(".icons").click(function() {
    $(".introText").fadeOut(100);
  })

  $(".toHome").hover(
    function () {
      $(this).css("cursor", "pointer");
      $(".homeicon").css("text-shadow", "0 0 20px #fff");
    },
    function () {
      $(".homeicon").css("text-shadow", "none");
    }
  );

  // rotation on nav hover
  $(".topIcon").hover(
    function () {
      $(".insets").css("transform", " rotateX(-20deg)");
      cube.css("transform", "rotateX(-20deg)");
      $(".nav").fadeIn(700);
    },
    function () {
      $(".insets").css("transform", "rotateX(0)");
    }
  );
  $(".leftIcon").hover(
    function () {
      $(".insets").css("transform", " rotateY(20deg)");
      cube.css("transform", "rotateY(20deg)");
      $(".nav").fadeIn(700);
    },
    function () {
      $(".insets").css("transform", "rotateY(0)");
    }
  );
  $(".bottomIcon").hover(
    function () {
      $(".insets").css("transform", " rotateX(20deg)");
      cube.css("transform", "rotateX(20deg)");
      $(".nav").fadeIn(700);
    },
    function () {
      $(".insets").css("transform", "rotateX(0)");
    }
  );
  $(".rightIcon").hover(
    function () {
      $(".insets").css("transform", " rotateY(-20deg)");
      cube.css("transform", "rotateY(-20deg)");
      $(".nav").fadeIn(700);
    },
    function () {
      $(".insets").css("transform", "rotateY(0)");
    }
  );

  //move cube on icon click
  $(".topIcon, .topFace").click(function () {
    rotateCube(0, -90, $(".topInset"), $(".topFace"));
    navFadeIn(this);
  });
  $(".leftIcon, .leftFace").click(function () {
    rotateCube(90, 0, $(".leftInset"), $(".leftFace"));
    navFadeIn(this);
  });
  $(".rightIcon, .rightFace").click(function () {
    rotateCube(-90, 0, $(".rightInset"), $(".rightFace"));
    navFadeIn(this);
  });
  $(".bottomIcon, .bottomFace").click(function () {
    rotateCube(0, 90, $(".bottomInset"), $(".bottomFace"));
    navFadeIn(this);
  });
  $(".toHome, .insets").click(function () {
    rotateCube(0, 0, $(".centerInset"), $(".centerFace"));
    $(".homeicon").fadeOut();
    $(".nav").delay(400).fadeIn(700);
  });
}); //end ready
