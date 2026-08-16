//* ESTE ES UN CALLBACK
//? Un callback es una función que se le pasa a otra función como argumento.
const operar = (num1, num2, callback) => {
    num2 = num2 - num1;
    return callback(num1, num2);
}


console.log(operar(3, 7, (a, b) => a + b));
console.log(operar(3, 7, (a, b) => a - b));
console.log(operar(3, 7, (a, b) => a * b));