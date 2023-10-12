// whereIsWaldo function 
const whereIsWaldo = (matrix) => {
  const first = matrix[0][0]; 

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== first) {
        return [i+1, j+1];
      }
    }
  }
}

// Example 1 
const matrix1 = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]
];

console.log(whereIsWaldo(matrix1)); 

// Example 2
const matrix2 = [ 
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
];

console.log(whereIsWaldo(matrix2)); 

// Example 3
const matrix3 = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]  
];

console.log(whereIsWaldo(matrix3)); 