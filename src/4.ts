function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const matrix = input.split("\n").map((row) => row.split(""));

  let px = 0;
  let py = 0;

  while (py < matrix.length && px < matrix[py].length) {
    const char = matrix[py][px];
    if (char === "X") {
      result1 += checkXmasDirection(matrix, px, py, 1, 0);
      result1 += checkXmasDirection(matrix, px, py, 0, 1);
      result1 += checkXmasDirection(matrix, px, py, -1, 0);
      result1 += checkXmasDirection(matrix, px, py, 0, -1);
      result1 += checkXmasDirection(matrix, px, py, 1, 1);
      result1 += checkXmasDirection(matrix, px, py, -1, 1);
      result1 += checkXmasDirection(matrix, px, py, -1, -1);
      result1 += checkXmasDirection(matrix, px, py, 1, -1);
    }
    if (px + 1 < matrix[py].length) {
      px++;
    } else {
      px = 0;
      py++;
    }
  }

  let px2 = 0;
  let py2 = 0;

  while (py2 < matrix.length && px2 < matrix[py2].length) {
    const char = matrix[py2][px2];
    if (char === "A" && masAsX(matrix, px2, py2)) {
      result2++;
    }
    if (px2 + 1 < matrix[py2].length) {
      px2++;
    } else {
      px2 = 0;
      py2++;
    }
  }

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;

function masAsX(matrix: string[][], nextX: number, nextY: number) {
  let crosses = 0;
  if (
    checkRightUp(matrix, nextX, nextY, "S") &&
    checkLeftDown(matrix, nextX, nextY, "M")
  ) {
    crosses++;
  }

  if (
    checkRightUp(matrix, nextX, nextY, "M") &&
    checkLeftDown(matrix, nextX, nextY, "S")
  ) {
    crosses++;
  }

  if (
    checkRightDown(matrix, nextX, nextY, "S") &&
    checkLeftUp(matrix, nextX, nextY, "M")
  ) {
    crosses++;
  }

  if (
    checkRightDown(matrix, nextX, nextY, "M") &&
    checkLeftUp(matrix, nextX, nextY, "S")
  ) {
    crosses++;
  }

  return crosses === 2;
}

function checkXmasDirection(
  matrix: string[][],
  px: number,
  py: number,
  directionX: number,
  directionY: number
): number {
  const xmas = ["M", "A", "S"];
  let newY = py + directionX;
  let newX = px + directionY;

  let pointer = 0;
  while (pointer < xmas.length) {
    if (
      newY >= 0 &&
      newY < matrix.length &&
      newX >= 0 &&
      newX < matrix[newY].length
    ) {
      if (matrix[newY][newX] === xmas[pointer]) {
        pointer++;
        newY += directionX;
        newX += directionY;
        continue;
      }
    }
    break;
  }

  return pointer === xmas.length ? 1 : 0;
}

function checkRightDown(
  matrix: string[][],
  px: number,
  py: number,
  letter: string
): boolean {
  return (
    px + 1 < matrix[py].length &&
    py + 1 < matrix.length &&
    matrix[py + 1][px + 1] === letter
  );
}

function checkLeftDown(
  matrix: string[][],
  px: number,
  py: number,
  letter: string
): boolean {
  return (
    px - 1 >= 0 && py + 1 < matrix.length && matrix[py + 1][px - 1] === letter
  );
}

function checkLeftUp(
  matrix: string[][],
  px: number,
  py: number,
  letter: string
): boolean {
  return px - 1 >= 0 && py - 1 >= 0 && matrix[py - 1][px - 1] === letter;
}

function checkRightUp(
  matrix: string[][],
  px: number,
  py: number,
  letter: string
): boolean {
  return (
    px + 1 < matrix[py].length &&
    py - 1 >= 0 &&
    matrix[py - 1][px + 1] === letter
  );
}
