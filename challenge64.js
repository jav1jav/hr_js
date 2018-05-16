function countWords(str) {

  let arr = str.split(' ');
  console.log(arr);
  var obj = { 0: 'a', 1: 'b', 2: 'c' };
  let word = ''; 
  console.log('first obj: ' + obj);
  
  function wordInObject(wio) {
    console.log('obj: ' + obj);
    console.log('Object.keys(obj): ' + Object.keys(obj));
    let tmpArr = Object.keys(obj);
    if (tmpArr) {
      return tempArr.indexOf(wio) !== -1;  
    } else {
      return false;
    }
  };
  
  for(let i = 0; i < arr.length; i++ ) {
    word = arr[i];
    console.log(word);
    if (wordInObject(word)) {
      console.log('in the object ' + obj.word);
      obj[word] = obj[word] + 1;
    } else {
      obj[word] = 1;
      console.log('not in the object ' + obj[word] + ' blah ' + word);
    }
  }
  console.log(obj);
  return obj;
}
