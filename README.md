# jsGets

Given an object with this structure

```
{
    a : {
         b: 3,
         c: [
              { d: 4 }, 
              { d: 5 },
               { d: 2 }
          ]
     }
}
```
`jsGets(myObject, 'a.c[].d')` will return [4, 5, 2].


Given an array with this structure

```
[
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
```
`jsGets(myObject, '[].bar[].lorem')` will return [4, undefined, 6].

`undefined` because myObject[1].bar[0].lorem does not exist

```
{
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
}
```
`jsGets(myObject, 'foo[].bar[].lorem[]')` will return [undefined, 6, 7, 8].