/**
 * Created by Joy on 2017/6/13.
 */

/**
 *提示成功的操作
 */
function successShow(Mes) {
  var showMas = "<div class='weui_msg hide' id = 'msg1'style = 'display: block; opacity: 1;'> " +
    "<div class='weui_icon_area'><i class='weui_icon_success weui_icon_msg'></i></div> " +
    "<div class='weui_text_area'> " +
    "<h2 class='weui_msg_title'>" + Mes + "</h2>" +
    "</div> " +
    "<div class='weui_opr_area'> " +
    "<p class='weui_btn_area'> " +
    "<a href='javascript:;' class='weui_btn bg-orange pop-btn'>好的</a> " +
    "</p> " +
    "</div> " +
    "<div class='weui_extra_area'> " +
    "</div> " +
    "</div>";

  $("#allContainer").hide();
  $("body").append(showMas);

  $(".pop-btn").on("click", function () {
    WeixinJSBridge.call('closeWindow');
  });
}

/**
 * 错误信息的显示
 */
isShowErrorInfo = true;
function showErrorAlert(errorMsg) {
  errorMsg = isShowErrorInfo ? JSON.stringify(errorMsg) : "网络异常，请稍后重试";
  var showError = "<div class='weui_msg hide errorMes' id = 'msg1'style = 'display: block; opacity: 1;'> " +
    "<div class='weui_icon_area'><i class='weui_icon_msg weui_icon_waiting'></i></div> " +
    "<div class='weui_text_area'> " +
    "<h2 class='weui_msg_title'>网络异常，请稍后重试</h2> " +
    "<p class='weui_msg_desc'>" + errorMsg + "</p> " +
    "</div> " +
    "<div class='weui_opr_area'> " +
    "<p class='weui_btn_area'> " +
    "<a href='javascript:;' class='weui_btn weui_btn_warn pop-btn'>好的</a> " +
    "</p> " +
    "</div> " +
    "<div class='weui_extra_area'> " +
    "</div> " +
    "</div>";

  $("#allContainer").hide();
  $("body").append(showError);

  $(".pop-btn").on("click", function () {
    WeixinJSBridge.call('closeWindow');
  });

}

/**
 * 重写隐藏loading
 */
function hideLoading() {
  $(".weui_loading_toast").remove();
  $(".weui_mask_transparent").remove();
}