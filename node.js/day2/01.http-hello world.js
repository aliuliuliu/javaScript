var http = require('http')
var fs = require('fs')

// 1. 创建Server
var server = http.createServer()

var wwwDir = 'E:/办公/大前端/node.js/day2/app/www'

// 2. 监听Server 的require 请求事件 设置请求处理函数
//请求
//响应
//一个请求对应一个响应 如果在一个请求的过程中 已经结束了响应了 则不能重复发送响应
//没有请求就没有响应
server.on('request', function (req, res) {
    var url = req.url
    if (url === '/') {
        fs.readFile(wwwDir + '/index.html', function (err, data) {
            // if (err) {
            //     res.end('404 Not Found')
            // } else {

            // }
            if (err) {
                // return 有两个作用、、
                // 1. 方法返回值
                // 2. 阻止代码继续往后执行
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    } else if (url === '/a.txt') {
        fs.readFile(wwwDir + '/a.txt', function (err, data) {
            // if (err) {
            //     res.end('404 Not Found')
            // } else {

            // }
            if (err) {
                // return 有两个作用、、
                // 1. 方法返回值
                // 2. 阻止代码继续往后执行
                return res.end('404 Not Found')
            }
            res.end(data)
        })

    } else if (url === '/index.html') {
        fs.readFile(wwwDir + '/index.html', function (err, data) {
            // if (err) {
            //     res.end('404 Not Found')
            // } else {

            // }
            if (err) {
                // return 有两个作用、、
                // 1. 方法返回值
                // 2. 阻止代码继续往后执行
                return res.end('404 Not Found')
            }
            res.end(data)
        })

    } else if (url === '/apple/login.html') {
        fs.readFile(wwwDir + '/apple/login.html', function (err, data) {
            // if (err) {
            //     res.end('404 Not Found')
            // } else {

            // }
            if (err) {
                // return 有两个作用、、
                // 1. 方法返回值
                // 2. 阻止代码继续往后执行
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }
})
// 3. 绑定端口 启动服务
server.listen(3000, function () {
    console.log('runing.....');
})