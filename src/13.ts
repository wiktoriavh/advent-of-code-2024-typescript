function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;
  const regex = /X[+=](\d+),\sY[+=](\d+)/g;

  const lines = input.split("\n\n").map((line) => {
    return line.match(/\d+/g);
  });

  lines.forEach((machine) => {
    const [ax, ay, bx, by, px, py] = machine!.map(Number);
    outer: for (let i = 1; i < 101; i++) {
      for (let j = 1; j < 101; j++) {
        const x = ax * i + bx * j;
        const y = ay * i + by * j;
        if (x === px && y === py) {
          result1 += i * 3 + j;
          break outer;
        }
      }
    }
  });

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
