function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const lines = input.split(" ");
  const totalBlinkAmount = 25;
  const totalBlinkAmount2 = 75;
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

  const cache = new Map<string, number>();

  function ans(stone: number, iter: number): number {
    if (iter === 0) {
      return 1;
    }

    if (cache.has(`${stone},${iter}`)) {
      return cache.get(`${stone},${iter}`)!;
    }

    let res = 0;

    if (stone === 0) {
      res = ans(1, iter - 1);
    } else if (stone.toString().length % 2 === 0) {
      const st = stone.toString();
      const half = st.length / 2;
      const firstHalf = st.slice(0, half);
      const secondHalf = st.slice(half);

      res = 0;
      res += ans(Number(firstHalf), iter - 1);
      res += ans(Number(secondHalf), iter - 1);
    } else {
      res = ans(stone * 2024, iter - 1);
    }
    cache.set(`${stone},${iter}`, res);

    return cache.get(`${stone},${iter}`)!;
  }

  lines.map(Number).forEach((line) => {
    result2 += ans(line, totalBlinkAmount2);
  });

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
