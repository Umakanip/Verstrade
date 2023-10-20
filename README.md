# Program Details:
# 1. Balaned Substring:
# Questions and Answers:
Q: getBalancedSubstrings what to do?

A: The function takes a string S as input and returns an array of the longest balanced substrings. A balanced substring consists of exactly two different characters, and both of those characters appear the same number of times.

Q: What is the purpose of the isBalanced function?

A: This function checks whether a given string is balanced or not. It counts the occurrences of each character in the string and verifies if there are exactly two different characters, each occurring the same number of times.

Q: How its work?

A: The main function iterates pairs of characters in the input string S. For each pair, it filters the string to include only those two characters, then checks if the filtered string is balanced using the isBalanced function. If balanced, it is added to the result array. The final result is an array of the longest balanced substrings.

#Code Description:

1.Iterate pairs of characters in S.
2.For each pair, filter the string to include only those two characters.
3.Check if the filtered string is balanced using the isBalanced helper function.
4.If balanced, add it to the result array.
5.Return the array of the longest balanced substrings.


# Program Details:
# 1. Fibonacci Series:
# Program description

The iterative solution maintains only two variables (`prev` and `current`) and iterates, and calculating the next Fibonacci number until it reaches given position.
