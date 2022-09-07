// This is the class of the input linked list.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  

//Для отрицательных чисел!

function shiftLinkedList(head, k) {

    let id = 0
    const nodes = []
    
    let current = head;
    while (current) {
        nodes.push({
            id: id++,
            next: current.next ? id : null,
            value: current.value
        });
        current = current.next;
    }

    const nodesLength = nodes.length

    let isPositive = true 

    if(k < 0){
        k = -1*k
        isPositive = false
    }

    k = k > nodesLength ? k-Math.floor(k/nodesLength)*nodesLength : k

    if(k === 0) return head

    
    let newHead = null

    if(isPositive){

        newHead = new LinkedList(nodes[nodesLength-k].value);

        let currentNewHead = newHead

        for(let i = nodesLength-k+1; i < nodesLength; i++){
            currentNewHead.next = new LinkedList(nodes[i].value);
            currentNewHead = currentNewHead.next
        }

        for(let i = 0; i < nodesLength-k; i++){
            currentNewHead.next = new LinkedList(nodes[i].value);
            currentNewHead = currentNewHead.next
        }

    }else{

        k = k === nodesLength ? 0 : k

        newHead = new LinkedList(nodes[k].value);
        
        let currentNewHead = newHead

        for(let i = k+1; i < nodesLength; i++){
            currentNewHead.next = new LinkedList(nodes[i].value);
            currentNewHead = currentNewHead.next
        }

        for(let i = 0; i < k; i++){
            currentNewHead.next = new LinkedList(nodes[i].value);
            currentNewHead = currentNewHead.next
        }

    }

    return newHead

}

function linkedListToArray(head) {
    const array = [];
    let current = head;
    while (current) {
        array.push(current.value);
        current = current.next;
    }
    return array;
}

const head = new LinkedList(0);
head.next = new LinkedList(1);
head.next.next = new LinkedList(2);
head.next.next.next = new LinkedList(3);
head.next.next.next.next = new LinkedList(4);
head.next.next.next.next.next = new LinkedList(5);

console.log(JSON.stringify(head))

console.log(linkedListToArray(head))

const result = shiftLinkedList(head, -6);

const array = linkedListToArray(result);

console.log(array)