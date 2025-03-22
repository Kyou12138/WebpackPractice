//开发环境
module.exports = {
    mode: "development",
    devtool: "source-map",
    devServer: {
        open: ["list.html"],
        proxy: [
            {
                context: ["/api"],
                target: "https://study.duyiedu.com",
                changeOrigin: true,
            },
        ],
    },
};
