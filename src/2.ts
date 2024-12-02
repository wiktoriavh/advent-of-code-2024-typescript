function solution(input: string): { part1: string; part2: string } {
  const lines = input.split("\n").map((line) => line.split(/\s+/));

  let result1 = 0;

  lines.forEach((line) => {
    let p1 = 0;
    let p2 = 1;
    let isIncreasing = null;
    let isSafe = false;

    while (p2 < line.length) {
      const left = Number(line[p1]);
      const right = Number(line[p2]);

      const diff = Math.abs(left - right);
      if (diff >= 1 && diff <= 3) {
        // safe
        if (isIncreasing === null) {
          isIncreasing = left < right;
        }
        if (isIncreasing === left < right) {
          isSafe = true;
          p1++;
          p2++;
        } else {
          isSafe = false;
          break;
        }
      } else {
        isSafe = false;
        break;
      }
    }

    if (isSafe) {
      result1++;
    }
  });

  let result2 = 0;

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
