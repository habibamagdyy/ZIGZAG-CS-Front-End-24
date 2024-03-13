//https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/B
function printEvenNumbers(N) {
    let foundEven = false;
    for (let i = 2; i <= N; i += 2) {
        console.log(i);
        foundEven = true;
    }
    if (!foundEven) {
        console.log(-1);
    }
}


printEvenNumbers(10);
printEvenNumbers(5);
printEvenNumbers(1);