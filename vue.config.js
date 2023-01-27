const config = require('./config/config.json')

module.exports = {
    devServer: {
        port: 7070,
        host: 'localhost',
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                wx: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        name: config.name,
    },
}