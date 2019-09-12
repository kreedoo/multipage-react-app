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

## 编码规范与约定
1. 采用[airbnb](https://github.com/airbnb/javascript)开源JS编码规范

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
        ├── index 首页
        |   ├── index.js 多页面开发模式下的页面入口文件
        |   └── index.html 页面模板，如果不存在这个文件时，默认是public/index.html
        ├── index.js 单页面开发模式下的入口文件
        └── serviceWorker.js
</pre>

## 安装与使用

step 1. `git clone https://github.com/kreedoo/multipage-react-app.git`

step 2. `npm install` 或 `yarn install`

step 3. `npm start` 或 `yarn start`

step 4. 在浏览器里打开URL：[http://localhost:3000](http://localhost:3000)
