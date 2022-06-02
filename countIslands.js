//countIslands

// 세로와 가로의 길이가 각각 R, M인 2차원 R X M 배열 grid가 주어졌을 때,
// '1'은 땅을 의미하고 '0' 은 물을 의미합니다.
// 주어진 2차원 배열에 존재하는 섬의 개수를 리턴해야 합니다.

const countIslands = function (grid) {
  let count = 0;

  const checkChange = (i, j) => {
    grid[i][j] = "0";
    if (i + 1 < grid.length && grid[i + 1][j] == 1) checkChange(i + 1, j);
    if (j + 1 < grid[i].length && grid[i][j + 1] == 1) checkChange(i, j + 1);
    if (i - 1 >= 0 && grid[i - 1][j] == 1) checkChange(i - 1, j);
    if (j - 1 >= 0 && grid[i][j - 1] == 1) checkChange(i, j - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        count++;
        checkChange(i, j);
        console.log(grid);
      }
    }
  }
  return count;
};

// 입출력 예시

let grid = [
  ["0", "1", "1", "1"],
  ["0", "1", "1", "1"],
  ["1", "1", "0", "0"],
];
let result = countIslands(grid);
console.log(result); // --> 1

grid = [
  ["0", "1", "1", "1", "0"],
  ["0", "1", "0", "0", "0"],
  ["0", "0", "0", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "1", "0"],
];
result = countIslands(grid);
console.log(result); // --> 3
