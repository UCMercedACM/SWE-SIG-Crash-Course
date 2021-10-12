// Part 1
// console.log("Hello World!");

//Part 2
// let helloStr = "Hello World!";
// console.log(helloStr);


//Part 3
// console.log(true);
// console.log(false);
// console.log(42);
// console.log("hello world");
// console.log(12342942374982342342342323423423423234234234234234223423423423423423423423423423);
// console.log(undefined);
// console.log(null);

//Part 4
// console.log(0.1 + 0.2);
// 0.30000000000000004
// console.log(0.1 + 0.2 == 0.3);
// // false

//Part 5
// let arr = [1,2, "cat", "dog"];
// // yup, JS lets you have elements with different types in arrays

// console.log(arr[2]);
// // "cat"

// console.log(arr.length);
// // 4

// arr.push("🥺");
// // 🥺 - that's right, you can put emojis into arrays
// // oh... the important thing being that arrays are mutable (unlike primitve types!)

// console.log(arr);
// // [1,2,"cat","dog","🥺"]


//Part 6 Control Flow
// let theAnswer = "42";
// if (theAnswer === 42){
//     console.log("The answer to the everything is 42!");
// }
// else if (theAnswer == 42){
//     console.log("LOL you don't know how types work in Javascript");
// }
// else{
//     console.log("So long, thanks for all the fish!");
// }
// // "The answer to the everything is 42!"

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }
// 1
// 2
// 3
// 4
// 5

// let hungry = true;
// while (hungry){
//     // console.log("I Made it");
// }

//DOM MANIPULATION
document.getElementById("button").addEventListener("click", 

function(){
    let clickElement = document.getElementById("clicks");
    let currentClicks = Number(clickElement.innerHTML);
    clickElement.innerHTML = currentClicks + 1;
    console.log(currentClicks);
}

)


