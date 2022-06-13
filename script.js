//          Error handling by if else

// let addFun = (x) => {
//    let temp = Number.parseInt(x);
//    if(!temp){
//    console.log("Plz provide a integer Number");
//    } else{
//     console.log(temp);
//    }
// }
// addFun('Hello');


//             Error handling by try catch


let hello = (z) =>{
try{
    let temp = z.trim();
    let words = temp.split(" ");
    console.log(words);
} catch(e){
  console.log("Please Provide a valid text");
}
}

hello(1956);
// hello("Hello world");