// i/p [2,3,6,7] k = 7
// o/p [[2,2,3],[7]]

const ar = [2,3,6,7]
const k = 7;
function main() {
recur(0,[],k)
}



function recur(i=0, tempAr = [], target = 0){
    if(target === 0) {
        console.log(tempAr);
        return;
    }
    if(i >= ar.length){
        return;
    }

    // take
    tempAr.push(ar[i]);
    if(target - ar[i] >= ar[i] || target - ar[i] === 0){
        recur(i, tempAr,target - ar[i] );
    }

    // not take
    tempAr.pop();
    recur(i+1, tempAr, target);
}

main();