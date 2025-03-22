const FileListPlugin = require("./plugins/FileListPlugin");
module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["./loaders/style-loader"],
            },
            {
                test: /\.png|jpg|gif$/,
                use: [
                    {
                        loader: "./loaders/image-loader",
                        options: {
                            limit: 15000,
                            name: "img-[contenthash:5].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new FileListPlugin("文件列表.md")],
};
