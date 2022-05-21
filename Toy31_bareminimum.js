const rangeMinimum = function (arr, ranges) {
    
    
    let minArr = []
    for(let i=0; i<ranges.length;i++){
        let min = arr[ranges[i][0]]
        for(let j=ranges[i][0]; j<=ranges[i][1];j++){
            if(min>arr[j]) min = arr[j]
        }
        minArr.push(min)
    }

    return minArr

  };


  const arr = [1, 3, 2, 7, 9, 11];
  const mins = rangeMinimum(arr, [
    [1, 4],
    [0, 3],
  ]);
  console.log(mins); // --> [2, 1]  