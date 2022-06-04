// ar=[2,3,1]
// [0,1,2,3,3,4,5,6]

let a =[2,3,1]
let tempAry  = [];
function main() {
    recur(0,0);
    console.log(tempAry.sort((a,b)=>a-b));
}

function recur(index, sum){
    if(index >=a.length) {
        tempAry.push(sum);
        return;
    }
    
    // take
    recur(index+1, a[index] + sum);

    // not take
    recur(index+1, sum);

}

main();