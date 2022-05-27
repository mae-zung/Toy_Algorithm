// decompression

// 한 변의 길이가 2의 제곱수인 정사각형의 흑백 이미지가 2차원 배열로 주어집니다. 
// 각 좌표에는 0(백) 또는 1(흑)이 저장되어 있습니다. 
// 이미지에 포함된 데이터가 모두 1이면 '1', 모두 0이면 '0' 한 글자로 압축할 수 있습니다. 
// 그렇지 않은 경우, 이를 대문자 X로 표시하고 전체를 4등분하여 재귀적으로 압축합니다. 
// 4등분한 영역의 순서는 좌측 상단, 우측 상단, 좌측 하단, 우측 하단입니다.

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
  

//입출력 예시

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