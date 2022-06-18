function test2(n, m) {
    // TODO: 여기에 코드를 작성하세요.
   
    const arr=[];
    for(let i=1;i<=n;i++){
      arr.push(i)
    }

    console.log('-----------------------------')
    console.log(`arr: ${arr}, m: ${m}`)

    function recursion(arr,m){

        const results=[];
        if(m===1) return arr.map((el)=>[el]);
    

        arr.forEach((fixed,index,origin)=>{
            console.log(`fixed: ${arr}, index: ${index}, origin: ${origin}`)

            const rest = [...origin.slice(0,index),...origin.slice(index+1)];
            console.log(`rest: ${rest}`)

            const permutations = recursion(rest,m-1);
            console.log(`permutations: ${permutations}`)

            const attached = permutations.map((el)=>[fixed, ...el]);
            console.log(`attached: ${attached}`)

            results.push(...attached);
            console.log(`results: ${results}`)
    })
    return results;
}
const output = recursion(arr,m)
const arr3 = output[0]
let arr2=[]
let num=0

for(let i=0;i<output.length;i++){
    for(let j=0;j<arr3.length;j++){
        num+=output[i][j]*Math.pow(10,arr3.length-j-1)
    }
    console.log(`num: ${num}`)
    arr2.push(num);
    num=0;
}

return arr2

};
    

// // n이 2이고 m이 1일 때, 1, 2를 사용하여 1의 길이에 맞는 바코드를 만들어야 합니다.
// const output1 = test2(2, 1);
// console.log(output1); // --> [1, 2]

// // n이 3이고 m이 2일 때, 1, 2, 3을 사용하여 2의 길이에 맞는 바코드를 만들어야 합니다.
// const output2 = test2(3, 2);
// console.log(output2); // --> [12, 13, 21, 23, 31, 32]

// n이 3고 m이 3일 때 1, 2, 3을 사용하여 3의 길이에 맞는 바코드를 만들어야 합니다.
const output3 = test2(3, 3);
console.log(output3); // --> [123, 132, 213, 231, 312, 321]