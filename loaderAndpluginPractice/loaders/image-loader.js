const loaderUtils = require("loader-utils");
function loader(buffer) {
    const { limit = 3000, name = "[contenthash:5].[ext]" } =
        loaderUtils.getOptions(this);
    let res = "";
    if (buffer.length > limit) {
        res = getFilePath.call(this, buffer, name);
    } else {
        res = getBase64(buffer);
    }
    return `module.exports = \`${res}\``;
}

loader.raw = true; //按原始格式传入

module.exports = loader;

function getBase64(buffer) {
    return "data:image/png;base64," + buffer.toString("base64");
}

function getFilePath(buffer, name) {
    var fileName = loaderUtils.interpolateName(this, name, { content: buffer });
    this.emitFile(fileName, buffer);
    return fileName;
}
