/**
 * Created by Joy on 2017/6/13.
 */

/**
 * 点击项目列表事件
 */
$("#allList").on("click", "a", function (e) {
  e.preventDefault();
  $("#meslist").hide();
  $("#mesDetail").show();
});

/**
 * 提交按钮的点击事件
 */
$("#submit").on("click", function (e) {
  e.preventDefault();
  $.showLoading("照片提交中");
  setTimeout(function () {
    hideLoading();
    $.toast("提交成功");
    setTimeout(function () {
      $("#meslist").show();
      $("#mesDetail").hide();
    }, 3000)

  }, 3000);
});

/**
 * 返回按钮的点击事件
 */
$("#return").on("click", function (e) {
  errorMes("未上传照片");
  return false;
  $("#meslist").show();
  $("#mesDetail").hide();
});

/**
 * 有误信息显示
 */
function errorMes(mes) {
  var getWord = "<p class='errorTip'>" + mes + "</p>";
  $("body").append(getWord);
  setTimeout(function () {
    $(".errorTip").remove()
  }, 2000);
}