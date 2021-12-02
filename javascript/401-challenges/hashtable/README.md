# Hashtables

## Challenge

Implement a Hashtable Class with the methods `add`, `get`, `contains`, and `hash`

## Approach and Efficiency

Time: O(1) \
Space: O(n)

## API
```plaintext
add()
    Arguments: key, value
    Returns: nothing
    This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get()
    Arguments: key
    Returns: Value associated with that key in the table
contains
    Arguments: key
    Returns: Boolean, indicating if the key exists in the table already.
hash()
    Arguments: key
    Returns: Index in the collection for that key
```

### Challenge 31: HashMap Repeated Word

Find the first repeated word in a book
Collaborated with Cameron Walden

#### Problem Domain

- write a function called repeated word that finds the first word to occur more than once in a string
  - arguments: string
  - return: string

> *input*: `"Once upon a time, there was a brave princess who..."` \
> *output*: `a`

### Challenge 32: HashMap Tree Intersection

Find common values in 2 binary trees.
Collaborated with Cameron Walden

#### Problem Domain

- Write a function called `tree_intersection` that takes two binary trees as parameters.
- Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees

> *input*: \
> *output*: 