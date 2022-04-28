const mongoose = require('mongoose') // 引入mongoose

const dbURL = 'mongodb://localhost:27017/bookAdmin' // 设置项目连接的数据库的地址，lsy 是数据库名称
mongoose.connect(dbURL) // 连接数据库
mongoose.connection.on('connected', () => { // 项目已启动在后台给条连接成功的提示
    console.log(dbURL + '数据库链接成功')
})