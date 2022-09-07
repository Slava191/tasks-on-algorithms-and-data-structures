class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    addMany(values) {
      let current = this;
      while (current.next !== null) {
        current = current.next;
      }
      for (const value of values) {
        current.next = new LinkedList(value);
        current = current.next;
      }
      return this;
    }
  
    getNodesInArray() {
      const nodes = [];
      let current = this;
      while (current !== null) {
        nodes.push(current.value);
        current = current.next;
      }
      return nodes;
    }
}

//O(n) | O(1)
function removeKthNodeFromEnd(head, k) {
    let current = head;
    let idx = 0
    while (current !== null) {
        current.idx = idx++
        current = current.next;
    }

    let lastIdx = idx-1

    if (lastIdx - k === -1) {
        head.value = head.next.value
        head.next = head.next.next
        return
    }

    current = head;
    while (current !== null) {
        if (current.idx === lastIdx - k) {
            current.next = current.next.next
            return
        } 
        current = current.next;
    }
    
}

const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(test.getNodesInArray())

removeKthNodeFromEnd(test, 1)

console.log(test)

console.log(test.getNodesInArray())