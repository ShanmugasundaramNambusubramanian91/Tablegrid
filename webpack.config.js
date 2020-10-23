module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js']
    }
};
