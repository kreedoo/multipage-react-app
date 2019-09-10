const path = require('path');
const fs = require('fs');
const globby = require('globby');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_MULTIPAGE_MODE = true;

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const jsGlobPath = `${resolveApp('src')}/*/index.js`;

function getPages(){
  const pages = {};
  globby.sync([jsGlobPath]).forEach(filePath => {
    let pathParts = filePath.split('/');
    let name = pathParts[pathParts.length - 2];
    pages[name] = {
      name,
      path: filePath
    };
  });

  return pages;
}
const pages = getPages();

function getEntries(isEnvDevelopment, appIndexJsForSPAMode){
  if(IS_MULTIPAGE_MODE){
    const entries = {};
    Object.keys(pages).forEach(key => {
      let { name, path } = pages[key];
      entries[name] = [
        isEnvDevelopment &&
          require.resolve('react-dev-utils/webpackHotDevClient'),
        path,
      ].filter(Boolean);
    });

    return entries;
  }else{
    return [
      isEnvDevelopment &&
        require.resolve('react-dev-utils/webpackHotDevClient'),
      appIndexJsForSPAMode
    ].filter(Boolean);
  }
};

function getHTMLPlugins(isEnvProduction, defaultAppHtml){
  const minifyOptions = {
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
  };

  return IS_MULTIPAGE_MODE ? Object.keys(pages).map(key => {
    let { template, name } = pages[key];
    return new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: defaultAppHtml,
          chunks: [name, 0],
          filename: `${name}.html`,
          title: `${name} page`,
        },
        isEnvProduction ? minifyOptions : undefined
      )
    );
  }) : [
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: defaultAppHtml,
        },
        isEnvProduction ? minifyOptions : undefined
      )
    ),
  ];
}

function getRewritesOfHistoryApiFallback(){
  return IS_MULTIPAGE_MODE ? Object.keys(pages).map(name => {
    return {
      from: new RegExp(`^\/${name}`),
      to: `/${name}.html`
    };
  }) : [];
}

module.exports = {
  isMultipageMode: IS_MULTIPAGE_MODE,
  pages,
  getEntries,
  getHTMLPlugins,
  getRewritesOfHistoryApiFallback
};
