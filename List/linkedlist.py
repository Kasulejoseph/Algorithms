class Element:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

    def get_position(self, position):
        current = self.head
        pointer = 1
        if position == 1:
            return current
        while pointer < position:
            current = current.next
            if pointer + 1 == position:
                return current
            pointer += 1
        return None

    def insert(self, new_element, position):
        current = self.head
        pointer = 1
        if position == 1:
            self.head = new_element
            self.head.next = current

        while pointer < position:
            prev = current
            current = current.next
            if pointer + 1 == position:
                current = new_element
                current.next = prev.next
                prev.next = current

            pointer += 1

    def delete(self, value):
        """Delete the first node with a given value."""
        current = self.head
        if value == self.head.value:
            self.head = current.next
            return self.head
        while current.value != value:
            prev = current
            if current.value == value:
                current = current.next

                prev.next = current.next
                current = None
            else:
                return None


# Test cases
# Set up some Elements
e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)

# Start setting up a LinkedList
ll = LinkedList(e1)
ll.append(e2)
ll.append(e3)
ll.append(e4)

# Test get_position
# Should print 3
print(ll.head.next.next.value)
# Should also print 3
print(ll.get_position(3).value)

# Test insert
ll.insert(e4, 3)
# Should print 4 now
print(ll.get_position(3).value)

# Test delete
ll.delete(1)
# Should print 2 now
print(ll.get_position(1).value)
# Should print 4 now
print(ll.get_position(2).value)
# Should print 3 now
print(ll.get_position(3).value)
