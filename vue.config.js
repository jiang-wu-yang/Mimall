module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{//代理
            '/api':{
                target:'http://mall-pro.springboot.cn',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}