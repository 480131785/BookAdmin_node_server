const { bookInfoModel } = require('./models/bookInfoModel')

// 获取书籍信息
module.exports.getBookInfo = async function () {
    const res = await bookInfoModel.find()
    return res
}

// 添加书籍
module.exports.addBookInfo = async function (books) {
    const res = await bookInfoModel.create(books)
    return res
}

// 扫库
module.exports.findBookInfo = async function (books) {
    const res = await bookInfoModel.find(books)
    return res
}