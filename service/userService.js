const { login, register, creatRegister, picture, upPicture } = require('../dao/userDao')
const jwt = require('jsonwebtoken');

// 登录
module.exports.login = async function (user) {
    const token = 'Bearer ' + jwt.sign(
        user, // 设置要保存的用户信息
        'suoda', // 密钥字符串
        { expiresIn: 6000 } // 设置 token 有效期，单位 s
    )
    const res = await login(user)
    if (res.length) {
        return {
            msg: '登陆成功',
            code: 1,
            token,
            data: {
                name: res[0].name,
                picture: res[0].picture ? res[0].picture : '',
                admin: res[0].admin ? res[0].admin : 0
            }
        }
    } else {
        return {
            msg: '用户名或密码错误',
            code: 0
        }
    }
}

// 权限
module.exports.isLogin = async function (token) {

    try {
        let tokens = token.split(' ')[1]
        const data = jwt.verify(tokens, 'suoda')
        return {
            msg: '身份认证通过',
            code: 1,
            data: data.username
        }
    } catch (err) {
        return {
            msg: '登录过期,请重新登录',
            code: 0,
        }
    }
}

// 注册
module.exports.register = async function (user) {
    const res = await register(user)
    if (res.length) {
        return {
            msg: '用户已注册',
            code: 0,
        }
    } else {
        await creatRegister(user)
        return {
            msg: '注册成功',
            code: 1
        }
    }
}

// 上传头像
module.exports.picture = async function (user) {
    const res = await picture({ name: user.name })
    user['_id'] = res[0]._id
    user['password'] = res[0].password
    await upPicture(...res, user)
    return {
        msg: '修改成功',
        code: 1,
        data: {
            name: user.name,
            picture: user.picture,
            admin: user.admin
        }
    }
}