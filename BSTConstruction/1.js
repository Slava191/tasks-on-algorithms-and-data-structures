class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
        if(value >= this.value) {
            if(this.right)
                this.right.insert(value)
            else
                this.right = new BST(value)   
        }else{
            if(this.left)
                this.left.insert(value)
            else
                this.left = new BST(value)  
        }

        return this;
    }
  
    contains(value) {
        return this.treeInArray().includes(value)
    }

    remove(val, parent = null) {
        if (val < this.value && this.left !== null) {
            this.left.remove(val, this)
        } else if (val > this.value && this.right !== null) {
            this.right.remove(val, this)
        } else {
            //Когда нашли нужное значение
            if (this.left !== null && this.right !== null) {
                //Если и справа узел и слева - меняем текущее на минимальное в правом дереве
                this.value = this.right.getMinValue()
                //В правом дереве необходимо удалить это значение
                this.right.remove(this.value, this)
            } else if (parent === null) {
                /**
                 * Далее рассматриваются кейсы, когда лишь один из узлов отсутсвует и другие
                 */
                if (this.left !== null) {
                    this.value = this.left.value
                    this.right = this.left.right
                    this.left = this.left.left
                } else if (this.right !== null) {
                    this.value = this.right.value
                    this.right = this.right.right
                    this.left = this.right.left
                } else {

                }
            } else if (parent.left === this) {
                parent.left = this.left !== null ? this.left : this.right
            } else if (parent.right === this) {
                parent.right = this.left !==null ? this.left : this.right
            }
        }
        return this
    }

    getMinValue() {
        if(this.left === null) {
            return this.value
        } else {
            return this.left.getMinValue()
        }
    }
 
    /**
     * Собирает массив обратно в дерево
     */
    arrayInTree(array){
        const half = Math.floor(array.length/2)

        this.value = array[half]

        this.right = null
        this.left = null

        for(let i = half-1; i >= 0; i--){
            this.insert(array[i])
        }

        for(let i = half+1; i < array.length; i++){
            this.insert(array[i])
        }

        return this
    }

    // arrayInTreeCorrectHelper(array) {
    //     const half = Math.floor(array.length/2)
    //     this.value = array[half]

    //     this.arrayInTreeCorrectHelper(array.slice(0, half), this.left)
    //     this.arrayInTreeCorrectHelper(array.slice(half+1, array.length), this.right)
    // }

    arrayInTreeCorrect(array) {
        if (array.length === 0) {
            return;
        }

        const half = Math.floor(array.length/2)
        this.value = array[half]

        //console.log(array, half)

        this.arrayInTreeCorrect.call(this.left, array.slice(0, half))
        this.arrayInTreeCorrect.call(this.right, array.slice(half+1, array.length).sort((a,b)=>b-a))

        return this
    }

    /**
     * Раскручивает дерево в массив
     */
    treeInArray(){
        return [ 
            ...(this.left !== null ? this.left.treeInArray() : []), 
            this.value,
            ...(this.right !== null ? this.right.treeInArray() : [])
        ]
    }
}


// root.left = new BST(5);
// root.left.left = new BST(2);
// root.left.left.left = new BST(1);
// root.left.right = new BST(5);
// root.right = new BST(15);
// root.right.left = new BST(13);
// root.right.left.right = new BST(14);
// root.right.right = new BST(22);

const root = new BST(10);
root.insert(5);
root.insert(15);
root.insert(2);
root.insert(5);
root.insert(13);
root.insert(22);
root.insert(1);
root.insert(14);
root.insert(12);

console.log(root)

console.log(root.treeInArray())

root.remove(10);

console.log(root)

// console.log(root.treeInArray())
// console.log(root)

//console.log(root.contains(15))

// const arr = root.treeInArray()

// console.log(arr)

// console.log(root.arrayInTree(arr))