var arr = [1,2,3,4,5,6,7,8,9,10,11];
function even(k){
    if (k.length===0) return 0;
    return (k[0] % 2 === 0 ? 1 : 0) + even(k.slice(1));
}

function even2(k){
    if (k.length===0) return 0;
    return (k[0] % 2 != 0 ? 1 : 0) + even(k.slice(1));
}

console.log(even(arr));

console.log(even2(arr));
