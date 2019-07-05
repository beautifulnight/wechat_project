// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('Seat').where({
      seatNum: event.seatnum,
      roomNum: event.roomnum
    })
      .update({
        data: {
          ok: event.ok
        }
      })
  } catch (e) {
    console.error(e)
  }
}