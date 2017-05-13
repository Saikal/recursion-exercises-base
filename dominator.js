const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {

    for(x=0; x<node.childNodes.length; x++)
    {
      let childNode = node.childNodes[x];
      if(childNode.nodeType === 1) { 

        if(id === childNode.id) {
          return childNode;
        } else {
              if( childNode.childNodes.length > 0 )
                this.getElementById(childNode, id, count);
          }
      }
    }
  }
};

const getElementsByClassName = function(root, className) {
  // Your code here
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
