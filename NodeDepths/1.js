// function nodeDepths(root, d = 0) {

//     let l = d, r = d
    
//     // if(root.left && root.right){

//     //     return d + nodeDepths(root.left, ++l) + nodeDepths(root.right, ++r)

//     // }else if(root.left){

//     //     return d + nodeDepths(root.left, ++l)

//     // }else if(root.right){

//     //     return d + nodeDepths(root.right, ++r)
//     // }

//     if(root.left || root.right)
//         return d + (root.left && nodeDepths(root.left, d+1)) + (root.right && nodeDepths(root.right, d+1))

//     return d

// }

const nodeDepths = (root, d = 0) => (root.left || root.right) 
    ? d + (root.left && nodeDepths(root.left, d+1)) + (root.right && nodeDepths(root.right, d+1))
    : d

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

console.log(nodeDepths(root))