let backpack = [];

backpack.push('pokeball');
backpack.push('potion');
backpack.push('pokedollars');


// backpack.shift();
backpack.splice(0, 1);

let stone = 'Water Stone';
backpack.push(stone);

backpack.pop();

// console.log(backpack.length);

backpack.push('Great ball', 'antidote', 'revive');

let satchel = backpack.splice(3, 2);


// console.log(backpack);
// console.log(satchel);



// for (let i = 0; i < backpack.length; i++) {
//     const element = backpack[i];
//     console.log(`This is the postion of the items from the backpack ${i}:`, element);
// }

// for (let i = 0; i < 2; i++) {
//     const element = backpack[i];
//     console.log(`This is the postion of the items from the backpack ${i}:`, element);
// }

// if (backpack.length > 2) {    
//     for (let i = 0; i < 2; i++) {
//         const element = backpack[i];
//         console.log(`This is the postion of the items from the backpack ${i}:`, element);
//     }
// } else {
//     for (let i = 0; i < backpack.length; i++) {
//         const element = backpack[i];
//         console.log(`This is the postion of the items from the backpack ${i}:`, element);
//     }
// }


let guessMe = 54;

while (guessMe < 100) {
    console.log('++++++++', guessMe);

    if (guessMe % 4 === 0 || guessMe % 5 === 0) 
    {
        guessMe += 25;
        console.log('Mod 4 || 5', guessMe);
    } 
    else if (guessMe % 3 === 0) 
    {
        guessMe -= 27;
        console.log('Mod 3', guessMe);
    } 
    else 
    {
        guessMe += 3;
        console.log('else', guessMe);
    }

    guessMe += 22;
    console.log('added 22', guessMe);
}

console.log('Final Value', guessMe);
