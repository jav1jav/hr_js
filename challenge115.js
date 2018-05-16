//function filterEvenElements(arr) {
//  return arr.filter(elm => elm % 2 === 0)
//}
function filterEvenElements(arr) {
  var newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr
}