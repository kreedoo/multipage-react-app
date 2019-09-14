const path = require('path');
const fs = require('fs');
const globby = require('globby');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getParams = require('./params');
const paths = require('./paths');
const appPackage = require(paths.appPackageJson);
const params = getParams();

const IS_INDEPENDENT_PACKING = appPackage.isIndependentPacking;
const IS_MULTIPAGE_MODE = appPackage.isMultipageMode;

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const jsGlobPath = `${resolveApp('src')}/*/index.js`;
const htmlGlobPath = `${resolveApp('src')}/*/index.html`;

function getAllPages(){
  const pages = {};
  globby.sync([jsGlobPath, htmlGlobPath]).forEach(filePath => {
    const pathParts = filePath.split('/');
    const name = pathParts[pathParts.length - 2];
    const isHTMLTemplate = /\.html$/.test(filePath);
    pages[name] = Object.assign({}, pages[name], isHTMLTemplate ? {
      template: filePath
    } : {
      name,
      path: filePath
    });
  });

  return pages;
}
function generateGroupName(pageNames){
  let names = [...pageNames];
  names.sort();

  return names.join('_');
}
function getValidPages(pages, params){
  if(typeof params.page !== 'undefined'){
    let validPages = {};
    const pageNames = params.page.split(/[:,\|]/);
    const validPageNames = Object.keys(pages).filter(name => pageNames.indexOf(name) > -1);
    if(validPageNames.length > 0){
      const groupName = generateGroupName(validPageNames);
      validPageNames.forEach(name => {
        validPages[name] = {
          ...pages[name],
          groupName
        };
      });

      return validPages;
    }else{
      throw new Error(`[${pageNames.join(', ')}] pages are not exist!`);
    }
  }

  return pages;
}

const allPages = getAllPages();
const pages = getValidPages(allPages, params);
const groupName = IS_INDEPENDENT_PACKING ? (() => {
  const name = Object.keys(pages)[0];
  const page = pages[name];
  return page.groupName || 'all';
})() : '';

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
          template: template || defaultAppHtml,
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
  isIndependentPacking: IS_INDEPENDENT_PACKING,
  params,
  pages,
  groupName,
  getEntries,
  getHTMLPlugins,
  getRewritesOfHistoryApiFallback
};
