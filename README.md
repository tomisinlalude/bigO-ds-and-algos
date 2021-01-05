# Big O, Data Structures, Algorithms

## Linear Time Complexity
Linear Time Complexity describes an algorithm or program whose complexity will **grow in direct proportion** to the size of the input data. Its Big O notation is denoted by O(n)

## Constant Time Complexity
Constant Time Complexity describes an algorithm that will always **execute in the same time** regardless of the size of the input data set. Its Big O notation is denoted by O(1).

## Quadratic Time Complexity
Quadratic Time Complexity represents an algorithm whose performance is directly proportional to the squared size of the input data set (think of Linear, but squared). Within our programs, this time complexity will occur whenever we nest over multiple iterations within the data sets. Its Big O notation is denoted by O(n^2).

## Factorial Time Complexity
If Big O helps us identify the worst-case scenario for our algorithms, O(n!) is the worst of the worst. LOL.
We will find ourselves writing algorithms with factorial time complexity when calculating permutations and combinations. In this case, we are adding a loop for every element/input data. Crazy right?

## Rules
- **Worst case**: In calculating Big O, we always think about the worst case scenario.
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

- **Remove Constants**: In Big O, we really don't care about constants. For instance, if the Big O of a program is
`O(n/2 + 100)`, `100` becomes insignificant in the large scheme of things (i.e as n gets larger and larger). Also, `n/2` is replaced with `n` for the same scalability reason. So, the Big O notation becomes `O(n)`

- **Different terms for inputs**: Look at this:

```
function compressBoxesTwice(boxes1, boxes2) {
    boxes1.forEach(boxes) => {
        console.log(boxes);
    }

    boxes2.forEach(boxes) => {
        console.log(boxes);
    }
}
```
Since the parameters `boxes1` and `boxes2` are different and most likely have different sizes, the Big O notation for this block of code is  `O(m + n)`

- **Drop non dominants**: If the Big O notation of a program is `O(n^2 + 3n + 150)`, the Big O is usually simplified to `O(n^2)` because as `n` scales, `3n` and `150` become insignificant. `n^2` becomes the dominant.

## Causes of Time Complexity
1. Operations (+, -, *, /)
2. Comparisons (<, >, ==, ===)
3. Loops (for, while)
4. Outside Function calls (function())

## Causes of Space Complexity
1. Variables
2. Data Structures
3. Function call
4. Allocations

Resources: 
- [BigO cheat sheet](https://www.bigocheatsheet.com/).