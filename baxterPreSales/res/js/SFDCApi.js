var SFDCApi = {};
//实例化forcetk
var client = new forcetk.Client();

//设置SessionToken
var InstanceUrl;
if (context.EnableReverseProxy) {
  InstanceUrl = context.ReverseProxyUrl;
}
else {
  InstanceUrl = context.InstanceUrl;
}
client.setSessionToken(context.SessionId, context.ApiVersion, InstanceUrl);

//设置RefreshTokenProxy，AccessToken失效后会调用RefreshTokenProxy刷新AccessToken
client.setRefreshTokenProxy(context.OpenId, context.WEQYUserId, context.AppId, context.RefreshTokenProxyUrl, context.SFDCUserId);



SFDCApi.Authentication = function (callback) {
  if (context.OpenId == null || context.OpenId == '') {
    callback(false);
  } else {
    //获取全局Context
    if (context.IsLogin) {
      callback(true);
    } else {
      //调用Apex Rest API
      client.query(
        "select Wechat_Login__c,Customer__c from vlink__Wechat_User__c where vlink__Open_ID__c = '" + context.OpenId + "'",
        //Call成功回调方法
        function (data, textStatus, jqXHR) {
            userinfo = data;
          // if (jqVersion == '1.3') {
          //   userinfo = JSON.parse(data);
          // } else if (jqVersion == '2.1') {
          //   userinfo = data;
          // }
          console.log(userinfo);
          if (userinfo.totalSize > 0) {
            if (userinfo.records[0].Customer__c == null || !userinfo.records[0].Wechat_Login__c) {
              window.location.href = "/Custom/bgy/wemp/user/login/login.html";
              callback(false);
            }
            else {
              //设置用户登录状态
              context.IsLogin = true;
              SetContext(context);
              callback(true);
            }
          } else {
            ShowError("没有查到您的用户信息,请您重新关注公众号!");
          }
        },
        //Call失败回调方法
        function (jqXHR, textStatus, errorThrown) {
          ShowError(jqXHR);
        }
      );
    }
  }
};
