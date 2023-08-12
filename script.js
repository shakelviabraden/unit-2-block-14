//identifying odd numbers
const arrayone = [2, 4, 6, 8, 11, 20, 15, 22];

let even =[];
let odd = [];

for (i=0; i < arrayone.length; i++) {
    const nums = arrayone[i];

    //make sure to put nums variable in the (). This is because the value of nums is being evaluated. the value of nums is what we want pushed into the arrary even or odd.

    if (nums % 2 === 1) {
        odd.push(nums);
    } else {
        even.push(nums);
    }
}

console.log(`These are odd numbers: ${odd}. These are even numbers: ${even}`);


//Vowels Vs Consonant
const word= 'hello';
const namedVowels= 'aeiou';
let vowels= 0;
let consonants= 0;

for (i=0; i < word.length; i++) {
    const char= word[i];

    // is word[0]= h in namedVowels= aeiou
    // is word[1]= e in namedVowels= aeiou
    // is word [2]= l in namesVowels= aeiou
    // on and on
    if (namedVowels.includes(char)) {
        //number of vowels
        vowels++;
    } else {
        //number of consonants
        consonants++;
    }
}

console.log(`The word ${word} has ${vowels} vowels and ${consonants} consonants.`)

//Reverse of array in loop. Can also use arrayName.reverse()
const array= [1, 2, 3];

for (let i= array.length -1; i >= 0; i--) {
    let reversedNums= array[i];
    console.log(reversedNums);
};

console.log(array.reverse())


//FizzBuz
//     start  condition to continue    which way to increment (forward)
for (let i=1; i <= 100;                 i++) {
    const nums = i

        // if its a multiple of both 3 & 5
    if (nums % 3 === 0 && nums % 5 === 0) {
        console.log('FizzBuzz')
    // if divisible by 3
    } else if (nums % 3 === 0) {
        console.log('Fizz')
    } else if (nums % 5 === 0) {
        console.log ('Buzz')
    } else {
        console.log(nums)
    }
}