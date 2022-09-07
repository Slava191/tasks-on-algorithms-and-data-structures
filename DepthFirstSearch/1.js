class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {

        //The Best Way
        
        
        array.push(this.name)
        for(let currentChildren of this.children){
            currentChildren.depthFirstSearch(array)
        }

        // const getInDepth = (children) => {
            
        //     for(let currentChildren of children){

        //         array.push(currentChildren.name)

        //         //if(currentChildren.children.length > 0){
        //             getInDepth(currentChildren.children)
        //         //}
        //     }

        // }

        // getInDepth(this.children)

        //console.log(array)

        return array

    }
}

const graph = new Node('A');

graph.addChild('B').addChild('C').addChild('D');
graph.children[0].addChild('E').addChild('F');
graph.children[2].addChild('G').addChild('H');
graph.children[0].children[1].addChild('I').addChild('J');
graph.children[2].children[0].addChild('K');


console.log(graph.depthFirstSearch([]))