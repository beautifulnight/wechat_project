// pages/forget2/forger2.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [{
      text: '步骤一',
      desc: '输入账号'
    },
    {
      text: '步骤二',
      desc: '用户验证'
    },
    {
      text: '步骤三',
      desc: '修改密码'
    }
    ],
    value1:'',
    value2:'',

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
  onChange1(e){
    this.setData({
      value1: e.detail
    })
  },
  onChange2(e){
    this.setData({
      value2: e.detail
    })
  },
  finish(e){
    var that=this;
    if(this.data.value1==''||this.data.value2==''){
      wx.showToast({
        title: '密码不可为空',
        icon:'none',
        duration:1500,
        mask:true
      });
    }
    else if (this.data.value1.substr(1).match(app.globalData.regular_space) != null || this.data.value2.substr(1).match(app.globalData.regular_space) != null) {
      wx.showToast({
        title: '不可以含有空格哦！',
        icon: "none",
        duration: 1000,
        mask: true
      });
    }
    else if(this.data.value1==this.data.value2){
      wx.cloud.callFunction({
        name:'updateUser',
        data:{
          username: app.globalData.all_user_res.result.data[app.globalData.forget_index].username,
          new_psw:that.data.value1
        }
      })
      .then(res => {
        console.log(res.result, res.result.stats.updated)
      })
      .catch(console.error)

      wx.showToast({
        title: '修改密码成功！',
        icon: "success",
        duration: 1000,
        mask: true
      });
      setTimeout(function () {
        wx.reLaunch({
          url: '../login/login'
        }), 2000  
      });
    }
  }
})