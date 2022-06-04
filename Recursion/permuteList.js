//[1,2,3]
// 3! = 6
//[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]

const ar = [1,2,3];
let ans = [];

async function main(){
    await permute(ar, [], []);

}
function permute(oAr = [],ds = [],freq = []) {

    // console.log(oAr, ds);
    if(ds.length === oAr.length) {
        // console.log(ds);
        ans.push(ds);
        console.log(ans);
        return;
    }
    for(let i = 0; i< oAr.length; i++) {
        if(!freq[i]) {
            freq[i] = true;
            ds.push(oAr[i]);
            permute(oAr, ds, freq);
            ds.pop();
            freq[i] = false;
        }
    }
}
main();
