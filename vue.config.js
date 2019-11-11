module.exports = {
    devServer:{
        "/pages":{
            target:"https://assets.lrts.me/fed-lrts-wap/pages/index.86230de3e1ca25d54fe5.js",
            changeOrigin:true
        }
    },
    configureWebpack:{
        alias:{
            "@":path.join(__dirname,"./src"),
            "@api":path.join(__dirname,"./src/api"),
            "@assers":path.join(__dirname,"./src/assers"),
            "@common":path.join(__dirname,"./src/common"),
            "@pages":path.join(__dirname,"./src/pages"),
            "@router":path.join(__dirname,"./src/router"),
            "@store":path.join(__dirname,"./src/store"),
            "@utils":path.join(__dirname,"./src/utils"),
            "@components":path.join(__dirname,"./src/components"),

        }
    }
}