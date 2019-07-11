const jsgets = require('./')

describe('gets', () => {
    const tests = [
        {
            name: 'if path `foo` returns value at `foo`',
            obj: {foo: 3},
            path: 'foo',
            expected: 3
        }, {
            name: 'if path `foo.bar` returns value at `foo.bar`',
            obj: {
                foo: {
                    bar: 4
                }
            },
            path: 'foo.bar',
            expected: 4
        }, {
            name: 'if path `foo.bar` is not a valid path returns undefined',
            obj: {
                foo: {
                    lorem: 4
                }
            },
            path: 'foo.bar',
            expected: undefined
        }, {
            name: 'if path `foo[].bar` returns array of values',
            obj: {
                foo: [
                    {
                        bar: 4
                    }, {
                        bar: 5
                    }
                ]
            },
            path: 'foo[].bar',
            expected: [4, 5]
        }, {
            name: 'if path `foo[].bar[].lorem` returns array of deep values',
            obj: {
                foo: [
                    {
                        bar: [
                            {
                                lorem: 4
                            }
                        ]
                    }
                ]
            },
            path: 'foo[].bar[].lorem',
            expected: [4]
        }, {
            name: 'if path `foo[].bar[].lorem` returns array with multiple children',
            obj: {
                foo: [
                    {
                        bar: [
                            {
                                lorem: 4
                            }
                        ]
                    }, {
                        bar: [
                            {
                                lorem: 5
                            }, {
                                lorem: 6
                            }
                        ]
                    }
                ]
            },
            path: 'foo[].bar[].lorem',
            expected: [4, 5, 6]
        }, {
            name: 'if path `foo[].bar[].lorem` returns array with one of them undefined',
            obj: {
                foo: [
                    {
                        bar: [
                            {
                                lorem: 4
                            }
                        ]
                    }, {
                        bar: [
                            {
                               other: {
                                   ipsum: 5
                               }
                            }, {
                                lorem: 6
                            }
                        ]
                    }
                ]
            },
            path: 'foo[].bar[].lorem',
            expected: [4, undefined, 6]
        }, {
            name: 'if path `foo[].bar[].lorem` returns array with two of them undefined',
            obj: {
                foo: [
                    {
                        lol: [
                            {
                                lorem: 4
                            }
                        ]
                    }, {
                        bar: [
                            {
                               other: {
                                   ipsum: 5
                               }
                            }, {
                                lorem: 6
                            }
                        ]
                    }
                ]
            },
            path: 'foo[].bar[].lorem',
            expected: [undefined, undefined, 6]
        }, {
            name: 'if starts with an array',
            obj: [
                {
                    bar: [
                        {
                            lorem: 4
                        }
                    ]
                }, {
                    bar: [
                        {
                           other: {
                               ipsum: 5
                           }
                        }, {
                            lorem: 6
                        }
                    ]
                }
            ],
            path: '[].bar[].lorem',
            expected: [4, undefined, 6]
        }, {
            name: 'if ends with an array',
            obj: {
                foo: [
                    {
                      lol:  {
                          bar: [
                            {
                                lorem: [
                                    4,
                                    5
                                ]
                            }
                            ]
                         }
                    }, {
                        bar: [
                            {
                               lorem: [
                                   6
                               ]
                            }, {
                                lorem: [
                                    7,
                                    8
                                ]
                            }
                        ]
                    }
                ]
            },
            path: 'foo[].bar[].lorem[]',
            expected: [undefined, 6, 7, 8]
        }
    ]
    tests.forEach(({name, obj, path, expected, only}) => {
        let testFn = test
        if(only) {
            testFn = test.only
        }
        testFn(name, () => {
            expect(jsgets(obj, path)).toEqual(expected)
        })
    })
})