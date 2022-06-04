// https://www.youtube.com/watch?v=G1fRTGRxXU8&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=9

const ar = [1,1,1,2,2,3,4];
const k = 4;
function main() {
    let ans = [];
    recur(0,ans,[],k);
    console.log(ans)
}

function recur(index = 0, list = [], tempAry = [], target = 0) {


    if(target === 0) {
        list.push(tempAry);
        console.log(tempAry);
        return; 
    }
    if(index>=ar.length) {
        return;
    }

    for(let i = index; i<ar.length; i++) {
        if(i > index && ar[i] === ar[i-1]) continue;
        if(ar[i] > target) break;
        tempAry.push(ar[i]);
        recur(i+1, list, tempAry, target-ar[i]);
        tempAry.pop();
    }



}


main();