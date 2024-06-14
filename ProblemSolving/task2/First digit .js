//https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/P
function printFirstDigitParity(X) {
    const firstDigit = Math.floor(Math.abs(X) / 1000);
    if (firstDigit % 2 === 0) {
        console.log('EVEN');
    } else {
        console.log('ODD');
    }
}

printFirstDigitParity(4569);
printFirstDigitParity(3569);