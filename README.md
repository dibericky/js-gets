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
