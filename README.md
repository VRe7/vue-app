## Vue练习

###### 初始化项目结构

````
  vue-wap-demo
  ├── build                      // 构建相关  
  ├── config                     // 配置相关
  ├── node_modules               // 模块安装的文件夹
  ├── src                        // 核心代码
  │   ├── assets                 // 静态资源
  │   ├── components             // 组件
  │   ├── router                 // 路由
  │   ├── App.vue                // 入口页面
  │   └── main.js                // 入口 加载组件 初始化等
  ├── static                     // 第三方不打包资源
  ├── .babelrc                   // babel-loader 配置
  ├── .editorconfig              // 代码编辑 配置项
  ├── .eslintignore              // eslint 忽略项
  ├── .eslintrc.js               // eslint 配置项
  ├── .gitignore                 // git 忽略项
  ├── favicon.ico                // favicon图标
  ├── index.html                 // html模板
  ├── package-lock.json          // package-lock.json
  ├── package.json               // package.json
  └── �README.md                  // 说明文档
````

###### Vue取消eslint语法限制

````
  1: 编译报错 
  
  错误信息:
  You may use special comments to disable some warnings.
  Use // eslint-disable-next-line to ignore the next line.
  Use /* eslint-disable */ to ignore all warnings in a file.  
  
  解决:
     关闭eslint规则
     
     build/webpack.base.conf.js文件中,注释或删除
     
     module: {
         rules: [
           //...(config.dev.useEslint ? [createLintingRule()] : []), //注释或删除
           {
             test: /\.vue$/,
             loader: 'vue-loader',
             options: vueLoaderConfig
           },
           ...
````
