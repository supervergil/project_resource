$(function() {
  $("#menu").on("click", function() {
    $("#center-info").fadeToggle();
  });

  $(window).on("resize", function() {
    if ($(window).width() > 767) {
      if ($("#center-info").css("display") === "none") {
        $("#center-info").fadeIn();
      }
    } else {
      if ($("#center-info").css("display") !== "none") {
        $("#center-info").css("display", "none");
      }
    }
  });
});
