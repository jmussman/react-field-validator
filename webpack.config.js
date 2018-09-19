var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: path.join(path.resolve('src'), 'Validator.js'),
    output: {
        path: path.resolve('out'),
        filename: 'Validator.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}