const { getBookInfo, addBookInfo, findBookInfo } = require('../dao/bookInfoDao')

module.exports.getBookInfo = async function () {
    const res = await getBookInfo()
    if (res.length) {
        return {
            msg: '数据请求成功',
            code: 1,
            data: res
        }
    } else {
        return {
            msg: '数据请求失败',
            code: 0
        }
    }
}

module.exports.addBookInfo = async function (books) {
    const res = await findBookInfo({ bookName: books.bookName })
    if (res.length) {
        return {
            msg: '书籍已存在',
            code: 0
        }
    } else {
        await addBookInfo({ ...books, hot: 0 })
        return {
            msg: '书籍添加成功',
            code: 1,
        }
    }
}