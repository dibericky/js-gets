const plainArray = require('./plain-array')

describe('plain array', () => {
    test('if level 0 returns array', () => {
        const array = [1, 2, 3]
        expect(plainArray(array)).toEqual([1, 2, 3])
    })

    test('if level 1', () => {
        const array = [[1], [2]]
        expect(plainArray(array)).toEqual([1, 2])
    })

    test('if level 2', () => {
        const array = [[[1]], [[2]]]
        expect(plainArray(array)).toEqual([1, 2])
    })

    test('if level mixed', () => {
        const array = [1, [2], [3, 4, [5, [6]]]]
        expect(plainArray(array)).toEqual([1, 2, 3, 4, 5, 6])
    })
    
})