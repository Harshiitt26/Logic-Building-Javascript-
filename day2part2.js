
// 17 WRITE A FUNCTION THAT TELLS IF THE GIVEN NUMBER IS PRIME OR NOT
function prime(n){
    if( n <= 1 ){
        return "INVALID INPUT"
    }
    for(let i = 2 ; i< n ; i++){
        if( n%i === 0){
            return false
        }
    }
    return true
}
console.log(prime(4))

function prime2(n){
    if( n <= 1 ){
        return "INVALID INPUT"
    }
    if( n % 2 === 0){
        return false
    }
    for(let i = 2 ; i< n ; i= i+2){
        if( n%i === 0){
            return false
        }
    }
    return true
}
console.log(prime2(8))

// 18 WRITE A FUNCTION THAT COUNTS AND RETURNS THE NUMBER OF WORDS IN A SENTENCE
function words(p){
    let sentence = p.trim().split(" ").filter((e)=> e != "")
    return sentence.length
    // return sentence.trim().split(/\s+/).length;
    
}
console.log(words(" dxt gfuy   g mjk g "))

// 19 WRITE A FUNCTION THAT CONVERTS A TEMPERATURE IN CELCIUS TO FAHRENHEIT

function temperatureConversion(temp){
    return Math.round((temp* 9/5) + 32)
}
console.log(temperatureConversion(30))

// 20 WRITE A PROGRAM THAT SWAPS TWO NUMBERS
//using a temporary variable
let a = 4, b= 5
let temp = a
a= b;
b= temp
console.log(a,b)

//without using temporary variable
let x = 4 , y = 5;
x = x+y
y = x-y
x = x-y
console.log(x,y)

// 21 WRITE A PROGRAM THAT CHECKS IF A NUMBER IS ARMSTRONG OR NOT
// 153 = (1^3) + (5^3) + (3^3) = 153
function armstrong(n){
    let digits = n.toString().split("")
    let sum = 0, power = 0;
    for(let i = 0 ; i < digits.length ; i++){
        sum = sum + (digits[i] ** digits.length)
    }
    return sum === n 
}
console.log(armstrong(153))

// 22 WRITE A PROGRAM THAT PRINTS ALL THE NUMBER FROM 1 TO N REPLACING MULTIPLE OF 3 WITH "FIZZ" ,MULTIPLE OF 5 WITH "BUZZ" AND MULTIPLE OF BOTH WITH "FIZZBUZZ"
function fizzbuzz(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        let value = ""; 
        if(i % 3 === 0 && i % 5 === 0) { value += "Fizzbuzz" }
        else if(i % 3 === 0) { value += "Fizz" }
        else if(i % 5 === 0) { value += "buzz" }
        if (value === "") {
            value = i;
        }
        result += value + " ";
    }
    console.log(result.trim());
}

fizzbuzz(16)