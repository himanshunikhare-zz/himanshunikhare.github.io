!(function (e) {
  "use strict";

  function menuFixed() {
    let scTop = $(window).scrollTop();
    if (scTop > 0) {
      $(".header").addClass("menu_fixed");
    } else {
      $(".header").removeClass("menu_fixed");
    }
  }
  menuFixed();
  $(window).scroll(function () {
    menuFixed();
  });

  function scrollSmoothTop() {
    $(
      '.btn_group a[href^="#"], .header a[href^="#"], .go_to_top a[href^="#"]'
    ).on("click", function (event) {
      var target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - 90,
            },
            1500
          );
      }
    });
  }
  scrollSmoothTop();

  function topScroll() {
    var $scTop = $(window).scrollTop();
    var $opcn = 1 - $scTop / 700;
    $(".hero_warp").css("opacity", $opcn);
    if ($opcn < 0) {
      $(".hero_warp").addClass("hide");
    } else {
      $(".hero_warp").removeClass("hide");
    }
    if ($scTop < 120) {
      $(".go_to_top").hide(300);
    } else {
      $(".go_to_top").show(300);
    }
  }
  topScroll();
  $(window).on("scroll", function () {
    topScroll();
  });

  function wowInit() {
    new WOW().init();
  }
  wowInit();
})(jQuery);
