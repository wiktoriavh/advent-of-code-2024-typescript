function solution(input: string): { part1: string; part2: string } {
  const lines = input.split(/\s+/).reduce(
    (acc, item, index, orignalArray) => {
      if (index % 2 === 0) {
        acc[0].push(item);
      } else {
        acc[1].push(item);
      }
      if (index === orignalArray.length - 1) {
        acc[0].sort((a, b) => Number(a) - Number(b));
        acc[1].sort((a, b) => Number(a) - Number(b));
      }
      return acc;
    },
    [[], []] as string[][]
  );

  let index = 0;
  let result1 = 0;
  while (index < lines[0].length) {
    const left = Number(lines[0][index]);
    const right = Number(lines[1][index]);

    const diff = Math.abs(left - right);
    result1 += diff;
    index++;
  }

  let p1 = 0;
  let p2 = 0;
  const cache = new Map<number, number>();
  let result2 = 0;

  while (p1 < lines[0].length) {
    const left = Number(lines[0][p1]);
    const right = Number(lines[1][p2]);

    console.log(left, right);

    if (left > right) {
      p2++;
    }

    if (left === right) {
      cache.set(left, (cache.get(left) || 0) + 1);
      p2++;
    }
    if (left !== right && left < right) {
      const amount = cache.get(left) || 0;
      result2 += left * amount;
      p1++;
    }
  }

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
