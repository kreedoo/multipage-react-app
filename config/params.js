/**
 * get params from commands
 */

function sliceValidParams(data){
  let validData = [];
  for(let i = 0; i < data.length; i++){
    if(/^-/.test(data[i])){
      validData = data.slice(i);
      break;
    }
  }

  return validData;
}
function getParams(){
  let params = {};
  let argv = [];
  if(typeof process.env.npm_config_argv === 'undefined'){
    argv = sliceValidParams(process.argv);
  }else{
    const npmArgv = JSON.parse(process.env.npm_config_argv);
    argv = sliceValidParams(npmArgv.original);
  }
  let len = argv.length;
  for(let i = 0; i < len; i = i + 2){
      params[argv[i].replace(/^-+/, '')] = argv[i + 1];
  }
  return params;
}

module.exports = getParams;
