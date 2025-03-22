//生产
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    plugins: [new CleanWebpackPlugin()],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false, // 移除所有注释
                    },
                    compress: {
                        drop_console: true, // 可选: 移除 console.log 等
                        drop_debugger: true, // 可选: 移除 debugger 语句
                    },
                },
            }),
        ],
    },
};
