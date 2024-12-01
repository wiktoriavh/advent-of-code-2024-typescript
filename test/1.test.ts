import { expect, test, describe } from "bun:test";
import solution from "../src/1";

const EXAMPLE_1 = `3   4
4   3
2   5
1   3
3   9
3   3`;
const RESULT_1 = "11";

const EXAMPLE_2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
const RESULT_2 = "281";

describe("Day 1", () => {
  test("Part 1", () => {
    const result = solution(EXAMPLE_1);
    expect(result.part1).toBe(RESULT_1);
  });

  test("Part 2", () => {
    const result = solution(EXAMPLE_2);
    expect(result.part2).toBe(RESULT_2);
  });
});
