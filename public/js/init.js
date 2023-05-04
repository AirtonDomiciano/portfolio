/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

// eslint-disable-next-line no-undef
jQuery(document).ready(function async($) {
  console.log("Init JQuery");

  /*---------------------------------------------------*/
  let palavras = ["Back-End", "Front-End", "Design Responsivo", "Mobile"];
  let inicio = 0;
  let intervalo = 1500;
  $("#souDesenvolvedor").text(palavras[inicio++]);
  setInterval(function () {}, intervalo);
  setInterval(function () {
    $("#souDesenvolvedor").slideUp(function () {
      if (inicio >= palavras.length) {
        inicio = 0;
      }
      $(this)
        .text(palavras[inicio++])
        .slideDown();
    });
  }, intervalo);

  /*----------------------------------------------------*/
  /* FitText Settings
  /*----------------------------------------------------*/

  setTimeout(function () {
    $("h1.responsive-headline").fitText(1, {
      minFontSize: "40px",
      maxFontSize: "60px",
    });
  }, 0);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
  /*----------------------------------------------------*/

  var sections = $("section");
  var navigation_links = $("#nav-wrap a");

  $(document.body).on("click", ".smoothscroll", function async(e) {
    console.log("smoothscroll click");
    e.preventDefault();
    var target = this.hash;
    const $target = $(target);

    $("html, body")
      .stop()
      .animate({ scrollTop: $target.offset().top }, 800, "swing", function () {
        window.location.hash = target;
      });

  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
      /*----------------------------------------------------*/
  //TODO Ao clicar não muda a cor do inicio.
  

  $("selector").waypoint({
    handler: function async (event, direction) {
      var active_section;

      active_section = $(this);
      if (direction === "up") {
        active_section = active_section.prev();
      }

      var active_link = $(
        '#nav-wrap a[href="#' + active_section.attr("id") + '"]'
      );

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },
    offset: "35%",
  });

  /*----------------------------------------------------*/
  /* Make sure that #header-background-image height is
  /* equal to the browser height.
  /*----------------------------------------------------*/

  $("header").css({ height: $(window).height() });
  $(window).on("resize", function () {
    $("header").css({ height: $(window).height() });
    $("body").css({ width: $(window).width() });
  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
------------------------------------------------------*/

  $(window).on("scroll", function () {
    var h = $("header").height();
    var y = $(window).scrollTop();
    var nav = $("#nav-wrap");

    if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut("fast");
    } else {
      // Remove back-ground do header ao usar o scroll
      if (y < h * 0.2) {
        nav.removeClass("opaque").fadeIn("fast");
      } else {
        nav.addClass("opaque").fadeIn("fast");
      }
    }
  });

  /*----------------------------------------------------*/
  /*	Modal Popup
------------------------------------------------------*/

  // $(".item-wrap a").magnificPopup({
  //   type: "inline",
  //   fixedContentPos: false,
  //   removalDelay: 200,
  //   showCloseBtn: false,
  //   mainClass: "mfp-fade",
  // });

  // $(document).on("click", ".popup-modal-dismiss", function (e) {
  //   e.preventDefault();
  //   $.magnificPopup.close();
  // });

  /*----------------------------------------------------*/
  /*	Flexslider
/*----------------------------------------------------*/
  $(".flexslider").flexslider({
    namespace: "flex-",
    controlsContainer: ".flex-container",
    animation: "slide",
    controlNav: true,
    directionNav: false,
    smoothHeight: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    randomize: false,
  });
});
