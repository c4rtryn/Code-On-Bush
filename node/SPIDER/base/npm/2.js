// console.log(process.argv[process.argv.length - 1]);

let player = process.argv[process.argv.length - 1]

//电脑生成一个
let arr = ['rock','scissors','paper']
let index = Math.floor(Math.random() * arr.length)
let computer = arr[index]
// 比较
if(computer === player){
    console.log('平局');
}else if(
    (computer === 'rock' && player === 'paper') ||
    (computer === 'paper' && player === 'scissors') ||
    (computer === 'scissors' && player === 'rock') 
){
    console.log('你赢了');
}else{
    console.log('你输了');
}
