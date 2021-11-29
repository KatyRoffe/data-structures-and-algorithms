# Merge Sort

A merge sort uses a divide and conquer concept.

In the first pass through the array, we find the middle of the array and split into two sub-arrays.

```plaintext
input: [8,4,23,42,16,15]

original array will be split in two to form: 

[8,4,23] [42,16,15]
```

While the array length is greater than 1, continue splitting the sub-arrays into smaller sub-arrays until each individual sub-array holds one individual value.

```plaintext
[8,4] [23]          [42,16] [15]

[8,4] is split      [42,16] is split
into [8] & [4]      into [42] & [16]

[8] [4] [23]        [42] [16] [15]
```

Sort elements and merge.
```plaintext
[4, 8, 23]    [15, 16, 42]
```
Continue sorting and merging until all elements are contained within a single array once more.

```plaintext
output: [4, 8, 15, 16, 23, 42]
```
