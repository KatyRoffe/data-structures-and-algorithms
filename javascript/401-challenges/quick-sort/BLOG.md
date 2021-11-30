# Quick Sort

Quick sort determines a `pivot` value by which to compare other values.

1. Determine a pivot from a value in the array
2. Move the values that are less than the pivot value to the left
3. Move the value that are greater than the pivot value to the right
    The pivot is now in the correct spot in the array
4. We should now have two separate array
    One to the left and one to the right of the pivot
5. Determine a new pivot point
6. Move values less than the new pivot value to the left
7. Move values greater than the new pivot value to the right
8. Repeat 0until all new arrays only contain one value/element
9. Merge into a now sorted array
