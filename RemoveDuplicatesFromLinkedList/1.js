// This is an input class. Do not edit.
class LinkedList{

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

function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList
    while(currentNode.next){
        if(currentNode.value === currentNode.next.value)
            currentNode.next = currentNode.next.next
        else
            currentNode = currentNode.next
    }
    return linkedList;
}

const input = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);

removeDuplicatesFromLinkedList(input);

console.log(input.getNodesInArray())