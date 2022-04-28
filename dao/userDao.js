const { userModel } = require('./models/userModel')

// 登录扫库
module.exports.login = async function (user) {
    const res = await userModel.find(user)
    return res
}

// 注册扫库
module.exports.register = async function (user) {
    const res = await userModel.find(user)
    return res
}

// 注册
module.exports.creatRegister = async function (user) {
    const res = await userModel.create(user)
    return res
}

// 上传头像扫库
module.exports.picture = async function (user) {
    const res = await userModel.find(user)
    return res
}

// 上传头像修改
module.exports.upPicture = async function (user, up) {
    const res = await userModel.updateOne(user, up)
    // console.log(user, up)
    return res
}
