//1.引入express
const {
    response,
    json
} = require('express');
const express = require('express')

//2.创建应用对象、
const app = express();

//3.创建路由规则
// request 是对报文的封装
// response 是对响应报文的封装
//get
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello AJAX -2W')
});
//post
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello AJAX -2W')
});
//针对IE缓存
app.all('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello IE222')
});
//延时响应
app.all('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        response.send('延迟响应')
    }, 3000);
    //设置响应体
});
//jquery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'pink'
    }
    // response.send('hello  jquery ajax')
    response.send(JSON.stringify(data))
});
//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'pink'
    }
    // response.send('hello  jquery ajax')
    response.send(JSON.stringify(data))
})
//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'pink'
    }
    // response.send('hello  jquery ajax')
    response.send(JSON.stringify(data))
})
//jsonp服务
app.all('/jsonp-server', (request, response) => {
    //设置响应头 设置允许跨域
    // response.send('hello  jquery ajax')
    // response.send('console.log("hello jsonp")')
    const data = {
        name: '尚硅谷pink'
    }
    //将数据转换为字符串
    let str = JSON.stringify(data)
    //返回结果
    response.end(`handle(${str})`)
})
//用户明检测是否存在
app.all('/check-server', (request, response) => {
    //设置响应头 设置允许跨域
    // response.send('hello  jquery ajax')
    // response.send('console.log("hello jsonp")')
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    }
    //将数据转换为字符串
    let str = JSON.stringify(data)
    //返回结果
    response.end(`handle(${str})`)
})
//用户明检测是否存在
app.all('/jquery-jsonp-server', (request, response) => {
    //设置响应头 设置允许跨域
    // response.send('hello  jquery ajax')
    // response.send('console.log("hello jsonp")')
    const data = {
        name: 'pink',
        city: ['北京', '上海', '深圳']
    }
    //将数据转换为字符串
    let str = JSON.stringify(data)
    //接收callback 参数
    let cb = request.query.callback;
    //返回结果
    response.end(`${cb}(${str})`)
})
//
app.all('/cors-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('hello cors')
})
//all 可以接收任意类型的请求
app.all('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    const data = {
        name: 'pink'
    }
    let str = JSON.stringify(data)
    response.send(str)
});
//4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000 端口监听中....');
})