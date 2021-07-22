const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
let MonacoWebpackPlugin = null
// 开发环境配置 编辑器的颜色识别 （生成打包环境有错误）
MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

const path = require('path');
const resolve = dir => path.join(__dirname, '.', dir)
/* config-overrides.js */
module.exports = override(
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: 'css'
  // }),
  //增加路径别名的处理 
  addWebpackAlias({  
    ["@"]: path.resolve(__dirname, "src")
  }),
  config => {
    // 修改掉webpack里面devtool的配置
     config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
     return config;
  },
  MonacoWebpackPlugin && 
  addWebpackPlugin(new MonacoWebpackPlugin({
    languages: ['javascript']
  }))
)