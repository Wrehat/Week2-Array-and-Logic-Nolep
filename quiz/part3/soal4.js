//## Soal 4
//```js
function tentukanDeretGeometri(arr) {
  // you can only write your code here!

  const selisih = arr[1] / arr[0];
  for (let i = 1; i < arr.length; i++){
    if(arr[i] / arr[i-1] !== selisih){
        return false;
    }
  }return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true