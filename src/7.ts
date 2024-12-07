type Operator = "+" | "*";

function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const lines = input.split("\n").map((line) => {
    const [result, nums] = line.split(": ");
    return {
      result: parseInt(result),
      nums: nums.split(" ").map((num) => parseInt(num)),
    };
  });

  const correctResults = new Map<
    ReturnType<typeof crypto.randomUUID>,
    number
  >();

  lines.forEach((line) => {
    const { result, nums } = line;
    const id = crypto.randomUUID();

    function calculate(alpha: number, beta: number, operator: Operator) {
      return eval(`${alpha} ${operator} ${beta}`);
    }

    const foo = (a: number, b: number, index: number) => {
      if (index === nums.length) {
        return;
      }

      const alpha = calculate(a, b, "+");
      const beta = calculate(a, b, "*");

      if (alpha === result && index === nums.length - 1) {
        correctResults.set(id, alpha);
        return;
      } else if (beta === result && index === nums.length - 1) {
        correctResults.set(id, beta);
        return;
      } else {
        foo(alpha, nums[index + 1], index + 1);
        foo(beta, nums[index + 1], index + 1);
      }
    };

    foo(nums[0], nums[1], 1);
  });

  const sum = (acc: number, curr: number) => acc + curr;
  const values = Array.from(correctResults.values());
  result1 = values.reduce(sum, 0);

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
