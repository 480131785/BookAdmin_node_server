var express = require('express');
var router = express.Router();

const { login, register, picture, isLogin } = require('../service/userService')

// 登录
router.post('/login', async function (req, res, next) {
  const user = req.body
  const data = await login(user)
  res.send(data)
});

// 验证权限
router.get('/isLogin', async function (req, res, next) {
  const token = req.get('authorization')
  const data = await isLogin(token);
  res.send(data)
});


// 注册
router.post('/register', async function (req, res, next) {
  const user = req.body
  const data = await register(user)
  res.send(data)
});

// 上传头像
router.post('/picture', async function (req, res, next) {
  const user = req.body
  const data = await picture(user)
  res.send(data)
});


module.exports = router;
