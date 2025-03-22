const baseConfig = require("./webpack.base");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");

module.exports = function (env) {
    let config;
    if (env && env.prod) {
        //生产
        config = { ...baseConfig, ...prodConfig };
        //插件合并
        config.plugins = [...baseConfig.plugins, ...prodConfig.plugins];
        //optimization合并
        config.optimization = {
            ...baseConfig.optimization,
            ...prodConfig.optimization,
        };
    } else {
        //开发
        config = { ...baseConfig, ...devConfig };
    }
    return config;
};
