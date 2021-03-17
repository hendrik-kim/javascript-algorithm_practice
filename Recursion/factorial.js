// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= 1;
//   }
//   return total;
// }

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(4);
