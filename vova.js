
/**
 * 文档: http://cli.caiyi.com/cy/index.html
 */


import { join } from 'path'
export default {
  scene: [
    "vova-scene-react"
  ],
  entry: {
    app: './src/index.js'
  },
  html: {
    filename: './index.html',
    template : join(__dirname,'./index.ejs'),
    inject   : true,
    chunks: ['app']
  },
  outputPath: 'dist',//打包之后的目录
  chainWebpack(config, webpack) {
    config.resolve.alias.set('@', join(process.cwd(), 'src'));// 比如配置alias
    
  },
  proxy: {
    '/notcontrol': {target: 'http://www.baidu.com', changeOrigin: true},
  },
  hash: true,
  dll: {
    switch: true,
    dllName: 'vova',
    pkg: ['react', 'react-dom', 'react-router-dom', 'react-loadable']
  },
  layoutMode: {
    switch: true,
    mode: 'vw',
    func: 'vw()'
  },
  mock: true,
  extraPostCSSPlugins:[require('postcss-pxtorem')({ rootValue: 50, propWhiteList: [] })]
}