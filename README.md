# multipage-react-app

基于[create-react-app](https://create-react-app.dev/)，支持`多页面开发模式`和`单页面开发模式`。

默认支持`多页面开发模式`。

该框架引入了react-router-dom、react-redux、antd-mobile等react相关技术。

它可用于开发任何web页面（Mobile Web 或者 PC Web，甚至自适应类的Web）。

## node/npm版本

node ^v10.16.0

npm ^6.9.0

yarn ^1.17.3

## 依赖技术栈
1. [react](https://reactjs.org/)
2. [react-dom](https://reactjs.org/)
3. [react-router-dom](https://reacttraining.com/react-router/)
4. [redux](https://redux.js.org/)
5. [react-redux](https://redux.js.org/basics/usage-with-react)
7. [antd-mobile](https://mobile.ant.design/docs/react/introduce-cn)

## 目录结构与说明
<pre>
    ├── README.md
    ├── .eslintignore
    ├── .eslintrc.js
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── config
    │   ├── jest
    │   ├── env.js
    │   ├── modules.js
    │   ├── multipage.config.js
    │   ├── paths.js
    │   ├── pnpTs.js
    │   ├── webpack.config.js
    │   └── webpackDevServer.config.js
    ├── scripts
    │   ├── build.js
    │   ├── start.js
    │   └── test.js
    ├── public
    │   ├── favicon.ico
    │   ├── index.html 页面模板
    │   └── manifest.json
    └── src 源码目录
    |   ├── index 首页
    |   |   ├── index.js 多页面开发模式下的页面入口文件
    |   |   └── index.html 页面模板，如果不存在这个文件时，默认是public/index.html
    |   ├── index.js 单页面开发模式下的入口文件
    |   └── serviceWorker.js
    └── build
        ├── all 所有的集合打包
        ├── index 首页单独打包
        └── ... 其他页面单独打包
</pre>

## 安装

step 1. `git clone https://github.com/kreedoo/multipage-react-app.git`

step 2. `npm install` 或 `yarn install`

## 使用

不同的开发模式，使用有所区别：

### 单页面开发模式

step 1. 开发调试：`npm start` 或 `yarn start`

step 2. 在浏览器中打开URL<http://localhost:3000>

step 3. 打包：`npm run build` 或 `yarn build`，打包结果存放于./build目录下

### 多页面开发模式(默认是多页面开发模式)

step 1. 开发调试
    正常在调试所有页面的情况下使用无参数命令：`npm start` 或 `yarn start`。

    当然我们也可以通过-page参数指定页面进行开发调试：
    
    若单独针对某一个页面进行调试开发时使用：`npm start -page pageName` 或 `yarn start -page pageName`
    还可以组合几个页面一起开发调试：`npm start -page index,pagea,pageb` 或 `yarn start -page index,pagea,pageb`。

step 2. 在浏览器里打开URL：<http://localhost:3000>

step 3. 打包
    打包所有页面：`npm run build` 或 `yarn build`。打包的结果将存放在./build/all目录下。

    与开发调试的命令一样，可以通过-page参数指定页面进行打包：
    
    单独页面打包：`npm run build -page pagea` 或 `yarn build -page pagea`。打包结果存放在./build/pagea目录下。
    
    组合页面打包：`npm run build -page pagea,pageb` 或 `yarn build -page pagea,pageb`。打包结果存放在./build/pagea_pageb目录下。

注意：指定页面参数用`命令 -page 参数值`，例如：`npm start -page pagea`，其中参数值可以是多个值，多个值之间通过任一符号[:|,]分隔。

## 编码规范与约定

1. 采用[airbnb](https://github.com/airbnb/javascript)开源JS编码规范

2. 采用prettier来美化代码格式

### 让编辑器支持ESLint和Prettier，统一编码风格

1. for VSCode
    安装ESLint 和 Prettier插件
2. 