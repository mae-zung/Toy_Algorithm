const decompression = function (image) {

    let result = []
    
    const search = (array) => {

        if(array.length==1){
            result.push(array[0][0]); 
            return
        }

        let number = array[0][0]
        let bool = true

        for(let i=0;i<array.length;i++){
            let length = array[i].length
            for(let j=0; j<length;j++){
                if(array[i][j]!==number) {
                   bool = false
                   break;
                }
            }
            if(bool==false) break;
        }

        if(bool==false){
            result.push('X')
            let arr1 = []
            let arr2 = []
            let arr3 = []
            let arr4 = []
            for(let k=0;k<array.length/2;k++){
                arr1.push(array[k].slice(0, array[k].length/2))
                arr2.push(array[k].slice(array[k].length/2))
                arr3.push(array[k+array.length/2].slice(0, array[k].length/2))
                arr4.push(array[k+array.length/2].slice(array[k].length/2))
            }
            search(arr1)
            search(arr2)
            search(arr3)
            search(arr4)
        }else result.push(number)
        
        return 
    } 
    search(image)
    return result.join('')

  };
  



  let image = [
    [1, 0, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 0],
  ];
  let result = decompression(image);
  console.log(result); // --> 'XX100110X1100​'
  
  image = [
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1],
  ];
  result = decompression(image);
  console.log(result); // --> 'X0X101X10101X00X10011'