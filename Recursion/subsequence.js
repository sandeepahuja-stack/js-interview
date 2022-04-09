// take intake subsequence
// input [3,2,1] 
// o/p
// [],[3],[2],[1],[3,2],[2,1],[3,1],[3,2,1]

let ar = [3,2,1];

function main () {
    subsequnce(0,[]);
}

function subsequnce(i = 0, tempar = [] ) {
    // base case
    if(i >= ar.length) {
        printSubsequence(tempar);
        return;
    }

    //  take 
    tempar.push(ar[i]);
    subsequnce(i+1,tempar);

    // not take
    tempar.pop();
    subsequnce(i+1, tempar);


}

function printSubsequence(a){
    console.log(a);
}
main();