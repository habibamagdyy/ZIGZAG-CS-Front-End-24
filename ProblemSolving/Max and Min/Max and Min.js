//https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/K
function printMinMax(A, B, C) {
    let min = Math.min(A, B, C);
    let max = Math.max(A, B, C);
    console.log(max);
    console.log(min);
}

printMinMax(1, 2, 3);
printMinMax(-1, -2, -3);
printMinMax(10, 20, -5);