// pages/forget/forget.js
const db=wx.cloud.database();
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
    value:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that=this;
    wx.cloud.callFunction({
      name: 'requireUser',
      success: res => {
        app.globalData.all_user_res = res;
        console.log(app.globalData.all_user_res);
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    });
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

  },
  onChange(e){
    this.setData({
      value: e.detail
    })
  },
  nextstep(e){
    var i, that=this;
    var flag=false;
    for (i = 0; i < app.globalData.all_user_res.result.data.length;i++){
      if (this.data.value == app.globalData.all_user_res.result.data[i].username){
        flag=true;
        app.globalData.forget_index=i;
        wx.navigateTo({
          url: '../forget1/forget1',
        });
      }
    } 
    if (flag == false) {
      wx.showToast({
        title: '用户名错误',
        icon: 'none',
        mask: true,
        duration: 1500,
      })
    }
  }
})