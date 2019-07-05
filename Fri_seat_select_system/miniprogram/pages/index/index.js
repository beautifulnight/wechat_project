//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active: 'home'
  },
  onChange(event) {
    console.log(event.detail);
  },
  login_url: function(){
    wx.navigateTo({
      url: '../login/login'
    })
  },
  register_url:function(){
    wx.navigateTo({
      url: '../register/register'
    })
  },
  onLoad: function (options) {
    var that=this;
    wx.getUserInfo({ 
      success: function (res) { 
        console.log('get_user_info', res.userInfo.avatarUrl); 
      } 
    })

  },
})
