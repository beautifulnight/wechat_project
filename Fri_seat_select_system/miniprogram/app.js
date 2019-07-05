//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } 
    else {
      wx.cloud.init({
        traceUser: true,
        //env:'software',
      })
    };

    this.globalData = {

      userInfo: null,       //用户信息
      is_registed: false,   //是否注册
      if_have_space: true,  //是否有空格
      regular_space: /\s/,  //空格
      is_User: true,        //是否为用户
      username: null,
      nikename: null,
      order_starttime: null,
      order_endtime: null,
      r_num:null,           //教室号
      is_ordering:null,     //是否预定
      all_user_res:null,    //所有用户信息
      forget_index:null,    //忘记密码用户下标
      all_reserve:null      //所有预定表

    }
  }
})
