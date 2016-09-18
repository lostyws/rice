var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    var query = url.parse(req.url, true).query;
    var callback = query.callback || "callback";

    /** ----------------------------------------
     * 请求参数格式数据说明
     * type: POST
     * -----------------------------------------
     */




    var data = {
        status: 0,
        
        totalpage: 4,
        
        data: [
            {
                id:1, //职位id
                station:'大前端',//职位名称
                age: '18-40',//年龄
                education : '本科以上',  //学历
                gender : '不限', //性别
                experience: '三年工作经验以上',//经验
                treatment: '10K-20K', //薪资
                welfare: '各项福利齐全应有尽有',//福利
                info:'我是内容我是内容我是内容我是内容我是内容我是内容'//内容
            },
            {
                id:1, //职位id
                station:'大前端',//职位名称
                age: '18-40',//年龄
                education : '本科以上',  //学历
                gender : '不限', //性别
                experience: '三年工作经验以上',//经验
                treatment: '10K-20K', //薪资
                welfare: '各项福利齐全应有尽有',//福利
                info:'我是内容我是内容我是内容我是内容我是内容我是内容'//内容
            },{
                id:1, //职位id
                station:'大前端',//职位名称
                age: '18-40',//年龄
                education : '本科以上',  //学历
                gender : '不限', //性别
                experience: '三年工作经验以上',//经验
                treatment: '10K-20K', //薪资
                welfare: '各项福利齐全应有尽有',//福利
                info:'我是内容我是内容我是内容我是内容我是内容我是内容'//内容
            }


            
           
        ]
    }
    res.writeHead(200, {
            'Context-Type': 'application/x-www-form-urlencode',
            'Access-Control-Allow-Origin': '*'
        })
        // res.end(callback+'('+JSON.stringify(data)+')');
        // 
    
    res.end(JSON.stringify(data));
}).listen(3002, function() {
    console.log('server is runing...')
})
