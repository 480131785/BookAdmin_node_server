var express = require('express');
var router = express.Router();

const { getBookInfo, addBookInfo } = require('../service/bookInfoService')

router.get('/bookInfo', async function (req, res, next) {
    const bookInfo = req.body
    const data = await getBookInfo(bookInfo)
    res.send(data)
})

router.post('/bookInfo', async function (req, res, next) {
    const bookInfo = req.body
    const data = await addBookInfo(bookInfo)
    res.send(data)
})

module.exports = router;