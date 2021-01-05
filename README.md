# Big O, Data Structures, Algorithms

## Linear Time Complexity
Linear Time Complexity describes an algorithm or program whose complexity will **grow in direct proportion** to the size of the input data. Its Big O notation is denoted by O(n)

## Constant Time Complexity
Constant Time Complexity describes an algorithm that will always **execute in the same time** regardless of the size of the input data set. Its Big O notation is denoted by O(1).

## Rules
- Worst case: In calculating Big O, we always think about the worst case scenario.
Look at this block of code:

```
function findNemo(array) {
    for (let i=0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log("Found NEMO!");
        }
    }
}
```

The worst case is when `nemo` is the last index of the array and the loop will execute the entire length of the array.

- Remove Constants: In Big O, we really don't care about constants. For instance, if the Big O of a program is
`O(n/2 + 100)`, `100` becomes insignificant in the large scheme of things (i.e as n gets larger and larger). Also, `n/2` is replaced with `n` for the same scalability reason. So, the Big O notation becomes `O(n)`

Resources: 
- [BigO cheat sheet](https://www.bigocheatsheet.com/).