// 10 WRITE A FUNCTION THAT FINDS AND PRINTS THE LARGEST ELEMENT IN AN ARRAY OF NUMBERS
function maximum(arr){
    let max = arr[0]
    for(let i = 1 ; i < arr.length  ; i++){
        arr[i] > max ? max = arr[i] : null
        // console.log(i)
    }
    return max
}
console.log(maximum([5,2,30,4,5,6,7,8]))

function maximum2(arr){
    return Math.max(...arr)
}
console.log(maximum2([5,2,30,100,5,6,7,8]))

// 11 WRITE A FUNCTION THAT CHECKS IF THE STRING IS PALINDROME(A PHRASE THAT READS THE SAME BACKWARD OR FORWARD) OR NOT
function palindrome(str){
    let newStr = str.toLowerCase()
    for(let i = 0 ; i < newStr.length/2 ; i++){
        if(newStr[i] !== newStr[newStr.length -1 -i]){
            return `${newStr} is not palindrome`
        }  
    }
    return `${str} is palindrome`
}
console.log(palindrome("Naman"))

function palindrome2(str){
    let newStr = str.toLowerCase()
    let start = 0, end = str.length -1;
    for(start,end ; start<end ; start++,end-- ){
        if(newStr[start] !== newStr[end]){
            return `${newStr} is not palindrome`
        }
    }
    return `${str} is palindrome`
}
console.log(palindrome2("Naman"))

function palindrome3(str){
    strLower= str.toLowerCase()
    let newStr = strLower.split("").reverse().join("")
    return (strLower === newStr) ? `${str} is palidrome`:  `${str} is not palidrome` 
}
console.log(palindrome3("Naman"))

// 12 WRITE A FUNCTION THAT RETURNS THE RESULT OF RAISING A GIVEN NUMBER TO A SPECIFIED POWER.
function power(x,n){
    return Math.pow(x,n)
    // return x ** n
}
console.log(power(3,3))

function power2(x,n){
    let result = 1
    for(let i = 1; i <= n ; i++){
        result *= x 
    }
    return result
}
console.log(power2(5,4))