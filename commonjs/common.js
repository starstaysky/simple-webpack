var fs = require('fs')
var str = req('./a.js')

console.log(str)

function req(modulename) {
    var content = fs.readFileSync(modulename, 'utf8');
    let fn = new Function('exports', 'module', 'require', '__dirname', '__filename', content + '\n return module.exports')
    let module = {
        exports: {}
    }
    return fn(exports,module,req,__dirname,__filename)
    // return content
}