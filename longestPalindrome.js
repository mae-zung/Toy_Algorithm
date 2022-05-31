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

// let longestPalindrome = function (str) {

//     let maxLen = 0

//     for(let max=3; max<=str.length;max++){
//         for(let start = 0; start<=array.length-max;start++){
//             let end = start+max-1
//             if(array.slice(start,end+1).join('')==array.slice(start,end+1).reverse().join('')){
//                 maxLen = max
//             }
//         }

//     }

//     return maxLen
// }

// 레퍼런스 코드 - naive

// function longestPalindrome(str) {
//   if (str.length <= 1) return str.length;

//   const checkPalindrome = function (str) {
//     const half = parseInt(str.length / 2);
//     for (let i = 0; i < half; i++) {
//       if (str[i] !== str[str.length - 1 - i]) return false;
//     }
//     return true;
//   };

//   // 길이가 긴 순서대로 부분 문자열을 만들어 검사한다.
//   for (let len = str.length; len >= 1; len--) {
//     // 길이 len인 부분 문자열들의 시작 인덱스를 구한다.
//     // 예. 전체 길이가 100이고, 부분 문자열의 길이가 10인 경우,
//     // 부분 문자열 (시작인덱스 ~ 마지막 인덱스)
//     //  90 ~ 99, 89 ~ 98, 88 ~ 97, ..., 1 ~ 10, 0 ~ 9
//     for (let startIdx = str.length - len; startIdx >= 0; startIdx--) {
//       // slice의 특성을 고려한 마지막 인덱스 + 1 을 저장
//       const endIdx = startIdx + len;
//       const subStr = str.substring(startIdx, endIdx);
//       const result = checkPalindrome(subStr);
//       if (result === true) return len;
//     }
//   }
// }

// 레퍼런스 코드 - Advanced

function longestPalindrome(str) {
  if (str.length < 2) return str.length;

  const LENGTH = str.length;
  const isPalindrome = Array(LENGTH)
    .fill(false)
    .map((_) => Array(LENGTH).fill(false));

  let maxLen = 1;
  // 길이가 1인 회문
  for (let i = 0; i < LENGTH; i++) isPalindrome[i][i] = true;

  // 길이가 2인 회문
  for (let i = 0; i < LENGTH - 1; i++) {
    if (str[i] === str[i + 1]) {
      isPalindrome[i][i + 1] = true;
      maxLen = 2;
    }
  }

  // 길이가 3 이상인 회문
  for (let len = 3; len <= LENGTH; len++) {
    for (let startIdx = 0; startIdx <= LENGTH - len; startIdx++) {
      const endIdx = startIdx + len - 1;
      if (
        isPalindrome[startIdx + 1][endIdx - 1] === true &&
        str[startIdx] === str[endIdx]
      ) {
        isPalindrome[startIdx][endIdx] = true;
        maxLen = len;
      }
    }
  }

  return maxLen;
}

// 입출력 예시

let str = "My dad is a racecar athlete";
let result = longestPalindrome(str);
console.log(result); // --> 11 ('a racecar a')

str = "kdadk";
result = longestPalindrome(str);
console.log(result); // --> 5 ('kdadk')
