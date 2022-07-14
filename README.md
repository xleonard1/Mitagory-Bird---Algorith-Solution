# Mitagory-Bird---Algorith-Solution

```
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example:

arr = [1,1,2,3]

There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

```

## Big O

The brute force solution to this algorithm would be to use two nested loopes and compare the indexes of the the two loops. However, this would provide O(N^2) time.

The solution I provided has a worst case of O(N) time. While the hash lookup is O(1) time.

This utilizes hashes as frequency counters. The Object.keys() method is used to create an array of the keys that can be then itterated through using the reduce method, to find the two keys with the highest values.

# Beautiful Days - Algorithm Solution 

Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 90.

She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days[i...,j],  and a number 'k', determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.

## Big O
```
The big O is O(N)
```