// let btnNumber = document.querySelector('#number');
// btnNumber.addEventListener('click', function(){
//     document.write("Hello darkness")
    
// })

//Create an array
const array = [4, 6, 8, 9, 11, 14];
let results = array.length;

//Display the size of the array on the console.
console.log(array);

//Display the first element.
console.log(array[0]);

//Display only the even elements from an array.
for(let i = 0; i <array.length; i ++ ){
    if(array[i] % 2 == 0){
        console.log(array[i]);
    }
}

//If the number 9 is found in an array, display "It does" to the console, including its position.
if(array.includes(9)){
    console.log("it does");
    console.log(array.indexOf(9));
} 