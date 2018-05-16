function select(arr, obj) {
  //put the keys of the object in an array
  //loop through items in the array
  //compare the the keys of the object to the items in the array
  //where a key === item in the array, pull that property into a new object

  var objKeysArr = Object.keys(obj);
  var returnObj = {};

  arr.forEach(function(item) {
    objKeysArr.forEach( function(key) {
      if (item === key) {
        returnObj[key] = obj[key];
      }
    });
  });
  console.log(returnObj);
  return returnObj;
}
