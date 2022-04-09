//https://www.youtube.com/watch?v=eQCS_v3bw0Q&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=7


// subsequence sum === k
// take /nottake subsequence
// input [3,2,1,2] , k = 4
// o/p
// [3,1], [2,2]


let ar = [1,2,3];
let k = 5;
function main() {
    recur(0,[],0);
}

function recur(i=0, tempAry = [], sum = 0) {
    // base case 
    if(i >= ar.length) {
        if(sum === k) {
            printSubsequence(tempAry);
            return true;
        }
        return;
    }

    // take 
    tempAry.push(ar[i]);
    sum += ar[i];
    if(recur(i+1,tempAry, sum)) {
        return true;
    };

    // not take 
    tempAry.pop();
    sum -=ar[i];
    if(recur(i+1, tempAry, sum)){
        return true;
    }
    return false;

}


function printSubsequence(a) {
    console.log(a)
}
main();