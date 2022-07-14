# Mitagory-Bird---Algorith-Solution

```
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example:

arr = [1,1,2,3]

There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type .

```

## Big O

The brute force solution to this algorithm would be to use two nested loopes and compare the indexes of the the two loops. However, this would provide O(N^2) time.

The solution I provided has a worst case of O(N) time. While the hash lookup is O(1) time.

This utilizes hashes as frequency counters. After the keys are counted, engineers can loop through one hash using a for in loop. each hash's keys can be 