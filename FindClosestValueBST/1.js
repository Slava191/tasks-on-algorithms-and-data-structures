// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

function findClosestValueInBst(tree, target) {
    
    const arr = []

    const representTreeInArr = (tree, arr) => {

        if(!tree) return;

        arr.push(tree.value)

        if(!tree.left && !tree.right) return;
        
        representTreeInArr(tree.left, arr)
        representTreeInArr(tree.right, arr)

    }

    representTreeInArr(tree, arr)

    let answer = undefined
    let bestDif = undefined

    for(const item of arr){
        let currentDif = Math.abs(target-item)
        if(!answer && !bestDif || currentDif < bestDif){
            bestDif = currentDif
            answer = item
        }
    }

    return answer

}
  
const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);

console.log(root)

console.log(findClosestValueInBst(root, 12))
