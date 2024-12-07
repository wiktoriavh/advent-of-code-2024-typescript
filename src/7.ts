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

  const operators: Operator[] = ["*", "+"];
  const correctResults: number[] = [];

  lines.forEach((line) => {
    const { result, nums } = line;
    const usedOperators = new Set<string>();

    let inputOperations: string = "";

    function getOperator(operatorIndex: number, loop: number = 0): Operator {
      let index = operatorIndex;
      let operator = operators[index];
      if (
        operator === "*" &&
        usedOperators.size === Math.pow(2, nums.length - 1) / 2 &&
        loop === 0
      ) {
        console.log("4 times", ...usedOperators);
        index = (operatorIndex + 1) % 2;
        operator = operators[index];
      }
      const createdOperations = `${inputOperations}${operator}`;
      if (createdOperations === "++") {
        console.log("createdOperations", createdOperations);
      }
      if (usedOperators.has(createdOperations)) {
        index = (operatorIndex + 1) % 2;
        return getOperator(index, loop + 1);
      } else {
        inputOperations = createdOperations;
        return operator;
      }
    }

    function calculate(alpha: number, beta: number, operator: Operator) {
      return eval(`${alpha} ${operator} ${beta}`);
    }

    let prev = nums[0];
    let p1 = 1;
    const lenghtOfOperations = nums.length - 1;
    const variantsOfOperations = Math.pow(2, lenghtOfOperations);
    console.log("-----");

    while (p1 < nums.length) {
      if (variantsOfOperations === usedOperators.size) {
        inputOperations = "";
        break;
      }
      let operator = "*";
      try {
        operator = getOperator(0);
      } catch (error) {
        break;
      }

      const num = nums[p1];
      prev = eval(`${prev} ${operator} ${num}`);

      if (prev > result) {
        prev = nums[0];
        p1 = 1;
        usedOperators.add(inputOperations);
        inputOperations = "";
        continue;
      }

      if (prev === result && inputOperations.length === lenghtOfOperations) {
        correctResults.push(result);
        inputOperations = "";
        break;
      }

      if (p1 === nums.length - 1) {
        prev = nums[0];
        p1 = 1;
        usedOperators.add(inputOperations);
        inputOperations = "";
      }

      if (inputOperations.length === lenghtOfOperations) {
        inputOperations = "";
        prev = nums[0];
        p1 = 1;
        usedOperators.add(inputOperations);
      }

      p1++;
    }
  });

  console.log(correctResults);
  result1 = correctResults.reduce((acc, curr) => acc + curr, 0);

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
