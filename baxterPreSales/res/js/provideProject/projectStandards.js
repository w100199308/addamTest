/**
 * Created by Joy on 2017/6/17.
 */

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

/**
 * 点击返回
 */
$("#return").on("click", function () {
  $("#selectSR").hide();
  $("#projectStandards").fadeIn(150);
});

$("#selectCode").on("click", function () {
  $("#projectStandards").hide();
  $("#selectSR").fadeIn(150);
});

$("#allCode").on("click", "a", function () {
  $("#code").text($(this).find("p").text());
  $("#selectSR").hide();
  $("#projectStandards").fadeIn(150);
});