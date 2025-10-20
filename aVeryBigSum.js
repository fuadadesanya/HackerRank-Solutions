function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for(let n = 0; n < ar.length; n++) {
        sum += ar[n];
    }
    return sum;
}