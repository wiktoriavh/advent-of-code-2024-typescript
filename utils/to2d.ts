export function to2D(input: string, split: string = ""): string[][] {
  return input.split("\n").map((line) => line.split(split));
}
