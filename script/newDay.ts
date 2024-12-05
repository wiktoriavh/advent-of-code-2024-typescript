import { promises as fs } from "fs";
import path from "path";

const createNewDay = async (day: number) => {
  const dayString = day.toString().padStart(2, "0");
  const inputPath = `./inputs/${dayString}.txt`;
  const solutionPath = `./src/${dayString}.ts`;
  const testPath = `./test/${dayString}.test.ts`;

  const templateDayPath = path.resolve(__dirname, "./template/day.txt");
  const templateDayContent = await fs.readFile(templateDayPath, "utf-8");
  await fs.writeFile(solutionPath, templateDayContent);

  const templateTestPath = path.resolve(__dirname, "./template/test.txt");
  const templateTestContent = await fs.readFile(templateTestPath, "utf-8");
  const updatedTestContent = templateTestContent.replace(/{{day}}/g, dayString);
  await fs.writeFile(testPath, updatedTestContent);

  await fs.writeFile(inputPath, "");
};

const dayArg = process.argv[2];
if (!dayArg) {
  console.error("Please provide a day number as an argument.");
  process.exit(1);
}

const day = parseInt(dayArg, 10);
if (isNaN(day) || day < 1 || day > 25) {
  console.error("Please provide a valid day number between 1 and 25.");
  process.exit(1);
}

createNewDay(day);
