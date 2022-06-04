//[1,2,2,2]

// [[],[1],[2],[1,2],[2,2],[1,2,2],[2,2,2],[1,2,2,2]]

const ar = [1,2,2,2,3,3,4,5];

let ans = [];


const a = 10;

const user = {
    a: 1,
    fun: function(){
        console.log(this);
    }
}

setTimeout(user.fun)