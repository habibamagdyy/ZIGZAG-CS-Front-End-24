//https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/M
function printLuckyNumbers(A, B) {
    let count = 0;
    for (let i = A; i <= B; i++) {
        let str = i.toString();
        let hasFour = false;
        let hasSeven = false;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '4') {
                hasFour = true;
            }
            if (str[j] === '7') {
                hasSeven = true;
            }
        }
        if (hasFour && hasSeven) {
            console.log(i);
            count++;
        }
    }
    if (count === 0) {
        console.log(-1);
    }
}


printLuckyNumbers(4, 20);
printLuckyNumbers(8, 15);