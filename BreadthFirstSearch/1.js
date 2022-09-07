class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

    bfsHelper(levelObj, level, node) {
        if (!levelObj[level]) levelObj[level] = []        

        for (const child of node.children) {
            levelObj[level].push(child.name)
            this.bfsHelper(levelObj, level + 1, child)
        }
    }
  
    breadthFirstSearch(arr) {
        const levelObj = { 0: this.name }

        this.bfsHelper(levelObj, 1, this)

        return Object.values(levelObj).flat()
    }
}

const graph = new Node('A');
  graph.addChild('B').addChild('C').addChild('D');
  graph.children[0].addChild('E').addChild('F');
  graph.children[2].addChild('G').addChild('H');
  graph.children[0].children[1].addChild('I').addChild('J');
  graph.children[2].children[0].addChild('K');

console.log(graph)

console.log(graph.breadthFirstSearch([]))