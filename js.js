// let fizz = [];

// for(let i = 1; i <= 100; i++) {

//     let three = i % 3
//     let five = i % 5

//     if(three === 0 && five === 0) {
//         fizz.push('FizzBuzz');
//     } else if (three === 0) {
//         fizz.push('Fizz')
//     } else if (five === 0) {
//         fizz.push('Buss')
//     } else {
//         fizz.push(i)
//     }


// }

// console.log(fizz)

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// ------------------------------------------------------------
// let i = 99;
// while(i > 0){
//     if(i === 1) {
//         console.log(`${i} bottle of beer on the wall, ${i} bottle of beer.
//         Take one down and pass it around, no more bottles of beer on the wall.`)
//     } else {
// console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.
//     Take one down and pass it around, ${i - 1} bottles of beer on the wall.`)
//     }
// i--
// }

// console.log(`No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.`)

// ------------------------------------------------------------

function fibonacciGenerator (n) {
        let a = [0];
        if(n === 0) {
            return a
        }
        let x = 0
        while(x < n){
          if(a.length === 1) {
            a.push(1)
          } else {
       a.push(a[a.length - 2] + a[a.length - 1])
          }
        x++
        }
        return a.slice(0, a.length - 1);
    }
console.log(fibonacciGenerator (2))
