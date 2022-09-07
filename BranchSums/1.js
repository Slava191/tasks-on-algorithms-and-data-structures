class BinaryTree{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
  
    insert(values, i = 0) {
      if (i >= values.length) return;
      const queue = [this];
      while (queue.length > 0) {
        let current = queue.shift();
        if (current.left === null) {
          current.left = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.left);
        if (current.right === null) {
          current.right = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.right);
      }
      this.insert(values, i + 1);
      return this;
    }
}
  
function branchSums(root) {
    // Write your code here.

    const array = []

    const sumOfBranch = (root, currentSum, array) => {

        if(!root) return;

        currentSum += root.value

        if(root.left || root.right){
            sumOfBranch(root.left, currentSum, array)
            sumOfBranch(root.right, currentSum, array)
        }else{
            array.push(currentSum)
        } 

    }

    sumOfBranch(root, 0, array)

    return array

}

const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(tree)

console.log(branchSums(tree))