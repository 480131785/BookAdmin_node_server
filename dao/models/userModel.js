// 配置数据库集合
const { Schema, model } = require('mongoose')

// 1.定集合结构
const userSchema = new Schema({
    name: String,
    password: String,
    admin: Number,
    picture: String
})

// 2.定义集合模型，将 Schema 和 集合 关联起来
const userModel = model('userModel', userSchema, 'bookUsers')

module.exports.userModel = userModel