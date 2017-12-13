const webpack = require('webpack');
module.exports = {
    entry: __dirname+"/app/main.js",
    output:{
        path:__dirname+"/public",
        filename:"bundle.js"
    },
    devServer:{
        contentBase:"./public",
        port:8080,
        inline:true,
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
            test:/(\.jsx|\.js)$/,
            use:{
                loader:"babel-loader"
            },
            exclude:/node_modules/
            },
            {
                test:/(\.css)$/,
                use:[
                    {
                        loader:"postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('版权所有，翻版必究')
    ],
};