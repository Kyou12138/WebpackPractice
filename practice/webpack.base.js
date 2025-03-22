//公共配置
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    entry: {
        list: ["./src/list/index.js"],
        detail: ["./src/detail/index.js"],
    },
    output: {
        filename: "scripts/[name].[chunkhash:5].js",
        path: path.resolve(__dirname, "dist"),
    },
    stats: {
        modules: false,
        colors: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/list.html",
            filename: "list.html",
            inject: "body",
            chunks: ["list"],
        }),
        new HtmlWebpackPlugin({
            template: "./public/detail.html",
            filename: "detail.html",
            inject: "body",
            chunks: ["detail"],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "./public",
                    to: "./",
                    globOptions: {
                        ignore: ["**/*.html"],
                    },
                },
            ],
        }),
    ],
};
