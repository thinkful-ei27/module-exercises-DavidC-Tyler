'use strict';
const Item = (function () { 
  const foo = 'bar';
    
  const validateName = function(name){
    if(!name){
      throw new TypeError('Name does not exist');
    }
  };

  const create = function(name){
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };
    
  return {
    validateName,
    create
  };

}());

// function validateName(name){
//     $('.js-shopping-list-entry').submit(function(event){
//         if($(this).val() === ''){
//             throw new TypeError("Name does not exist"):
//         }
//     }
// }

// function create(name){
//     return {
//         id: cuid(),
//         name: name,
//         checked: false
//     }
    

// }
