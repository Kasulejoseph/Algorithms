"""Implement quick sort in Python.
Input a list.
Output a sorted list."""


def partition(array, pivot_index, index):
    pt = pivot_index
    pivot = array[pt]
    for i in range(index, pt):
        # increment item if item[i] is less or equal to pivot
        if pivot >= array[index]:
            index = index + 1
        # swap change pivot to the next descend value
        elif pivot < array[index]:
            # if next value in the next ascending position of pivot is less than
            # the value to be replace for pivot position, swap the values.
            if pt+1 < pivot_index and array[index] > array[pt+1]:
                array[index], array[pt + 1] = array[pt + 1], array[index]

            # value[0] = value[pivot-1], value[pivot] = value[0], value[pivot-1] = value[0]
            array[index], array[pt], array[pt - 1] = array[pt - 1], array[index], array[pt]
            # change pivot element
            pt = pt - 1
    return index, array


def quicksort(array):
    pivot_index = len(array) - 1
    index = 0
    sorted_ = 0
    partition_ = partition(array, pivot_index, index)
    index = partition_[0]
    # greater than pivot
    while pivot_index > index:
        index = index + 1
        partition(array, pivot_index, index)
    # list less than pivot
    while index > sorted_:
        index = index - 1
        partition(array, index, sorted_)

    return partition_[1]


test = [21, 4, 1, 3, 9, 207, 25, 6, 20001, 14]
test2 = [97, 200, 100, 101, 211, 107]
test3 = [12, 4, 5, 6, 7, 3, 1, 15]
test4 = [3, 1, 4, 2, 5]
test5 = [12, 3, 5, 4, 7, 3, 1, 3]
print(quicksort(test))
