import { readdir } from "node:fs/promises";
import { extname } from "path";

type Solution = {
  part1: string;
  part2: string;
};

console.log("Advent of Code 2024");

const inputPath = "./inputs/{{day}}.txt";
const solutionPath = "./{{day}}.ts";

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
    const files = await readdir(import.meta.dir);
    const fileNames = files
      .map((file) => Number(file.replace(extname(file), "")))
      .sort((a, b) => a - b);

    fileNames.forEach(async (day) => {
      if (Number.isNaN(day)) return;
      const start = performance.now();
      const result = await solveDay(day);
      const end = performance.now();
      console.log(`🎄 Day ${day} 🎄 \x1b[90m[${(end - start).toFixed(
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
