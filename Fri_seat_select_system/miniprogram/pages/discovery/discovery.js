// pages/discovery/discovery.js
var util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username: app.globalData.username,
      nickname: app.globalData.nickname
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.username, this.data.nickname);
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
  info_Url(e){
    wx.navigateTo({
      url: '../info/info',
    })
  },
  myorder_Url:function(e){
    wx.navigateTo({
      url: '../myorder/myorder',
    })
  },
  history_Url: function (e) {
    wx.navigateTo({
      url: '../history/history',
    })
  },
  feedback_Url: function (e) {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
})