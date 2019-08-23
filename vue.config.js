const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

// 线上打包路径
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
    // baseUrl: BASE_URL
    outputDir: 'dist', // 打包生成的生产环境构建文件夹的目录
    assetsDir: '', // 打包生成的静态资源路径，默认在outputDir
    indexPath: 'index.html', // 指定生成的 index.html 输出路径，默认outputDir
    pages: undefined, // 构建多页
    productionSourceMap: false, // 开启生产环境 source map?
    chainWebpack: config => {
        // 配置路径别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@utils', resolve('src/utils'))
    },
    css: {
        modules: false, // 启用CSS modules
        extract: true, // 是否使用css分离插件 
        sourceMap: false, // 是否开启CSS source maps
        loaderOptions: {
            sass: {
                data: `@import "@/assets/css/calculation/calculation.scss";`
            }
        } // css预设器指定
    },
    devServer: {
        // port: 8099, // 启用的端口
        proxy: {
            '/': {
                target: 'https://www.easy-mock.com/mock/5cd12007a554234aca8d887a/example',
                ws: false,
                changeOrigin: true
            }
        }
    }
}
