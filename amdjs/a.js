var factories = {}

// 储存函数
function define(name, dependencies, callback) {
    factories[name] = callback
}

function require(mods, callback) {
    let result =  mods.map(mod => {
        let exports = factories[mod]()
        return exports
    })
    callback.apply(null, result)
}

define('name', [], function () {
    return '名字'
})
define('age', [], function () {
    return '年纪'
})
require(['name', 'age'], function (name, age) {
    console.log(name + age)
})