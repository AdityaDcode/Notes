// //forEach
// let arr =[1,2,3,4,5];
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);

// //Map
let num = [1,2,3,4,5];
// let double = num.map((el)=>{
//     console.log(el*2);
// });

// //Filter
// let nums = [1,2,3,4,5,6,7,8,9,10];
// let even = nums.filter((num)=>{
//     return num%2==0;
// });

// //every
// let isEven = nums.every((num)=>{
//     return num%2==0;
// });
// console.log(isEven);

// //some
// let isEven2 = nums.some((num)=>{
//     return num%2==0;
// });
// console.log(isEven2);

// //reduce
// let reduce = num.reduce((res,el)=>{
//     console.log(res);
//     return res+el;
// })
// console.log(reduce);

// //max in array
// let max = num.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// })
// console.log(max);
//spread
console.log(...num);

//rest
function sum(...args){
    return args.reduce((sum,el)=>
        sum+el
    )
}
// //destructuring
// let names = ["tony","dcd","cdcc","cdcdc"];
// let [winner,runnerup,...others] = names;
// console.log(winner);