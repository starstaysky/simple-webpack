var factories = {}
// 只做依赖收集
function define(name, dependencies, factory) {
    factory.dependencies = dependencies

    factories[name] = factory
}

function require(mods, callback) {

    let result = mods.map(mod => {
        let factory = factories[mod]
        let dep = factory.dependencies
        let exports = null

        require(dep, function () {
            exports = factory.apply(null, arguments)
        })
        return exports
    })


    return callback.apply(null, result)
}
define('age', [], function () {
    return 9
})
define('name', ['age'], function (age) {
    return '我的年龄' + age
})
require(['name'], function (name) {
    console.log(name)

})