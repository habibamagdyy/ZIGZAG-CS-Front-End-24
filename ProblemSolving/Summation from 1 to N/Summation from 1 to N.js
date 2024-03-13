//https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/G
function printSummation(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    console.log(sum);
}

// Test cases
printSummation(3);
printSummation(10);
