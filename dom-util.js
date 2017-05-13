
const visitAllNodes = function(node, callback) {
  if(node.childNodes) {
    let children = node.childNodes;
    for(let i = 0; i < children.length; i++) {
      visitAllNodes(children[i], callback)
    }
  }
  callback(node);
};

const arr = [];

const flattenTreeToArray = function(node) {

  if(node["size"] > 1) {
    arr.push(node);

    node["childNodes"].forEach(function(elem) {
      flattenTreeToArray(elem);
    });

  } else arr.push(node);
    return arr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};