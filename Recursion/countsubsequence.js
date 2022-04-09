


// subsequence sum === k
// take /nottake subsequence
// input [3,2,1,2] , k = 4
// o/p
// total count of subsquence


let ar = [1,2,3,2,1];
let k = 7;
function main() {
    console.log(recur(0,[],0));
}

function recur(i=0, tempAry = [], sum = 0) {
    // base case 
    if(i >= ar.length) {
        if(sum === k) {
            printSubsequence(tempAry);
            return 1;
        }
        return 0;
    }

    // take 
    tempAry.push(ar[i]);
    sum += ar[i];
    const l = (recur(i+1,tempAry, sum)) 

    // not take 
    tempAry.pop();
    sum -=ar[i];
    const r = recur(i+1, tempAry, sum) 

    return l + r;
}


function printSubsequence(a) {
    console.log(a)
}
main();