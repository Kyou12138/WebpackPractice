module.exports = class FileListPlugin {
    constructor(fileName = "FileList.txt") {
        this.fileName = fileName;
    }

    apply(compiler) {
        compiler.hooks.emit.tap("FileListPlugin-emit", (compilation) => {
            let res = [];
            for (const key in compilation.assets) {
                res.push(
                    `【${key}】\r\n大小：${
                        compilation.assets[key].size() / 1000
                    }KB`
                );
            }
            let str = res.join("\r\n\r\n");
            compilation.assets[this.fileName] = {
                source: () => str,
                size: () => str.length,
            };
        });
    }
};
