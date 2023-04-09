const express = require('express')
const rotuer = require('./getpost端口的route')

app  = express()
const cors = require('cors')
app.use(cors())
// cors 解决跨域问题
// 中间件要写在路由之前
app.use(express.urlencoded({extended:false}))
// 跟默认的参数{extended:false}
app.use(rotuer)


app.listen(80,(req,res)=>console.log('express server running at http://127.0.0.1'))
