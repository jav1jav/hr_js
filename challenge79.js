function convertDoubleSpaceToSingle(str) {
  let prevKey = '';
  let newStr = '';
  
  for(let key of str) {
    console.log('key ' + key + '; prevKey ' + prevKey );
    if (prevKey === ' ' && key === ' ') {
      console.log('two spaces');
    } else {
      newStr += key;
    }
    prevKey = key;
  }
  console.log(str);
  console.log(newStr);
  str = newStr;  
  return str;
}
