function simpleOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let mutliply = numberA * numberB;
  let divide = numberA / numberB;
  console.log(adding);
  console.log(subtract);
  console.log(mutliply);
  console.log(divide);
}
//Skipcount by ___ for ___ times starting at ___
function skipCounting (skipCount, times, startingNumber){
  console.log(skipCount);
  for (let i=1; i<=times; i++){
    skipCount += skipCount;
    console.log(skipCount);
}
let number = [4, 7, 13, 99];
simpleOperators (number[0], number[1]);
simpleOperators (number[2], number[3]);
skipCounting (3, 6, 113) ;
