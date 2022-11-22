module.exports = {
    devServer: {
        port: 7007,
        host: 'localhost',
        open: true,
    },
    configureWebpack: {
        module: {
            rules: [{
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            }]
        }
    }
}