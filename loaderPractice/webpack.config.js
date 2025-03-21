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
                            limit: 20000,
                            name: "img-[contenthash:5].[ext]",
                        },
                    },
                ],
            },
        ],
    },
};
