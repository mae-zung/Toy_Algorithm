// longestPalindrome

// 문자열을 입력받아 부분 문자열 중 가장 긴 (palindrome)*의 길이를 리턴해야 합니다.
// palindrome: 데이터를 앞에서 뒤로 또는 뒤에서 앞으로 조회한 결과가 동일한 경우


// First Try

// let longestPalindrome = function (str) {

//     let array = str.split('')
//     let length = 0
//     let result = 0

//     const check = (i,j)=>{
//         if(array.slice(i,j+1).join('')==array.slice(i,j+1).reverse().join('')){
//             return j-i+1
//         } else return 0
//     }
//     for(let i=0;i<array.length;i++){
//         for(let j=i+1;j<array.length;j++){
//             if(array[i]==array[j]) length=check(i,j)
//             if(length>result) result = length;
//         }
//     }
//     return result
//   };

// Second Try

    let longestPalindrome = function (str) {
        let array = str.split('')
        let maxLen = 0

        for(let max=3; max<=array.length;max++){
            for(let start = 0; start<=array.length-max;start++){
                let end = start+max-1
                if(array.slice(start,end+1).join('')==array.slice(start,end+1).reverse().join('')){
                    maxLen = max
                }

            }
            
        }

        return maxLen
    }


  // 입출력 예시

//   let str = 'My dad is a racecar athlete';
//   let result = longestPalindrome(str);
//   console.log(result); // --> 11 ('a racecar a')
  
  str = 'kdadk';
  result = longestPalindrome(str);
  console.log(result); // --> 5 ('kdadk')