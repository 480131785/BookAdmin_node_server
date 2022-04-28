// 在utils/jwt.js引入
const expressJWT = require('express-jwt')

const jwtAuth = expressJWT({
    secret: 'suoda', // 生成 token 时配置的密钥字符串
    algorithms: ['HS256'], // 设置 jwt 的算法为 HS256
    credentialsRequired: false // 对于没有 token 的请求不进行解析
}).unless({
    // 用于设置不需要验证 token 的路径
    path: ['/users/login', '/users/register']
})

module.exports = jwtAuth; // 暴露出去
