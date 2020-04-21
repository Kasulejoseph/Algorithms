class Element(object):
    def __init__(self, value):
        self.node = value
        self.next = None


class LinkedList(object):
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
        if value == self.head.data:
            self.head = current
            return self.head
        while current.next:
            prev = current
            if current.data == value:
                current = current.next

                prev.next = current.next
                current = None
            else:
                return None
