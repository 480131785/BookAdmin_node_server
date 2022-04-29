// 配置数据库集合
const { Schema, model } = require('mongoose')

// 1.定集合结构
const bookInfoSchema = new Schema({
    bookName: String,
    author: String,
    appTime: Number,
    press: String,
    margin: Number,
    hot: Number
})

// 2.定义集合模型，将 Schema 和 集合 关联起来
const bookInfoModel = model('bookInfoModel', bookInfoSchema, 'booksInfo')

module.exports.bookInfoModel = bookInfoModel