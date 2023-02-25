// let num1 = 5;
// let num2 = 15;
//  if(num1 < num2) {
//     console.log('numero um maior');
//  }
//  else
//  console.log('numero dois maior');

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);

//   }

const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));