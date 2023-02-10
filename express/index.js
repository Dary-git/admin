const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/userList', (req, res) => {
    fs.readFile(`${__dirname}/userList.json`, (err, data) => {
        res.send(data)
    })
})

app.post('/setUser', (req, res) => {
    fs.readFile(`${__dirname}/userList.json`, (err, data) => {
        let info = JSON.parse(data.toString())
        if (info.some(v => v.username === req.body.username)) {
            res.send({
                status: 1,
                msg: '用户已存在'
            })
        } else {
            info.push(req.body)
            fs.writeFile(`${__dirname}/userList.json`, JSON.stringify(info), (err, info) => {
                res.send({
                    status: 000
                })
            })
        }
    })
})

app.get('/getImg', (req, res) => {
    let files = fs.readdirSync(`${__dirname}/public/img/`)
    let list = []
    files.forEach(item => {
        let obj = {}
        obj.path = `http://localhost:3000/img/${item}`
        obj.name = item
        list.push(obj)
    })
    res.send({
        status: 000,
        data: list
    })
})

app.listen(3000, err => {
    if (!err) {
        console.log('3000服务器开启成功')
    }
})