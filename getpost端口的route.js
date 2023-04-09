const express  = require('express')

const router =  express.Router()

router.get('/book',(req,res)=>{
    let query = req.query
    console.log(query);
    // req.query是req的一个属性 不是方法不用加()
    res.send({
        status : 0,
        message:'请求成功',
        data:query
    })
})
router.post('/name',(req,res)=>{
    // req.query(是查询字符串的方法，get专用的，post请求的数据是放在请求体的data里,要用req.body)
    let query1 = req.body
    console.log(query1);
    res.send({
        status:0,
        massage : 'succeful',
        data:{query1}
    })
})
// post 请求也差不多，但是因为get数据是查询字符串 跟在url里，post需要利用额外的中间件来进行翻译
module.exports = router