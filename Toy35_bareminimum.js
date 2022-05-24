// 아래와 같이 정의된 ugly numbers 중 n번째 수를 리턴해야 합니다.

// ugly number는 2, 3, 5로만 나누어 떨어지는 수이다.
// 1은 1번째 ugly number 이다.
// 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, ...

const uglyNumbers = function (n) {

    let uglies = [1,2,3,4,5]
    let i = 6
   
   while(uglies.length<n){
       if(uglies.includes(i/2)||uglies.includes(i/3)||uglies.includes(i/5)){        
           uglies.push(i)
        }
       i++
   }
   return uglies[n-1]
};

let result = uglyNumbers(15);
console.log(result); // --> 1

// result = uglyNumbers(3);
// console.log(result); // --> 3