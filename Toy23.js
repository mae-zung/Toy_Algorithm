const spiralTraversal = function (matrix) {

    let result = [];

    const spiralTraversal2 = function (matrix, result){

    let m = matrix.length
    let n = matrix[0].length

    
   
    for(let i=0;i<n;i++){
        result.push(matrix[0][i])
    }
    matrix.shift();
    if(matrix.length==0) return result 
  
    for(i=0;i<m-1;i++){
        result.push(matrix[i][n-1])
        matrix[i].pop()
    }
  
    if(matrix.length==0) return result 

    for(i=n-2;i>=0;i--){
          result.push(matrix[m-2][i])
    }
    matrix.pop();

    if(matrix.length==0) return result 
   
    for(i=m-3;i>=0;i--){
        result.push(matrix[i][0])
        matrix[i].shift()
    }
    if(matrix.length==0) return result 
    
    if(matrix.length>0) {
        spiralTraversal2(matrix,result)
    }
    return result
}

return spiralTraversal2(matrix,result).join('')
    
  };

  const matrix = [
    ['H', 'e', 'l', 'l'],
    ['l', 'd', '!', 'o'],
    ['r', 'o', 'w', ' '],
  ];
  let output = spiralTraversal(matrix);
  console.log(output); // --> 'ABCFIHGDE'
  
//   matrix = [
//     ['T', 'y', 'r', 'i'],
//     ['i', 's', 't', 'o'],
//     ['n', 'r', 'e', 'n'],
//     ['n', 'a', 'L', ' '],
//   ];
//  output = spiralTraversal(matrix);
//   console.log(output); // --> 'Tyrion Lannister'