// pages/feedback/feedback.js
const app=getApp();
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1: false,
    show2: false,
    show3: false,
    f_type: '反馈类型',
    f_class: '教室',
    f_seat: '座位',
    f_title:'',
    f_content:'',
    columns1: ['不良行为举报', '座位问题反馈'],
    columns2: ['胡迪自习室', '叉叉自习室', '巴斯光年自习室', '嘴炮王自习室'],
    columns3: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
  },
  onCancel() {
    this.setData({
      show1: false,
      show2: false,
      show3: false
    });
  },
  onConfirm1(event) {
    this.setData({
      show1: false,
      f_type: event.detail.value
    });
  },
  onConfirm2(event) {
    this.setData({
      show2: false,
      f_class: event.detail.value
    });
  },
  onConfirm3(event) {
    this.setData({
      show3: false,
      f_seat: event.detail.value
    });
  },
  onClickIcon1() {
    this.setData({
      show1: true
    });
  },
  onClickIcon2() {
    this.setData({
      show2: true
    });
  },
  onClickIcon3() {
    this.setData({
      show3: true
    });
  },
  onClose() {
    this.setData({
      show1: false,
      show2: false,
      show3: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  title_Input(e){
    this.setData({
      f_title:e.detail
    })
  },
  content_Input(e){
    this.setData({
      f_content: e.detail
    })
  },
  submitFeedback: function(){
    if (this.data.f_type == '反馈类型' || this.data.f_class == '教室' || this.data.f_seat == '座位'||this.data.f_content==''||this.data.f_title==''){
      wx.showToast({
        title: '请补全反馈信息!',
        icon: 'none',
        duration: 1500,
        mask: true
      })
    }
    else{
      wx.showToast({
        title: '反馈成功!',
        icon: 'success',
        duration: 1500,
        mask: true
      })
      db.collection("feedback").add({
        data: {
          user_name: app.globalData.username,
          fb_type: this.data.f_type,
          fb_seat: this.data.f_seat,
          fb_room: this.data.f_class,
          fb_title: this.data.f_title,
          fb_content: this.data.f_content,
        },
        success: res => {
          console.log('[数据库] [新增记录] 成功')
        },
        fail: err => {
          console.error('[数据库] [新增记录] 失败：')
        }
      });
    }
  }
})