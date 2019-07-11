

const plainArray = require('./plain-array')

function getValueFromArrayPath(obj, arrayPath) {
    if(arrayPath.length === 0) {
        return obj
    }
    const firstPath = arrayPath[0]
    const valueFromObj = obj[firstPath]
    if(valueFromObj) {
        const otherArrayPath = arrayPath.slice(1, arrayPath.length)
        return getValueFromArrayPath(valueFromObj, otherArrayPath)
    }
    return
}

function getValueFromPath (obj, path) {
    if(path.indexOf('.') < 0) {
        return obj[path]
    }
    const arrayPath = path.split('.')
    return getValueFromArrayPath(obj, arrayPath)
}

function getArrayOfValues (obj, itemsOfPaths) {
    if(itemsOfPaths.length === 0){
        return obj
    }
    const valueOfBase = getValueFromPath(obj, itemsOfPaths[0])
    if(!valueOfBase) {
        return
    }
    return valueOfBase.map(v => {
        const restOfPath = itemsOfPaths.slice(1, itemsOfPaths.length).join('[].')
        return getsFromPath(v, restOfPath)
    })
}

function getsFromPath (obj, path) {
    if(path.indexOf('[]') > 0) {
        const itemsOfPaths = path.split('[].')
        return getArrayOfValues(obj, itemsOfPaths)
    }
    return getValueFromPath(obj, path)
}

function normalize (values) {
    if(!Array.isArray(values)){
        return values
    }
    return plainArray(values)
}

module.exports = function gets(obj, path) {
    return normalize(getsFromPath(obj, path))
}