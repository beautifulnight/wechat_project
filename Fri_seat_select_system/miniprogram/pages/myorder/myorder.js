// pages/myorder/myorder.js
import Dialog from '../../components/dist/dialog/dialog'
const db=wx.cloud.database();
const app=getApp();
const str = '当前暂无预定';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myclass: str,
    myseat: str,
    mystart: str,
    myend: str,
    id: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    if (app.globalData.is_ordering==true){
      db.collection('Reserve').where({
        user:app.globalData.username
      }).get({
        success: function (res){
          console.log("res=", res)
          that.setData({
            mystart: res.data[0].startTime,
            myend: res.data[0].stopTime,
            myclass: res.data[0].roomNum,
            myseat: res.data[0].seatNum,
            id: res.data[0]._id,
          });
          console.log(that.data.id)
        }
      })
    }
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
  cancel:function(e){
    var that=this;
    console.log(e);
    Dialog.confirm({
      title: '真的要取消吗',
      message: '比你帅的人都在努力呢',
      asyncClose: true
    })
    .then(() => {
      setTimeout(() => {
        console.log('id:',that.data.id)
        db.collection('Reserve').doc(that.data.id).remove({
          success: function (res) {
            console.log('删除成功',res.data)
            that.setData({
              myclass: str,
              myseat: str,
              mystart: str,
              myend: str,
              id: null,
            });
            app.globalData.is_ordering= false;
          },
          fail: function(err){
            console.log('删除失败',err)
          }
        });
        wx.showToast({
          title: '取消成功',
          icon: 'none',
          duration: 1000,
          mask: true
        })
        Dialog.close();
      }, 1000);
    })
    .catch(() => {
      Dialog.close();
    });
  },


})