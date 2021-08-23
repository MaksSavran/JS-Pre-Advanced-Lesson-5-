function summary(){
    let sum = 0;
    return function(num){
        sum += num;
        console.log(`sum = ${sum}`) 
    }
}
let sum = summary();
// sum(3);
// sum(5);
// sum(256);