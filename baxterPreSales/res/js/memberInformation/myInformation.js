/**
 * Created by Joy on 2017/6/13.
 */


/**
 * 点击头像时触摸效果
 */
$("#changeMes").on("touchstart", function (e) {
  e.preventDefault();
  $(this).parent().toggleClass("simulation");
});

$("#changeMes").on("touchend", function (e) {
  e.preventDefault();
  $(this).parent().toggleClass("simulation");
  window.location.href = "memberRegister.html";
});