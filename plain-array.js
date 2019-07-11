function plainArrayRecursive(element, accumulator) {
    if(!Array.isArray(element)){
        return accumulator.concat([element])
    }
    return element.reduce((acc, i) => {
        return plainArrayRecursive(i, acc)
    }, accumulator)
}

function plainArray(array) {
    return plainArrayRecursive(array, [])
}
module.exports = plainArray