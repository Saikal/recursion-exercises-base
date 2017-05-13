const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...


//for arrays only!:
let str = "[";
const stringify = function(obj) {
  if(Array.isArray(obj) === true) {

    for (let i = 0; i < obj.length; i++){

        if(Array.isArray(obj[i]) === false){
            if(i === obj.length-1) {
              str = str+obj[i];
            } else
            str = str+obj[i]+",";
        } else {
          str = str + "[";
            stringify(obj[i]);
          }
    }
      str = str + "]";
      return str;
  }
};

module.exports = {
  stringify: stringify
};