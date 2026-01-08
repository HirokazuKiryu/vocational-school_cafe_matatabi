
$(".menu_btn").on('click',() => {
  $('header').toggleClass("on");
});

/*==============================================
モーダルメニュー
===============================================*/



$("#drink").on("click", () => {
  $(".modal").fadeIn();
  $(".drink_menu").show();
  $(".food_menu").hide();
  $(".morning_menu").hide();
});

$("#foods").on("click", () => {
  $(".modal").fadeIn();
  $(".food_menu").show();
  $(".drink_menu").hide();
  $(".morning_menu").hide();
});

$("#morning").on("click", () => {
  $(".modal").fadeIn();
  $(".morning_menu").show();
  $(".drink_menu").hide();
  $(".food_menu").hide();
});

$(".close").on("click", () => {
  $(".modal").fadeOut();
});

$(".modal_bg").on("click", () => {
  $(".modal").fadeOut();
});