// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]


multiplicationTable = function(size) {
    let tables = []
    
    for (let i=0; i < size; i++){
      tables[i] = []
      for (let l=0; l < size; l++){
        tables[i][l] = (i+1) * (l + 1)
      }
    }
    return tables
  }