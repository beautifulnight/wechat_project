// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('User').where({
      username: event.id
    })
      .update({
        data: {
          credit: event.credit
        }
      },
      console.log('cloud id,credit:',event.id,event.credit));
  } catch (e) {
    console.error(e)
  }
}