// ---------------- Addition Checkpoint ----------------
function addinator (x, y) {
    addinatorResult = Number(x) + Number(y)
    console.log(addinatorResult)
    return addinatorResult
}

addinator(2, 3);

// ---------------- Conditional Checkpoint ----------------
function biggerNumber (x, y) {
    if (x > y)
    console.log('The first number was bigger!')
        else if (x < y)
        console.log('The second number was bigger!')
            else if (x === y)
            console.log('The numbers are the same!')
}

biggerNumber(3, 2);
biggerNumber(2, 7);
biggerNumber(7, 7);

// ---------------- Array Checkpoint ----------------
let numbers = [1, 3, 5, 7, 11, 18]

function arrayAddition(anArray) {
   let arrayResult = anArray[0] + anArray[anArray.length-1]
   console.log(arrayResult)
   return arrayResult
}

arrayAddition(numbers);

// ---------------- Loops, Arrays, and Concatenation Checkpoint ----------------
let ham = ['hbf', 'kjshdbv', 'ksjdhbv', 'Hello', 'There!']
let taco = ['kjfsbv', 'akjs', 'General', 'Kenobi!', 'You', 'Are', 'A', 'Bold', 'One!']
function Utapau (anArray, x) {
    let sentence = [];
    for (let i = x; i<anArray.length; i++)
        sentence.push(anArray[i])
    let cat = sentence.toString();
    console.log(cat.replaceAll(',', ' '))
}

Utapau(ham, 3);
Utapau(taco, 2);

// ---------------- Looping through an Array of Objects Checkpoint ----------------
let employees = [
    {name: 'Josh', years: 4},
    {name: 'Alan', years: 6}
]
function experience(anArray) {
    let experience = 0
    for (let i = 0; i < anArray.length; i++)
        experience += anArray[i].years
    console.log('Your team members have', experience, 'years of experience combined!')
}

experience(employees);

// ---------------- Loops and Two Dimensional Arrays Checkpoint ----------------
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

function addingArrays(anArray, anArrayTwo) {
    let biggerArray = anArray.concat(anArrayTwo)
    let total = 0
    for (let i = 0; i < biggerArray.length; i++)
        total += biggerArray[i]
    console.log(total)
    return total
}

addingArrays(array1, array2);