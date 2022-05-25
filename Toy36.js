//좌표평면 상의 다양한 점들을 입력받아 가장 가까운 두 점 사이의 거리를 리턴해야 합니다.

// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
    const yDiff = p2[0] - p1[0];
    const xDiff = p2[1] - p1[1];
    return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
}

// [ First Try ]
  
//   const closestPairOfPoints = function (points) {
//     // TODO: 여기에 코드를 작성합니다.

//     let superMinDis = calculateDistance(points[0],points[1])

//     for(let i=0;i<points.length-1;i++){
//         //console.log(i)
//         let minDis = calculateDistance(points[i],points[i+1])
//         for(let j=i+2;j<points.length;j++){
//             // console.log(i+','+j)
//             let distance = calculateDistance(points[i],points[j])
//             if(minDis>distance) minDis = distance
//         }
//         if(superMinDis>minDis) superMinDis = minDis
//     }

//     return Math.round(superMinDis*100)

//   };




// [ Second Try ]
  
//   const closestPairOfPoints = function (points) {

//     let superMinDis = calculateDistance(points[0],points[1])

//     for(let i=0;i<points.length-1;i++){
//         //console.log(i)
//         let minDis = recursive(points[i], points.slice(i+1))
//         if(superMinDis>minDis) superMinDis = minDis
//     }
//     return Math.round(superMinDis*100)
//   };

//   function recursive (firstEle, points){

//     if(points.length==1) {
//         return calculateDistance(firstEle, points[0])
//     }else{
//         let mid = Math.floor(points.length/2)
//         // console.log(points.length) --> 2
//         // console.log(mid) --> 1
//         let left = points.slice(0,mid) // [1,3]
//         let right = points.slice(mid) // [2,2]
//         let leftValue = recursive(firstEle, left)
//         let rightValue = recursive(firstEle, right)
        
//         return Math.min(leftValue,rightValue)
//         // return 1
//     }
//   }

  // [ Third Try ]
  
  const closestPairOfPoints = function (points) {

    let distances = []
    for(let i=0;i<points.length-1;i++){
        for(let j=i+1;j<points.length;j++){
            distances.push(calculateDistance(points[i],points[j]))
        } 
    }

    function recursive (array, left, last){
        if(last-left==1||last==left){ 
            return Math.min(array[last], array[left])
        }
        else{
            let mid=Math.round((left+last)/2) //2
            let leftValue = recursive(array,left,mid) // (0,2)
            let rightValue = recursive(array,mid+1,last) //(3,5)
    
            return Math.min(leftValue, rightValue)
        }
    }

    let result = recursive(distances,0,distances.length-1) // (0,5)
    return Math.round(result*100)
  };

  


  //입출력 예시
  let points = [
    [0, 0],
    [1, 3],
    [2, 2],
  ];
  let output = closestPairOfPoints(points);
  console.log(output); // --> 141 ([1, 3], [2, 2])
  /*
  3 |  x
  2 |     x
  1 |       
  0 | x 
  ------------
      0 1 2 3 
  */
  
  points = [[0, 100], [3, 4], [58, 34], [22, 35], [121, 132], [140, 153]]
  output = closestPairOfPoints(points);
  console.log(output); // --> 100 ([0, 0], [0, 1])
  /*
  5 | x
  4 | 
  3 | x
  2 |     
  1 | x     
  0 | x 
  ------------
      0 1 2 3 
  */
  