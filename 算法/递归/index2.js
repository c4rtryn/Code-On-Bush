// 斐波那契数列
// 1 1 2 3 5 8 13 21 34 55.....
function fb(n){
    // fb(n) = fb(n-1) + fb(n-2)

    if(n == 1 || n == 2 ){
        return 1
    }
    return fb(n-1) + fb(n-2) 
}

console.log(fb(10));