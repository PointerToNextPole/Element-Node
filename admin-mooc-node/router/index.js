const express = require('express')
const boom = require('boom')
const userRouter = require('./user')
const {
    CODE_ERROR
} = require('../utils/constant')

// 注册路由
const router = express.Router()

module.exports = router
