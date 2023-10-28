let  temperatures = [73,74,75,71,69,72,76,73]

// var dailyTemperatures = function(temperatures) {
//     const res = []
//     const len = temperatures.length
//     for(let i = 0; i < len; i++){
//         let flag = false
//         const item = temperatures[i]
//         for(let j = i + 1; j < len; j++){
//             const high = temperatures[j]
//             if(item < high){
//                 res.push(j - i)
//                 flag = true
//                 break
//             }
//         }
//         if(!flag){
//             res.push(0)
//         }
//     }
//     return res
// };

let arr = []
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length
    const stack = []
    const res =new Array(len).fill(0)
    for(let i = 0; i < len; i++){
        //存在打破递减趋势的温度
        while(stack.length && temperatures[i] > temperatures[[stack.length-1]]){
            const top = stack.pop()
            res[top] = i - top
        }
        stack.push(i)
    }
    return res
}
console.log(dailyTemperatures(temperatures));