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
  let result = 0;
  while (index < lines[0].length) {
    const left = Number(lines[0][index]);
    const right = Number(lines[1][index]);

    const diff = Math.abs(left - right);
    result += diff;
    index++;
  }

  return {
    part1: result.toString(),
    part2: "",
  };
}

export default solution;
