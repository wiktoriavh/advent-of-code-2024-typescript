function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;
  const regex = /X[+=](\d+),\sY[+=](\d+)/g;

  const lines = input
    .split("\n\n")
    .map((line) => line.split("\n"))
    .reduce((acc, curr) => {
      const [buttonA, buttonB, prize] = curr;
      const buttonAGroup = buttonA.matchAll(regex);
      const buttonBGroup = buttonB.matchAll(regex);
      const prizeGroup = prize.matchAll(regex);
      const xA = buttonAGroup.next().value;
      const xB = buttonBGroup.next().value;
      const xP = prizeGroup.next().value;
      const obj = {
        buttonA: {
          x: Number(xA![1]),
          y: Number(xA![2]),
        },
        buttonB: {
          x: Number(xB![1]),
          y: Number(xB![2]),
        },
        prize: {
          x: Number(xP![1]),
          y: Number(xP![2]),
        },
      };
      acc.push(obj);
      return acc;
    }, [] as Record<string, { x: number; y: number }>[]);

  lines.forEach((line) => {
    const { buttonA, buttonB, prize } = line;
    const distanceA = manhattanDistance(buttonA.x, buttonA.y, prize.x, prize.y);
    const distanceB = manhattanDistance(buttonB.x, buttonB.y, prize.x, prize.y);
    result1 += distanceA + distanceB;
    console.log("----");
  });

  console.log(manhattanDistance(1, 1, 2, 2));

  function manhattanDistance(x1: number, y1: number, x2: number, y2: number) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
