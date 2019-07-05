// pages/info/info.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "http://i1.sinaimg.cn/ent/m/2010-06-04/U3587P28T3D2978594F326DT20100604185952.jpg",
    switch_psw: true,
    username_error: false,
    password_error: false,
    email_error: false,
    answer_error: false,
    id: "ID",
    psd: "password",
    nickname: "nickname",
    answer: "answer",
    que: "question",
    email: "xxx@xxx.com",

  },
  changenpsd() {
    this.setData({
      show1: true
    });
  },
  nickNameInput: function (e) {
    this.setData({
      nickname: e.detail
    });
    if (e.detail.substr(1).match(app.globalData.regular_space) != null) {
      wx.showToast({
        title: '不可以含有空格哦！',
        icon: "none",
        duration: 1000,
        mask: true
      })
      app.globalData.if_have_space = true;
    }
    else
      app.globalData.if_have_space = false;
  },
  userNameInput: function (e) {
    this.setData({
      username: e.detail
    });
    if (e.detail.substr(1).match(app.globalData.regular_space) != null) {
      wx.showToast({
        title: '不可以含有空格哦！',
        icon: "none",
        duration: 1000,
        mask: true
      })
      app.globalData.if_have_space = true;
    }
    else
      app.globalData.if_have_space = false;
  },
  userNameOnblur(e) {
    var that = this;
    wx.cloud.callFunction({
      name: 'checkRegisterUser',
      data: {
        username: that.data.username,
      }
    })
      .then(res => {
        console.log(res.result)
        if (res.result.data.length != 0) {
          wx.showToast({
            title: "该用户名已被注册！",
            icon: 'none',
            duration: 2000,
            mask: false
          });
          app.globalData.is_registed = true;
        }
        else
          app.globalData.is_registed = false;
      })
      .catch(console.error)
  },


  passwordInput: function (e) {
    this.setData({
      psw: e.detail
    });
    console.log(e.detail)
    if (e.detail.substr(1).match(app.globalData.regular_space) != null) {
      wx.showToast({
        title: '不可以含有空格哦！',
        icon: "none",
        duration: 1000,
        mask: true
      })
      app.globalData.if_have_space = true;
    }
    else
      app.globalData.if_have_space = false;
  },
  emailInput: function (e) {
    this.setData({
      email: e.detail
    });
    console.log(this.data.email);
    if (e.detail.substr(1).match(app.globalData.regular_space) != null) {
      wx.showToast({
        title: '不可以含有空格哦！',
        icon: "none",
        duration: 1000,
        mask: true
      })
      app.globalData.if_have_space = true;
    }
    else
      app.globalData.if_have_space = false;
  },
  updata: function (e) {
    var that = this;
    const db = wx.cloud.database();
    let regu_email = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    let flag = !regu_email.test(e.detail.value.email);
    let flag2 = true;
    let if1, if2, if3, if4, if5;
    if1 = if2 = if3 = if4 = if5 = false;
    if (e.detail.value.username == "" || e.detail.value.username == null) {
      if1 = true;
      this.setData({
        username_error: true
      });
    }
    if (e.detail.value.password == "" || e.detail.value.password == null) {
      if2 = true;
      this.setData({  
        password_error: true
      });
    }
    if (e.detail.value.email == "" || e.detail.value.email == null) {
      if3 = true;
      flag = true;
      this.setData({
        email_error: true
      })
    }

    if (if1 && if2 && if3 == true)
      app.globalData.if_have_space = false;
    if (app.globalData.if_have_space == true || (flag || if1 || if2 || if3 || app.globalData.is_registed) != false) {
      var text = '';
      var text1 = '用户名', text2 = '密码', text3 = '邮箱账号', text4 = '不能为空！',
        text5 = '邮箱格式错误！', text6 = '该用户名已被注册！', text7 = '不可以输入空格！';//有错误
      if (if1 == true)
        text = text + text1;
      if (if2 == true)
        text = text + text2;
      if (if3 == true)
        text = text + text3;
      if ((if1 || if2 || if3) == true)
        text = text + text4;
      if (flag == true)
        text = text + text5;
      if (app.globalData.is_registed == true)
        text = text + text6;
      if (app.globalData.if_have_space == true)
        text = text + text7;
      wx.showToast({
        title: text,
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
    else {
      if (e.detail.value.nickname == "" || e.detail.value.nickname == null)
        e.detail.value.nickname = e.detail.value.username
      db.collection('User').add({
        data: {
          nickname: e.detail.value.nickname,
          username: e.detail.value.username,
          password: e.detail.value.password,
          email: e.detail.value.email,
          credit: 100,
          que: that.data.que,
          answer: that.data.answer,
        },
        success: res => {
          console.log('[数据库] [新增记录] 成功')
        },
        fail: err => {
          console.error('[数据库] [新增记录] 失败：')
        }
      })
      console.log('user registed', e.detail.value)
      wx.showToast({
        title: '注册成功!',
        icon: 'success',
        duration: 2000,
        mask: true
      }),
        setTimeout(function () {
          wx.reLaunch({
            url: '../login/login'
          }), 2000
        })
    }
  },
  swtich_p: function (e) {
    this.setData({
      switch_psw: !this.data.switch_psw
    })
  },
  cancel(){
    wx.navigateBack({
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that=this;
    this.setData({
      id: app.globalData.userInfo.username,
      psd: app.globalData.userInfo.password,
      nickname: app.globalData.userInfo.nickname,
      answer: app.globalData.userInfo.answer,
      que: app.globalData.userInfo.que,
      email: app.globalData.userInfo.email
    })
    wx.getUserInfo({
      success: function (res) {
        console.log(res); 
        var avatarUrl = 'userInfo.avatarUrl'; 
        var nickName = 'userInfo.nickName'; 
        that.setData({ 
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName, 
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})