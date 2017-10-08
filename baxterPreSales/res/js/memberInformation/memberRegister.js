/**
 * Created by Joy on 2017/6/13.
 */

/**
 * 提交按钮点击事件
 */
$("#submit").on("click", function (e) {
  e.preventDefault();
  var isGo = checkMes();
  if (!isGo) {
    return;
  }
  successShow("注册成功");
});

/**
 * 注册信息填写的验证
 */
function checkMes() {
  var getPhone = $("#phone").val();
  var reg = /^1[3|4|5|7|8][0-9]{9}$/;
  if (!(reg.test(getPhone))) {
    errorMes("号码格式不对");
    return false;
  }
  return true;
}

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
 * 点击头像
 */
$("#imgSel").on("click", function () {
  $("#selectImg").trigger("click");
});