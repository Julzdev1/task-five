//CREATE A FUNCTION THAT WILL CALCULATE THE AVERAGE OF NUMBER IN AN ARRAY 
function average(number) {
    let sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    //Divide the sum by the total number of array
    let avg = sum/number.length;
    //Return average
    return avg;
}
console.log(average[3,5,12,7]);


//CREATE A FUNCTION TO CONVERT FIGURES FROM FAHRENHEIT TO CELSIUS
function convertFahToCel(temperature) {
    //do some math and return
    return ((temperature - 32) * 5/9);
}
console.log(convertFahToCel(230));


// Create a function that will output the first 100 prime numbers

function prime(numbers) {
    var num = 550;
    var isPrime;
    if(numbers % 2 === 0)
    for(let i = 2; i <= num; i++); {
        for(let j = 2; j < i; j++); {
            if(i % j === 0) {
                isPrime = 0;
            } 
            else {
                isPrime = 1;
            }
        }
        if(isPrime === 1) {
            console.log(i);
        }
    }
}
console.log(prime(70));


//CREATE A FUNCTION THAT CHECKS IF A NUMBER, n IS DIVISIBLE BY TWO NUMBERS x AND y
function divisible(n, x, y) {
    if(n % x || n % y) {
        return false
    }
    return true
}
console.log(divisible(7));


//CREATE A FUNCTION THAT WILL RETURN A BOOLEAN SPECIFYING IF A NUMBER  IS A PRIME NUMBER
function test(prime) {
    if(prime < 2)
    return false

    for(i = 2; i < prime; i++); {
        if(prime % i ===0) {
            return false
        }
    }
    return true
}
console.log(test(3));


//Create a function that receives an array of numbers diverse numbers and returns an array containing only positive numbers
function filterArray(arr) {
    const newArray = []
    for(var i = 0; i < arr.length; i++) {
        if((typeof arr[i] === 'number') && arr[i] > 0 ){
            newArray.push(arr[i])
        }
    }

    return newArray
}
console.log(filterArray[1,-4,-5,3,6]);


//The marketing team is spending way too much time typing in hahtag. Let's create a hashtag generator for them, our hashtag generator will meet the following criteria;
//It  must start with a hastag symbol, #.
// Ignore all spaces in the input.
// All words must have their first letter capitalized.
// If the final result is going to be longer than 140 characters, it should return false.
// If the input or reult is an empty string, it should return false

function hashGenerator(str){
    let finalOutput
    if(typeof str !== 'string') return false
    if(str.length === 0) return false

    finalOutput = str.split('').join('')
    finalOutput = finalOutput[0].toUpperCase() + finalOutput.slice(1)
    finalOutput =  '#' + finalOutput

    if(finalOutput.length > 140) return false;
    return finalOutput
    
}
console.log(hashGenerator(julzdev));