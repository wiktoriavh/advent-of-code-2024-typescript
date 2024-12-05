import { readdir } from "node:fs/promises";
import { extname } from "path";

type Solution = {
  part1: string;
  part2: string;
};

console.log("Advent of Code 2024");

const inputPath = "./inputs/{{day}}.txt";
const solutionPath = "../src/{{day}}.ts";

export async function solveDay(day: number): Promise<Solution> {
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

async function runAllDays(): Promise<void> {
  try {
    const files = await readdir("./src");
    const fileNames = files
      .map((file) => Number(file.replace(extname(file), "")))
      .sort((a, b) => a - b);

    const days: Record<number, { part1: string; part2: string; time: number }> =
      {};

    await Promise.all(
      fileNames.map(async (day) => {
        if (Number.isNaN(day)) return;
        const start = performance.now();
        const result = await solveDay(day);
        const end = performance.now();

        days[day] = { ...result, time: end - start };
      })
    );

    Object.keys(days)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach((day) => {
        const result = days[day];
        console.log(`🎄 Day ${day} 🎄 \x1b[90m[${result.time.toFixed(
          2
        )} ms]\x1b[0m
        Part 1: \x1b[32m${result.part1}\x1b[0m
        Part 2: \x1b[31m${result.part2}\x1b[0m`);
      });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
}

await runAllDays();
