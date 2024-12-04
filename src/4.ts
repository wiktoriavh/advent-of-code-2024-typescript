function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const matrix = input.split("\n").map((row) => row.split(""));

  let px = 0;
  let py = 0;

  while (py < matrix.length && px < matrix[py].length) {
    const char = matrix[py][px];
    if (char === "X") {
      result1 += xmasRight(matrix, px, py, px);
      result1 += xmasDown(matrix, px, py, py);
      result1 += xmasLeft(matrix, px, py, px);
      result1 += xmasUp(matrix, px, py, py);
      result1 += xmasRightDown(matrix, px, py, px, py);
      result1 += xmasLeftDown(matrix, px, py, px, py);
      result1 += xmasLeftUp(matrix, px, py, px, py);
      result1 += xmasRightUp(matrix, px, py, px, py);
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

function xmasRight(
  matrix: string[][],
  nextX: number,
  nextY: number,
  px: number
) {
  if (checkRight(matrix, nextX, nextY, "M")) {
    nextX = px + 1;
    if (checkRight(matrix, nextX, nextY, "A")) {
      nextX = px + 2;
      if (checkRight(matrix, nextX, nextY, "S")) {
        return 1;
      }
    }
  }
  return 0;
}

function xmasDown(
  matrix: string[][],
  nextX: number,
  nextY: number,
  py: number
) {
  if (checkDown(matrix, nextX, nextY, "M")) {
    nextY = py + 1;
    if (checkDown(matrix, nextX, nextY, "A")) {
      nextY = py + 2;
      if (checkDown(matrix, nextX, nextY, "S")) {
        return 1;
      }
    }
  }
  return 0;
}

function xmasLeft(
  matrix: string[][],
  nextX: number,
  nextY: number,
  px: number
) {
  if (checkLeft(matrix, nextX, nextY, "M")) {
    nextX = px - 1;
    if (checkLeft(matrix, nextX, nextY, "A")) {
      nextX = px - 2;
      if (checkLeft(matrix, nextX, nextY, "S")) {
        return 1;
      }
    }
  }
  return 0;
}

function xmasUp(matrix: string[][], nextX: number, nextY: number, py: number) {
  if (checkUp(matrix, nextX, nextY, "M")) {
    nextY = py - 1;
    if (checkUp(matrix, nextX, nextY, "A")) {
      nextY = py - 2;
      if (checkUp(matrix, nextX, nextY, "S")) {
        return 1;
      }
    }
  }
  return 0;
}

function xmasRightDown(
  matrix: string[][],
  nextX: number,
  nextY: number,
  px: number,
  py: number
) {
  if (checkRightDown(matrix, nextX, nextY, "M")) {
    nextX = px + 1;
    nextY = py + 1;
    if (checkRightDown(matrix, nextX, nextY, "A")) {
      nextX = px + 2;
      nextY = py + 2;
      if (checkRightDown(matrix, nextX, nextY, "S")) {
        return 1;
      }
    }
  }
  return 0;
}

function xmasLeftDown(
  matrix: string[][],
  nextX: number,
  nextY: number,
  px: number,
  py: number
) {
  if (checkLeftDown(matrix, nextX, nextY, "M")) {
    nextX = px - 1;
    nextY = py + 1;
    if (checkLeftDown(matrix, nextX, nextY, "A")) {
      nextX = px - 2;
      nextY = py + 2;
      if (checkLeftDown(matrix, nextX, nextY, "S")) {
        return 1;
      }
    }
  }
  return 0;
}

function xmasLeftUp(
  matrix: string[][],
  nextX: number,
  nextY: number,
  px: number,
  py: number
) {
  if (checkLeftUp(matrix, nextX, nextY, "M")) {
    nextX = px - 1;
    nextY = py - 1;
    if (checkLeftUp(matrix, nextX, nextY, "A")) {
      nextX = px - 2;
      nextY = py - 2;
      if (checkLeftUp(matrix, nextX, nextY, "S")) {
        return 1;
      }
    }
  }
  return 0;
}

function xmasRightUp(
  matrix: string[][],
  nextX: number,
  nextY: number,
  px: number,
  py: number
) {
  if (checkRightUp(matrix, nextX, nextY, "M")) {
    nextX = px + 1;
    nextY = py - 1;
    if (checkRightUp(matrix, nextX, nextY, "A")) {
      nextX = px + 2;
      nextY = py - 2;
      if (checkRightUp(matrix, nextX, nextY, "S")) {
        return 1;
      }
    }
  }
  return 0;
}

function checkRight(
  matrix: string[][],
  px: number,
  py: number,
  letter: string
): boolean {
  return px + 1 < matrix[py].length && matrix[py][px + 1] === letter;
}

function checkDown(
  matrix: string[][],
  px: number,
  py: number,
  letter: string
): boolean {
  return py + 1 < matrix.length && matrix[py + 1][px] === letter;
}

function checkLeft(
  matrix: string[][],
  px: number,
  py: number,
  letter: string
): boolean {
  return px - 1 >= 0 && matrix[py][px - 1] === letter;
}

function checkUp(
  matrix: string[][],
  px: number,
  py: number,
  letter: string
): boolean {
  return py - 1 >= 0 && matrix[py - 1][px] === letter;
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
