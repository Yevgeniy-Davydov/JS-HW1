'use strict'


// // 1

// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
// const initials = userNames.map((name)=>{
    
//     const arr = name.split(' ');
//     const innerArr = arr.map((item)=>{
//         return item[0];
//        });
//        return innerArr.join('.') + ".";
  
      
// });
// const initialsSorted = initials.sort();

// console.log(initialsSorted)



// //2

// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// const letters = ["А", "Е", "Є", "И", "І", "Ї", "О", "У", "Ю ", "Я"];

// const filteredNames = userNames.filter((name)=>{
//     return letters.includes(name[0]);
// });



// console.log(filteredNames);


// // 3 

// const currentMaxValue = 4589;

// const reverseMaxValue = Number(String(currentMaxValue).split('').reverse().join(''));



// console.log(reverseMaxValue);
// console.log(typeof reverseMaxValue); 


// // 4

// const resultsArray = [1, 2, [3, [4]]];
// const flatArr = resultsArray.flat(Infinity);

// let productOfArray = flatArr.reduce ((product, currentValue)=> {
//     return product * currentValue
// });


// console.log(productOfArray);