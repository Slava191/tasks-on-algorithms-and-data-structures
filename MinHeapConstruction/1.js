// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    rebuild () {
        const currentIdx = this.heap.length-1
        const parentIdx = Math.floor((currentIdx - 1) / 2);

        for (let i = parentIdx; i >= 0; i--)
            this.buildHeapHelper(this.heap, i)
    }
  
    buildHeap(arr) {
        const currentIdx = arr.length-1
        const parentIdx = Math.floor((currentIdx - 1) / 2);

        for (let i = parentIdx; i >= 0; i--)
            this.buildHeapHelper(arr, i)

        return arr
    }
  
    buildHeapHelper (arr, parentIdx) {
        const firstChildNode = 2 * parentIdx + 1
        const secondChildNode = 2 * parentIdx + 2

        if (arr[firstChildNode] && arr[secondChildNode]) {
            const minIdx = arr[firstChildNode] <= arr[secondChildNode] ? firstChildNode : secondChildNode
            if (arr[parentIdx] > arr[minIdx]) {
                this.swap(arr, parentIdx, minIdx)
                this.buildHeapHelper(arr, minIdx)
            }
        } else if (arr[firstChildNode]) {
            if (arr[parentIdx] > arr[firstChildNode]) {
                this.swap(arr, parentIdx, firstChildNode)
                this.buildHeapHelper(arr, firstChildNode)
            }
        } else if (arr[secondChildNode]) {
            if (arr[parentIdx] > arr[secondChildNode]) {
                this.swap(arr, parentIdx, secondChildNode)
                this.buildHeapHelper(arr, secondChildNode)
            }
        } 
    }

    siftDown() {
      return true
    }
  
    siftUp() {
        return true
    }
  
    peek() {
        return this.heap[0]
    }
  
    remove() {
        const val = this.heap.shift()
        this.rebuild()
        return val
    }
  
    insert(value) {
        this.heap.push(value)
        this.rebuild()
        return null
    }
    
    swap (arr, firstIdx, secondIdx) {
        const tmp = arr[firstIdx]
        arr[firstIdx] = arr[secondIdx]
        arr[secondIdx] = tmp
    }
}
  
const minHeap = new MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41])

minHeap.insert(76);

console.log(minHeap.heap)

console.log(minHeap.peek())

minHeap.remove()

console.log(minHeap.heap)