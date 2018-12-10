'use strict';

const store = (function () {
  const foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id){
    const found = store.items.find(item => item.id === id);
    return found;
  };

  
  //   Inside store.js, make an addItem method, which accepts a name parameter. Use a try/catch block 
  //   and the Item module to validate the name and create the item, then push it to this.items.

  const addItem = function(name){
    try {Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error){
      console.log('Cannot add item: {error.message}');
    }

  };

  //   Make a findAndToggleChecked method, which accepts an id, then
  //    uses this.findById() to fetch the item and toggle its checked attribute

  const findAndToggleChecked = function(id){
    const foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
  };

  //   Make a findAndUpdateName method, which accepts id and newName parameters. 
  //   Use a try/catch to first validate the name and then use findById() to fetch the item and update its name. 
  //   Inside catch, log out 'Cannot update name: {error.message}'

  const findAndUpdateName = function(id, newName){
    try{Item.validateName(newName);
      const changedItem = store.findById(id);
      changedItem.name = newName;
    }
    catch(error){console.log('Cannot update name: {error.message}');}
  };

//   Make a findAndDelete method, which accepts an id, and then removes the item from this.items. 
//   (HINT: You can use array method .filter() or a combination of .findIndex() and .splice().)

  const findAndDelete = function(id){
    const index = this.items.findIndex(item => item.id === id);
    console.log(index);
    this.items.splice(index, 1);
  };

  const toggleCheckedFilter = function(){
    this.hideCheckedItems = !this.hideCheckedItems;
  };
  const setSearchTerm = function(string){
    this.searchTerm = string;
  };

  return {
    setSearchTerm,
    toggleCheckedFilter,
    items, 
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };

}() );

