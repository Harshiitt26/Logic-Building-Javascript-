// 13 WRITE A FUNCTION THAT COUNTS AND PRINTS THE NUMBER OF VOWELS AND CONSONENTS IN A GIVEN STRING.
function vowCon(word){
    let str = word.toLowerCase()
    let vowels = 0 , consonents = 0 ;
    for (let i = 0 ; i < str.length ; i++){
        if( /[a-z]/.test(str[i])){
         ("aeiou".includes(str[i])) ? vowels++ : consonents++
        }
    }
    return `${vowels} Vowels & ${consonents} Consonents`
}
console.log(vowCon("NAMAN  . 231"))

// 14 WRITE A FUNCTION THAT FINDS ALL THE FACTORS OF A GIVEN NUMBER
function factor(n){
    if(n<1){
        throw new Error("INVALID INPUT")
    }
    let result = []                          // ""
    for(let i = 1; i <= n ; i++){
        (n%i === 0) ? result.push(i) : null  // concate
    }
    return result.join(", ")                 // .trim("")
}
console.log(factor(6))

// 15 WRITE A FUNCTION THAT CALCULATES AND RETURNS THE AVERAGE OF A SET OF NUMBERS

function average(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++ ){
        sum += arr[i]
    }
    return sum/arr.length
}
console.log(average([2,4]))

// 16 WRITE A FUNCTION THAT CALCULATES AND PRINTS THE SIMPLE INTEREST ON A LOAN AMMOUNT
function simpleInterest(principal , interest , time){
    result = principal * interest * time
    return (result/100).toFixed(2)
}
console.log(simpleInterest(20000,10,5))