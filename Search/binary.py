"""You're going to write a binary search function.
You should use an iterative approach - meaning
using loops.
Your function should take two inputs:
a Python list to search through, and the value
you're searching for.
Assume the list only has distinct elements,
meaning there are no repeated values, and
elements are in a strictly increasing order.
Return the index of value, or -1 if the value
doesn't exist in the list."""


def binary_search(input_array, value):
    """Your code goes here."""
    lower = 0
    upper = len(input_array)
    x = 0
    while x < 3:
        x = x + 1
        mid = (upper + lower) // 2
        print('======>', lower, upper, mid)

        mid_value = input_array[mid]
        if mid_value == value:
            return mid
        if mid_value < value:
            lower = mid + 1
        else:
            upper = mid - 1
            print('lower==>', lower)
        mid_value = input_array[mid]
        print(mid_value, mid)
        if mid_value == value:
            return mid

    return -1


test_list = [1, 3, 9, 11, 15, 19, 29]
# test_val1 = 25
test_val2 = 9
# print(binary_search(test_list, test_val1))
print(binary_search(test_list, test_val2))
