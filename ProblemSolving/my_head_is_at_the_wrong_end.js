// link problem -->https://www.codewars.com/kata/56f699cd9400f5b7d8000b55
function fixTheMeerkat(arr) {
  let i = 0
  let u = arr.length - 1
  while(i < arr.length/2){
      let d = arr[i]
      arr[i] = arr[u]
      arr[u] = d
      i = i + 1
    return arr
  }
  }

