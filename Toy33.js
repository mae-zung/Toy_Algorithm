const LIS = function (arr) {

    let nextNum = 0;
    //count는 엄격한 오름차순 배열
    let count = [];
    let Maxlength = 0;

    for(let i=0; i<arr.length; i++){
        
        
        nextNum = arr[i]
        count.push(nextNum)
        for(let j=i+1; j<arr.length;j++){
            //만약 다음 숫자가 더 작다면, 전 숫자보다 클 경우만 nextNum을 빼고, 배열에 넣어줌
            if((nextNum>arr[j])&&(count[count.length-2]<arr[j])){
                count.pop()
                nextNum = arr[j]
                count.push(nextNum)
            }

            //다음 숫자가 더 크다면, 바로 배열에 넣어줌
            else if(nextNum<arr[j]){
                nextNum = arr[j]
                count.push(nextNum)
            }
        }

        //현재 최대 길이 값보다 크면 그 숫자로 바꿔줌
        if(count.length>Maxlength) Maxlength=count.length
        count = [];

        // 배열 뒷쪽의 숫자들은 고려하지 않아도 됨.
        if(Maxlength>arr.length-i) break
    }

    return Maxlength
    
  };

//여긴 테스트용 

  let output = LIS ([7, 2, 6, 4, 5, 1, 3]);
  console.log(output); // --> 7
  
  output = LIS([3, 10, 2, 1, 20]);
  console.log(output); // --> 3 (3, 10, 20)
  