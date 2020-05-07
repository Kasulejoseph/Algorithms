class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BST(object):
    def __init__(self, root):
        self.root = Node(root)

    def insert(self, new_val):
        self.insert_helper(self.root, new_val)

    def search(self, find_val):
        return self.search_helper(self.root, find_val)

    def print(self):
        return self.print_tree(self.root, '')[:-1]

    def print_tree(self, start, find_val):
        if start:
            find_val += str(start.value) + '-'
            find_val = self.print_tree(start.left, find_val)
            find_val = self.print_tree(start.right, find_val)
        return find_val

    def insert_helper(self, start, new_val):
        if start.value > new_val:
            if start.left:
                self.insert_helper(start.left, new_val)
            else:
                start.left = Node(new_val)
        else:
            if start.right:
                self.insert_helper(start.right, new_val)
            else:
                start.right = Node(new_val)

    def search_helper(self, start, find_val):
        if start:
            if start.value == find_val:
                return True
            elif start.value > find_val:
                return self.search_helper(start.left, find_val)
            else:
                return self.search_helper(start.right, find_val)
        return False



# Set up tree
tree = BST(4)

# Insert elements
tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(5)

# Check search
# Should be True
print(tree.search(3))
# Should be False
print(tree.search(6))

# print tree
print(tree.print())
