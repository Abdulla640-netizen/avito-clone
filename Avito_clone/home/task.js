// // function sum(a,b){
// //   const result =a+b
// //   console.log(result)
// // }
// // sum(8,9)
// // sum(34,-45)
// // sum(3.4,-3.4)
// // function getMultipliedFor (array,number){
// //   let result=[]
// //   for(let i=0;i<array.length ; i++){
// //     if(array[i]%number==0){
// //       result.push(array[i])
// //     }
// //   }
// //   // return result
// // }
// // console.log(getMultipliedFor([18,5,7,12,3,16],2))
// // console.log(getMultipliedFor([3,7,291,33,56],3))
// function reverse(numbers){
//   let result=[]
//   for(let i=numbers.length;i>0 ; i--){
//     result.push(numbers[i-1])

//   }
//   return result
// }
// console.log(reverse([34,76,23,71,-14]))
// let numbers=[-34,0,332,362,16]
// let sum=(0)
// for(let i=0 ; i<numbers.length ; i++){
//   sum+=numbers[i]
// }
// let avg= sum/numbers.length
// let result=[]
// for(let i=0 ; i<numbers.length ; i++){
//   if(numbers[i]<avg){
//     result.push(numbers[i])
//   }
// }
// console.log(result)
// function getAvg(numbers){
//   let sum=(0)
//   for(let i=0 ; i<numbers.length ; i++){
//     sum+=numbers[i]
//   }
//   return sum/numbers.length
// }
// function taskSolution(numbers){
//   let avg= getAvg(numbers)
//   let result=[]
//   for(let i=0 ; i<numbers.length ; i++){
//      if(numbers[i]<avg){
//      result.push(numbers[i])
//    }
//   }
//   return result
// }
// let numbers =[21,23,21,54]
// console.log(taskSolution(numbers))
// console.log(getAvg(numbers))
const people = [
  {
    name: "Alex",
    city: "Moscow",
  },
  {
    name: "Ivan",
    city: "Moscow",
  },
  {
    name: "Joe",
    city: "New York",
  },
  {
    name: "Johan",
    city: "Berlin",
  },
];

const groupByCity = (array) => {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    let person=array[i]
    const city = person.city
    const name =person.name
    if (result[city]) {
      // если уже есть строка — превращаем в массив
      if (typeof result[city] === 'string') {
        result[city] = [result[city], name];
      } else {
        // если массив — просто пушим
        result[city].push(name);
      }
    } else {
      // если города ещё нет — записываем строкой
      result[city] = name;
    }
  }
  return result
};
console.log(groupByCity(people));
