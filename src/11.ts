function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const lines = input.split(" ");
  const totalBlinkAmount = 25;
  let stones: string[] = [...lines];

  for (let i = 0; i < totalBlinkAmount; i++) {
    stones = stones.flatMap((line) => {
      if (line === "0") {
        return "1";
      }
      if (line.length % 2 === 0) {
        const half = line.length / 2;
        const firstHalf = line.slice(0, half);
        const secondHalf = line.slice(half);
        return [Number(firstHalf).toString(), Number(secondHalf).toString()];
      }
      return (Number(line) * 2024).toString();
    });
  }

  result1 = stones.length;

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
