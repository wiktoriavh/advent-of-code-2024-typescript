type Solution = {
  part1: string;
  part2: string;
};

console.log("Advent of Code 2024");

const inputPath = "./inputs/{{day}}.txt";
const solutionPath = "./{{day}}.ts";

export async function solveDay(): Promise<Solution> {
  const day = 1;
  if (!day) {
    throw new Error("DAY environment variable is not set.");
  }
  console.log("Solving day: ", day);
  try {
    const input = await Bun.file(
      inputPath.replace("{{day}}", String(day))
    ).text();
    const dayFunction = await import(
      solutionPath.replace("{{day}}", String(day))
    );
    const result = await dayFunction.default(input);
    return result as Solution;
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
}

const result = await solveDay();
console.log(result);
