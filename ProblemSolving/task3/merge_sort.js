function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let lIndex = 0;
    let rIndex = 0;
    
    while (lIndex < left.length && rIndex < right.length) {
        if (left[lIndex] < right[rIndex]) {
            result.push(left[lIndex]);
            lIndex++;
        } else {
            result.push(right[rIndex]);
            rIndex++;
        }
    }
    
    return result.concat(left.slice(lIndex)).concat(right.slice(rIndex));
}
console.log(mergeSort([3,6,9,12,5]))