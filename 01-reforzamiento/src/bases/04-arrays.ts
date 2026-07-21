const myArray:number [] = [1,2,3,4,5];

// desstructuraion de arreglos u objetos
//const mayArray2 = [...myArray];
const mayArray2 = structuredClone(myArray);

mayArray2.push(6);

console.log({myArray, mayArray2})