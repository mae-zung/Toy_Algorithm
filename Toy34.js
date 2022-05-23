// Toy34 : LCS 
// 두 문자열을 입력받아 다음의 조건을 만족하는 LCS의 길이를 리턴해야 합니다.
// LCS: 두 문자열에 공통으로 존재하는 연속되지 않는 부분 문자열(Longest Common Subsequence)


const LCS = function (str1, str2) {

    let array1 = str1.split('')
    let array2 = str2.split('')
    let maxlength = 0

    for(let k=0;k<array1.length;k++){
        
        let count = 0
        let n = 0

        for(let i=k;i<array1.length;i++){
            
            for(let j=n;j<array2.length;j++){
                if(array1[i]==array2[j]){
                    count++
                    n=j+1
                    break;
                }
            }
        }
        if(maxlength<count) maxlength=count
    }

    return maxlength

  };


// 입출력 예시
  
  let output = LCS('abcd', 'aceb');
  console.log(output); // --> 2 ('ab' or 'ac')
  
  output = LCS('acaykp', 'capcak');
  console.log(output); // --> 4 ('acak')
  