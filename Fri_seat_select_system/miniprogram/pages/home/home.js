// pages/home/home.js
import Toast from '../../components/dist/toast/toast';
const app = getApp();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    room_info:[],
    room_url: [
      "https://wx4.sinaimg.cn/mw690/4aff7849ly1g4fxyuq1ctj235s2mt7wr.jpg",
      "https://wx4.sinaimg.cn/mw690/4aff7849ly1g4fxz1yh2hj235s2mt7wq.jpg",
      "https://wx2.sinaimg.cn/mw690/4aff7849ly1g4fxywx0utj235s2mt1l7.jpg",
      "https://wx2.sinaimg.cn/mw690/4aff7849ly1g4fxzeiwbhj235s2mtb2p.jpg"
    ],
    order_url:[
      'order_Url_1', 'order_Url_2','order_Url_3'
    ],
    room1_remain:null,
    room2_remain:null,
    room3_remain:null,
    is_order_ok:true,
    time_s: '08:00',
    time_e: '09:00',
    end_s:'09:00',
    start_e: '08:00',
    setInter_check:'',
    exist:0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      wx.showToast({
        title: '客官别急，龟速刷新中..',
        icon: 'loading',
        duration: 2000,
        mask: true
      })
      wx.cloud.callFunction({
        name: 'checkOrdering',
        data: {
          username: app.globalData.username,
        }
      })
        .then(res => {
          console.log('checkorder:', res.result)
          if (res.result.data.length == 0) {
            app.globalData.is_ordering = false;
          }
          else {
            app.globalData.is_ordering = true;
          }
        })
        .catch(console.error)

      wx.cloud.callFunction({
        name: 'requireStudyRoom',
      })
        .then(res => {
          console.log('studyroom:', res.result)
          var i, temp_info = [], if_exist = [];
          for (i = 0; i < res.result.data.length; i++) {
            temp_info[i] = res.result.data[i];
            if_exist[i] = true;
            temp_info[i].url = that.data.room_url[i];
            temp_info[i].order_url = that.data.order_url[i];
          }
          that.setData({
            room_info: temp_info,
            exist: if_exist,
          })
          console.log('教室信息:', that.data.room_info, that.data.exist);
        })
        .catch(console.error)

      wx.cloud.callFunction({
        name: 'requireReserve',
      })
        .then(res => {
          console.log('Reserve:', res.result)
          if (res.result.data.length != 0) {
            var i, temp_reserve = [], if_exist = [];
            for (i = 0; i < res.result.data.length; i++) {
              temp_reserve[i] = res.result.data[i];
            }
            app.globalData.all_reserve = temp_reserve;
          }
          console.log('预定信息:', app.globalData.all_reserve);

          for (var i = 0; i < that.data.room_info.length; i++) {
            for (var j = 0; j < app.globalData.all_reserve.length; j++) {
              if (app.globalData.all_reserve[j].roomNum == that.data.room_info[i].num) {
                if ((app.globalData.all_reserve[j].startTime > that.data.time_s && app.globalData.all_reserve[j].startTime < that.data.time_e) || (app.globalData.all_reserve[j].stopTime < that.data.time_e && app.globalData.all_reserve[j].stopTime > that.data.time_s) || (app.globalData.all_reserve[j].startTime <= that.data.time_s && app.globalData.all_reserve[j].stopTime >= that.data.time_e)) {
                  var temp_arry = that.data.room_info;
                  temp_arry[i].capacity = that.data.room_info[i].capacity - 1;
                  that.setData({
                    room_info: temp_arry
                  })
                  console.log('capacity', that.data.room_info[i].capacity);
                }
                else
                  console.log('no crash')
              }
            }
          }
        })
        .catch(console.error)    
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
    var that=this;
    wx.showToast({
      title: '客官别急，龟速刷新中..',
      icon:'loading',
      duration:2000,
      mask:true
    })
    wx.cloud.callFunction({
      name:'checkOrdering',
      data:{
        username:app.globalData.username,
      }
    })
      .then(res => {
        console.log('checkorder:',res.result)
        if (res.result.data.length == 0){
          app.globalData.is_ordering=false;
        }
        else{
          app.globalData.is_ordering = true;
        }
      })
      .catch(console.error)
    
    wx.cloud.callFunction({
      name: 'requireStudyRoom',
    })
    .then(res => {
      console.log('studyroom:',res.result)
      var i, temp_info=[],if_exist=[];
      for (i = 0; i < res.result.data.length;i++){
        temp_info[i] = res.result.data[i];
        if_exist[i] = true;
        temp_info[i].url = that.data.room_url[i];
        temp_info[i].order_url = that.data.order_url[i];
      }
      that.setData({
        room_info: temp_info,
        exist:if_exist,
      })
      console.log('教室信息:', that.data.room_info,that.data.exist);
    })
      .catch(console.error)

    wx.cloud.callFunction({
      name: 'requireReserve',
    })
      .then(res => {
        console.log('Reserve:', res.result)
        if (res.result.data.length != 0){
          var i, temp_reserve = [], if_exist = [];
          for (i = 0; i < res.result.data.length; i++) {
            temp_reserve[i] = res.result.data[i];
          }
          app.globalData.all_reserve = temp_reserve;
        }
        console.log('预定信息:', app.globalData.all_reserve);

        for (var i = 0; i < that.data.room_info.length; i++) {
          for (var j = 0; j < app.globalData.all_reserve.length; j++) {
            if (app.globalData.all_reserve[j].roomNum == that.data.room_info[i].num) {
              if ((app.globalData.all_reserve[j].startTime > that.data.time_s && app.globalData.all_reserve[j].startTime < that.data.time_e) || (app.globalData.all_reserve[j].stopTime < that.data.time_e && app.globalData.all_reserve[j].stopTime > that.data.time_s) || (app.globalData.all_reserve[j].startTime <= that.data.time_s && app.globalData.all_reserve[j].stopTime >= that.data.time_e)) {
                var temp_arry = that.data.room_info;
                temp_arry[i].capacity = that.data.room_info[i].capacity - 1;
                that.setData({
                  room_info: temp_arry
                })
                console.log('capacity', that.data.room_info[i].capacity);
              }
              else
                console.log('no crash')
            }
          }
        }
      })
      .catch(console.error)

  },
  bindTimeChange_s: function (e) {
    this.setData({
      time_s: e.detail.value,
      start_e: e.detail.value
    })
  },
  bindTimeChange_e: function (e) {
    this.setData({
      time_e: e.detail.value,
      end_s:e.detail.value
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  order_Url_1: function (e) {
    app.globalData.order_starttime = this.data.time_s;
    app.globalData.order_endtime = this.data.time_e;
    app.globalData.r_num = this.data.room_info[0].num;
    wx.navigateTo({
      url: '../order/order'
    })
  },
  order_Url_2: function (e) {
    app.globalData.order_starttime = this.data.time_s;
    app.globalData.order_endtime = this.data.time_e;
    app.globalData.r_num = this.data.room_info[1].num;
    wx.navigateTo({
      url: '../order/order',
    })
  },
  order_Url_3: function (e) {
    app.globalData.order_starttime = this.data.time_s;
    app.globalData.order_endtime = this.data.time_e;
    app.globalData.r_num = this.data.room_info[2].num;
    wx.navigateTo({
      url: '../order/order',
    })
  },
})