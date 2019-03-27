
// amd 解决浏览器环境的模块化问题；代表是require.js;cmd
// 如何实现modules，还有点难。暂时不分析
let factories = {}
function define(moduleName,modules,factory){
  factories[moduleName] = factory
}

function require(modules,callback){
  let result = modules.map(function(mod){
     let factory = factories[mod]
      let exports = factory()
      return exports
  })
  callback.apply(null,result)
}
define('name',[],function(){
  return 'fx'
})
define('age',[],function(){
  return '32'
})
require(['name','age'],function(name,age){
  console.log(name)
  console.log(age)
})
