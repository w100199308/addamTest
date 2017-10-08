/**
 * Created by Joy on 2017/6/15.
 */

/**
 * 项目列表点击事件
 */
$("#allList").on("click", "a", function (e) {
  e.preventDefault();
  $("#meslist").hide();
  $("body").addClass("white");
  $("#hospital").text($(this).find("p").text());
  $("#mesDetail").fadeIn(150);
});

/**
 * 返回按钮点击事件
 */
$("#returnMes").on("click", function (e) {
  e.preventDefault();
  $("#mesDetail").hide();
  $("body").removeClass("white");
  $("#meslist").fadeIn(150);
});
