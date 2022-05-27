function test3(board, operation) {

    let height = board.length;
    let width = board[0].length;
    let score = 0;
    let opArr=operation.split('')
    let x=0 ,y=0

    for(let i=0;i<opArr.length;i++){

        if(opArr[i]==='R')  x++
        else if(opArr[i]==='L') x--
        else if(opArr[i]==='D') y++
        else if(opArr[i]==='U') y--

        if(x<0) x++
        else if(y<0) y++
        else if(x>width-1) x--
        else if(y>height-1) y--
        else{
            score+=board[y][x]
            board[y][x]=0
        }
    }
    return score
  };

  const board2 =  [
    [4345, 112, 11, 756],
    [1, 1, 1, 0],
    [456, 238, 77, 7],
    [0, 0, 0, 0],
  ];
  const output2 = test3(board2, 'RRDLLDDLLRRDDDLLRUUUU')
  console.log(output2); // 820