# Challenge Summary

## Challenge 05: Singly Linked List implementation

Create a singly linked list with the following requirements:

1. Can successfully instantiate an empty linked list
2. Can properly insert into the linked list
3. The head property will properly point to the first node in the linked list
4. Can properly insert multiple nodes into the linked list
5. Will return true when finding a value within the linked list that exists
6. Will return false when searching for a value in the linked list that does not exist
7. Can properly return a collection of all the values that exist in the linked list

## Challenge 06: Linked List insertions

Extend the linked list to include the new methods of `append`, `insertBefore`, and `insertAfter` with the following requirements

1. Can successfully add a node to the end of the linked list
2. Can successfully add multiple nodes to the end of a linked list
3. Can successfully insert a node before a node located i the middle of a linked list
4. Can successfully insert a node before the first node of a linked list
5. Can successfully insert after a node in the middle of the linked list
6. Can successfully insert a node after the last node of the linked list

## Whiteboard Process

![linked-list-insertions whiteboard](./linked-list-insertions.PNG)

## Approach & Efficiency

### Challenge 05

Followed class demo code for initial codebase. Continued building out the code based on the logic presented in the demo. Built testing around the codebase to verify that it works as expected

- `insert()`: O(1)
- `includes()`: O(N)
- `toString()`: O(N)

### Challenge 06

Used code established in challenge 05 to continue building additional methods and testing.

- `append()`: O(1)
- `insertBefore()`: O(1)
- `insertAfter()`: O(1)

## Solution

[See Code Here](./linked-list/index.js)