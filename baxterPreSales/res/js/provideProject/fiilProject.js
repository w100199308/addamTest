/**
 * Created by Joy on 2017/6/17.
 */


/**
 * 行业信息的样式处理
 */
$("#getSelval").on("change", function () {
  $(this).removeClass("defaultCol");
  if ($(this).val() == "1") {
    $(this).addClass("defaultCol");
  }
});


/**
 * 第一个“下一步”按钮的点击事件
 */
$("#oneSte").on("click", function () {
  if ($("#getSelval").val() == 1) {
    errorMes("未选择行业");
    return false;
  }
  $.showLoading();
  setTimeout(function () {
    $.hideLoading();
    $("#basicsMes").hide();
    $("#detailMes").show();
  }, 1000)
});

/**
 * 第二个“下一步”按钮的点击事件
 */
$("#twoSte").on("click", function () {
  $.showLoading();
  setTimeout(function () {
    $.hideLoading();
    $("#detailMes").hide();
    $("#chatMes").show();
  }, 1000)
});

/**
 * “提交”按钮的点击事件
 */
$("#thirdSte").on("click", function () {
  var isGo = checkMes();
  if (!isGo) {
    return false;
  }
  $.showLoading();
  setTimeout(function () {
    $.hideLoading();
    successShow("提交成功");
  }, 1000)
});

/**
 * 信息填写的验证
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