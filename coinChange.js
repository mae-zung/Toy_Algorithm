// 다양한 동전들을 가지고 특정 금액을 만들 수 있는 모든 경우의 수를 리턴해야 합니다.
// 예를 들어, 100원, 500원짜리 동전을 가지고 1,000원을 만들 수 있는 방법은 총 3가지 입니다.
// 100원 10개, 100원 5개 + 500원 1개, 500원 2개

const coinChange = function (total, coins) {

    let count = 0

    const recursive = (total, coins) => {

        for(let i=0; i<=total/coins[0];i++){

            if(coins.length==1){
                if(i*coins[0]==total) {
                    count++ 
                }
            }else{
                let totalNum = total-coins[0]*i
                recursive(totalNum, coins.slice(1))
            }
        }

        return
    }
    recursive(total, coins)
    return count
  
};

let total = 10;
let coins = [1, 5];
let output = coinChange(total, coins);
console.log(output); // --> 3

total = 4;
coins = [1, 2, 3];
output = coinChange(total, coins);
console.log(output); // --> 4 ([1, 1, 1, 1], [1, 1, 2], [2, 2], [1, 3])

