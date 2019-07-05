// pages/order/order.js
const app = getApp();
const db = wx.cloud.database();
const src0= "https://image.flaticon.com/icons/svg/1861/1861698.svg";  //空
const src1= "https://image.flaticon.com/icons/svg/1861/1861711.svg";  //有人预定
const src2= "https://image.flaticon.com/icons/svg/1861/1861742.svg";  //当前预定
Page({

  data: {
    seat: [
      { src: src0, seat_num: 1, if_ok: false }, { src: src0, seat_num: 2, if_ok: false }, { src: src0, seat_num: 3, if_ok: false }, { src: src0, seat_num: 4, if_ok: false},
      { src: src0, seat_num: 5, if_ok: false }, { src: src0, seat_num: 6, if_ok: false }, { src: src0, seat_num: 7, if_ok: false }, { src: src0, seat_num: 8, if_ok: false }, 
      { src: src0, seat_num: 9, if_ok: false }, { src: src0, seat_num: 10, if_ok: false }, { src: src0, seat_num: 11, if_ok: false }, { src: src0, seat_num: 12, if_ok: false},
      { src: src0, seat_num: 13, if_ok: false }, { src: src0, seat_num: 14, if_ok: false }, { src: src0, seat_num: 15, if_ok: false }, { src: src0, seat_num: 16, if_ok: false},
      { src: src0, seat_num: 17, if_ok: false }, { src: src0, seat_num: 18, if_ok: false }, { src: src0, seat_num: 19, if_ok: false }, { src: src0, seat_num: 20, if_ok: false},
      { src: src0, seat_num: 21, if_ok: false }, { src: src0, seat_num: 22, if_ok: false }, { src: src0, seat_num: 23, if_ok: false }, { src: src0, seat_num: 24, if_ok: false},
      { src: src0, seat_num: 25, if_ok: false }, { src: src0, seat_num: 26, if_ok: false }, { src: src0, seat_num: 27, if_ok: false }, { src: src0, seat_num: 28, if_ok: false},
      { src: src0, seat_num: 29, if_ok: false }, { src: src0, seat_num: 30, if_ok: false }, { src: src0, seat_num: 31, if_ok: false }, { src: src0, seat_num: 32, if_ok: false},
      { src: src0, seat_num: 33, if_ok: false }, { src: src0, seat_num: 34, if_ok: false }, { src: src0, seat_num: 35, if_ok: false }, { src: src0, seat_num: 36, if_ok: false},
      { src: src0, seat_num: 37, if_ok: false }, { src: src0, seat_num: 38, if_ok: false }, { src: src0, seat_num: 39, if_ok: false }, { src: src0, seat_num: 40, if_ok: false},
    ],
    show:true,
    show1:false,
    seat_num:null,
    seat_src:null,
    remark:'备注：',
    reservetime:'预定时间：',
    all_seat_res:null,
    temp:'',
  },

  onOrder1:function(e) {
    var that=this, tempseat = that.data.seat, index=0;
    if (tempseat[index].src!=src1){

      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp:index,
        remark: temp_remark,
      });
      console.log(e)
    }
  },
  onOrder2: function (e) {
    var that = this, tempseat = that.data.seat, index = 1;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder3: function (e) {
    var that = this, tempseat = that.data.seat, index = 2;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder4: function (e) {
    var that = this, tempseat = that.data.seat, index = 3;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder5: function (e) {
    var that = this, tempseat = that.data.seat, index = 4;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder6: function (e) {
    var that = this, tempseat = that.data.seat, index = 5;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder7: function (e) {
    var that = this, tempseat = that.data.seat, index = 6;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder8: function (e) {
    var that = this, tempseat = that.data.seat, index = 7;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder9: function (e) {
    var that = this, tempseat = that.data.seat, index = 8;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder10: function (e) {
    var that = this, tempseat = that.data.seat, index = 9;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder11: function (e) {
    var that = this, tempseat = that.data.seat, index = 10;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder12: function (e) {
    var that = this, tempseat = that.data.seat, index = 11;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder13: function (e) {
    var that = this, tempseat = that.data.seat, index = 12;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder14: function (e) {
    var that = this, tempseat = that.data.seat, index = 13;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder15: function (e) {
    var that = this, tempseat = that.data.seat, index = 14;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder16: function (e) {
    var that = this, tempseat = that.data.seat, index = 15;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder17: function (e) {
    var that = this, tempseat = that.data.seat, index = 16;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder18: function (e) {
    var that = this, tempseat = that.data.seat, index = 17;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder19: function (e) {
    var that = this, tempseat = that.data.seat, index = 18;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder20: function (e) {
    var that = this, tempseat = that.data.seat, index = 19;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder21: function (e) {
    var that = this, tempseat = that.data.seat, index = 20;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder22: function (e) {
    var that = this, tempseat = that.data.seat, index = 21;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder23: function (e) {
    var that = this, tempseat = that.data.seat, index = 22;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder24: function (e) {
    var that = this, tempseat = that.data.seat, index = 23;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder25: function (e) {
    var that = this, tempseat = that.data.seat, index = 24;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder26: function (e) {
    var that = this, tempseat = that.data.seat, index = 25;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder27: function (e) {
    var that = this, tempseat = that.data.seat, index = 26;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder28: function (e) {
    var that = this, tempseat = that.data.seat, index = 27;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder29: function (e) {
    var that = this, tempseat = that.data.seat, index = 28;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder30: function (e) {
    var that = this, tempseat = that.data.seat, index = 29;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder31: function (e) {
    var that = this, tempseat = that.data.seat, index = 30;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder32: function (e) {
    var that = this, tempseat = that.data.seat, index = 31
    if (tempseat[index].src != src1) {;
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder33: function (e) {
    var that = this, tempseat = that.data.seat, index = 32;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder34: function (e) {
    var that = this, tempseat = that.data.seat, index = 33;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder35: function (e) {
    var that = this, tempseat = that.data.seat, index = 34;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder36: function (e) {
    var that = this, tempseat = that.data.seat, index = 35;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder37: function (e) {
    var that = this, tempseat = that.data.seat, index = 36;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder38: function (e) {
    var that = this, tempseat = that.data.seat, index = 37;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder39: function (e) {
    var that = this, tempseat = that.data.seat, index = 38;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onOrder40: function (e) {
    var that = this, tempseat = that.data.seat, index = 39;
    if (tempseat[index].src != src1) {
      tempseat[index].src = src2;
      var temp_remark = '';
      var i;
      console.log('result:', that.data.all_seat_res.result.data, 'tempseat', tempseat, "tempseat[index].seat_num", that.data.seat[index].seat_num)
      for (i = 0; i < that.data.all_seat_res.result.data.length; i++) {
        if (that.data.seat[index].seat_num == that.data.all_seat_res.result.data[i].seatNum) {
          temp_remark = that.data.all_seat_res.result.data[i].note;
        }
      }
      this.setData({
        show1: true,
        seat: tempseat,
        seat_num: tempseat[index].seat_num,
        temp: index,
        remark: temp_remark,
      });
    }
  },
  onClose() {
    var that = this, tempseat = that.data.seat, index;
    for( index=0;index<tempseat.length;index++){
      if (tempseat[index].src == src2) { 
        tempseat[index].src = src0;
      }        
    }
    this.setData({
      seat: tempseat,
      show1:false,
    });
    //app.globalData.is_ordering=false;     
  },
  onCancel: function(e){
    var that = this, tempseat = that.data.seat, index;
    for (index = 0; index < tempseat.length; index++) {
      if (tempseat[index].src == src2) {
        tempseat[index].src = src0;
      }
    }
    this.setData({
      seat: tempseat,
      show1: false,
    }); 
    //app.globalData.is_ordering=false;
  },

  onConfirm: function(e){
    var that = this;
    if(app.globalData.is_ordering==true){
      wx.showToast({
        title: '你已经预定了，不要太贪心哦',
        icon:'none',
        duration:1500,
        mask:true
      })
    }
    else{
      var tempseat = that.data.seat, index, temp;
      for (index = 0; index < tempseat.length; index++) {
        if (tempseat[index].src == src2) {
          tempseat[index].src = src1;
          temp = index;
        }
      }
      db.collection('Reserve').add({
        data: {
          user: app.globalData.username,
          roomNum: app.globalData.r_num,
          seatNum: tempseat[temp].seat_num,
          startTime: app.globalData.order_starttime,
          stopTime: app.globalData.order_endtime,
        },
        success: res => {
          console.log('[数据库] [新增记录] 成功')
        },
        fail: err => {
          console.error('[数据库] [新增记录] 失败：')
        }
      });
      db.collection('History').add({
        data: {
          user: app.globalData.username,
          roomNum: app.globalData.r_num,
          seatNum: tempseat[temp].seat_num,
          startTime: app.globalData.order_starttime,
          stopTime: app.globalData.order_endtime,
        },
        success: res => {
          console.log('[数据库] [新增记录] 成功')
        },
        fail: err => {
          console.error('[数据库] [新增记录] 失败：')
        }
      });
      this.setData({
        seat: tempseat,
        show1: false,
      }); 
      app.globalData.is_ordering=true;
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      reservetime: app.globalData.order_starttime + '—' + app.globalData.order_endtime,
    })
    console.log("r_num",app.globalData.r_num);
    wx.cloud.callFunction({
      name: 'requireSeat',
      success: res => {
        console.log('!!!',res)
        that.setData({
          all_seat_res: res,
        });

        wx.cloud.callFunction({
          name: 'requireReserve',
        })
          .then(res => {
            if (res.result.data.length != 0) {
              var i, temp_reserve = []
              for (i = 0; i < res.result.data.length; i++) {
                temp_reserve[i] = res.result.data[i];
              }
            }

            app.globalData.all_reserve = temp_reserve;

            var temp_index = [], index = 0;    //记录下标i
            for (var i = 0; i < app.globalData.all_reserve.length; i++) {
              if (app.globalData.all_reserve[i].roomNum == app.globalData.r_num) {
                if ((app.globalData.all_reserve[i].startTime > app.globalData.order_starttime && app.globalData.all_reserve[i].startTime < app.globalData.order_endtime) || (app.globalData.all_reserve[i].stopTime < app.globalData.order_endtime && app.globalData.all_reserve[i].stopTime > app.globalData.order_starttime) || (app.globalData.all_reserve[i].startTime <= app.globalData.order_starttime && app.globalData.all_reserve[i].stopTime >= app.globalData.order_endtime)) {
                  temp_index[index++] = i;
                }
              }
            }
            console.log("temp_index:", temp_index, temp_index.length);
            for (var i = 0; i < temp_index.length; i++) {
              console.log('temp', i, ':', app.globalData.all_reserve[temp_index[i]]);
            }
            var temp_seat = that.data.seat;
            for (var i = 0; i < that.data.all_seat_res.result.data.length; i++) {
              if (that.data.all_seat_res.result.data[i].roomNum == app.globalData.r_num && that.data.all_seat_res.result.data[i].ok==true){
                temp_seat[parseInt(that.data.all_seat_res.result.data[i].seatNum)-1].if_ok=true;
                for (var j = 0; j<temp_index.length;j++){
                  console.log('bbb', temp_index[j]);
                  console.log('ok:', that.data.all_seat_res.result.data[i].seatNum, app.globalData.all_reserve[temp_index[j]].seatNum);
                  if (that.data.all_seat_res.result.data[i].seatNum == app.globalData.all_reserve[temp_index[j]].seatNum) {
                    temp_seat[parseInt(app.globalData.all_reserve[temp_index[j]].seatNum) - 1].src = src1;
                    console.log(parseInt(app.globalData.all_reserve[temp_index[j]].seatNum),'changed')
                  }
                }               
              }  
            }
            that.setData({
              seat: temp_seat,
            })
            console.log('new_seat=',that.data.seat);    
          })
          .catch(console.error)

        //
      },
      fail: err => {
        wx.showToast({
          title: '网络不太稳定，请重试',
          icon: 'none',
          duration: 1500,
          mask:true
        })
        console.error('[云函数] [login] 调用失败', err)
      }
    })


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

  }
})