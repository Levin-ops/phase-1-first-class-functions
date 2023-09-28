// function Monday(){
//     console.log(`Go for a five mile run`);
//     console.log(`Pump iron`);
// }
// function Tuesday(){
//     console.log(`Go for a 10 mile run`);
//     console.log(`Dont forget to swim `);
// }
// function Wednesday() {
//     console.log(`Relax Budeng`);
//     console.log(`Cheza Elder Scrolls`);
// }

// function runFiveMiles() {
//   console.log(`Go for a five mile run`);
// }
// function liftWeights() {
//   console.log(`Pump Iron`);
// }
// function swimFortyLaps() {
//   console.log(`Swim 40 laps`);
// }
// 

// function receiveAFunction(){
//   console.log(`I will receive a function`)
// }

function callback(){
  console.log(`I will heed the call`);
}
function receivesAFunction(callback){
  callback();
}

function returnsANamedFunction(fun){
  return function fun(){console.log(``);};  
}

function returnsAnAnonymousFunction(){
  return function(){console.log(`I managed bana!`);}
}
// // function postRunActivity() {
// //     runFiveMiles();
// // }

// function exerciseRouting(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }

// function Monday() {
//   exerciseRouting(liftWeights);
// }

// exerciseRouting(function () {
//   console.log(`Stretch! Work that core`);
// }); //expressed as an anonymous function

// const callback = function name() {
//   console.log(`ye`)
// };
// const receivesAFunction(callback);
