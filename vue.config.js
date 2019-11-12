const path = require("path")

module.exports = {
    devServer:{
        proxy:{
        "/pages":{
            target:"https://assets.lrts.me/fed-lrts-wap/pages/index.86230de3e1ca25d54fe5.js",
            changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
        alias:{
            "@":path.join(__dirname,"./src"),
            "@api":path.join(__dirname,"./src/api"),
            "@assets":path.join(__dirname,"./src/assets"),
            "@common":path.join(__dirname,"./src/common"),
            "@pages":path.join(__dirname,"./src/pages"),
            "@router":path.join(__dirname,"./src/router"),
            "@store":path.join(__dirname,"./src/store"),
            "@utils":path.join(__dirname,"./src/utils"),
            "@components":path.join(__dirname,"./src/components"),
            }
        }
    }
}

