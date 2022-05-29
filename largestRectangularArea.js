const largestRectangularArea = function (histogram) {

    let width = histogram.length 
    let result = 0;
    let maxarea = 0;

    while(width>=1){
        for(let i=0;i<histogram.length;i++){ 
            let array = histogram.slice(i,i+width)
            let area = Math.min(...array)*width 
            if(maxarea<area) maxarea=area;
            if(i+width==histogram.length) break; 
        }
        if(result<maxarea) result = maxarea;
        width--
    }
    return result;

};



//입출력 예시
let histogram = [2, 1, 4, 5, 1, 3, 3];
let output = largestRectangularArea(histogram);
console.log(output); // --> 8

histogram = [6, 2, 5, 4, 5, 1, 6];
output = largestRectangularArea(histogram);
console.log(output); // --> 12
/*
6 | x           x
5 | x   x   x   x
4 | x   O O O   x
3 | x   O O O   x
2 | x x O O O   x
1 | x x O O O x x
------------------
*/