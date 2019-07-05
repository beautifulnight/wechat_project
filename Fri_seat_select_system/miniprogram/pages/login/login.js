// pages/login/login.js
const app = getApp()
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    switch_psw: true,
    url_bg: "http://wx4.sinaimg.cn/mw1024/ce78fa4cly1g4oaomvpyhj20kf0umk0q.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  userNameInput: function (e) {
    this.setData({
      username: e.detail
    })
  },
  passwordInput: function (e) {
    this.setData({
      password: e.detail
    })
  },
  userSwitchAdmin: function(e){
    app.globalData.is_User = !app.globalData.is_User;
    if (app.globalData.is_User==false){
      wx.showToast({
        title: '管理员模式',
        icon:"none",
        duration:1000,
        mask:true
      });
      this.setData({
        url_bg: "https://wx2.sinaimg.cn/mw690/ce78fa4cly1g4oaomtpn7j20kf0umgqs.jpg"
      })
    }
    else{
      wx.showToast({
        title: '用户模式',
        icon: "none",
        duration: 1000,
        mask: true
      });
      this.setData({
        url_bg: "http://wx4.sinaimg.cn/mw1024/ce78fa4cly1g4oaomvpyhj20kf0umk0q.jpg"
      })
    }

  },
  swtich_p: function (e) {
    this.setData({
      switch_psw: !this.data.switch_psw
    })
  },
  forgetPassword(e){
    wx.showToast({
      title: '正在跳转...',
      icon:"none",
      duration:1500,
      mask:true
    })
    wx.navigateTo({
      url: '../forget/forget',
    })
  },

  login:function(e){
    var that=this;
    console.log("e.detail=",e.detail)
    if (app.globalData.is_User == true) {
      wx.cloud.callFunction({
        name:'findUser',
        data:{
          username:that.data.username,
        }
      })
      .then(res => {
        console.log(res.result)
        if (res.result.data.length == 0) {
          wx.showToast({
            title: "用户名错误！",
            icon: 'none',
            duration: 2500,
            mask: true
          });
        }
        else {
          if (res.result.data[0].password == e.detail.value.password) {
            app.globalData.username = res.result.data[0].username;
            app.globalData.nickname = res.result.data[0].nickname;
            app.globalData.userInfo = res.result.data[0];
            console.log(app.globalData.username, app.globalData.nickname, app.globalData.userInfo);
            wx.reLaunch({
              url: '../home/home'
            });
            wx.showToast({
              title: "正在登陆...",
              icon: 'loading',
              duration: 1000,
              mask: true
            });
          }
          else {
            wx.showToast({
              title: "密码错误！",
              icon: 'none',
              duration: 2500,
              mask: true
            });
          }
        }
      })
      .catch(console.error)
    }
    else{
      db.collection('Admin').where({
        admname: e.detail.value.username
      }).get({
        success: function (res) {
          console.log("res=", res.data)
          if (res.data.length == 0) {
            wx.showToast({
              title: "管理员名称错误！",
              icon: 'none',
              duration: 2500,
              mask: true
            });
          }
          else {
            console.log(res.data.password)
            if (res.data[0].admpassword == e.detail.value.password) {
              wx.reLaunch({
                url: '../func_select_view/func_select_view'
              });
              wx.showToast({
                title: "管理员登陆中...",
                icon: 'loading',
                duration: 500,
                mask: true
              });
            }
            else {
              wx.showToast({
                title: "管理员密码错误！",
                icon: 'none',
                duration: 2500,
                mask: true
              });
            }
          }
        }
      })
    }
 
  }
})