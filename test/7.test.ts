import { expect, test, describe } from "bun:test";
import solution from "../src/7";

const EXAMPLE_1 = `292: 11 6 16 20`;
const RESULT_1 = "3749";

const EXAMPLE_2 = EXAMPLE_1;
const RESULT_2 = "0";

describe("Day 7", () => {
  test("Part 1", () => {
    const result = solution(EXAMPLE_1);
    expect(result.part1).toBe(RESULT_1);
  });

  test("Part 2", () => {
    const result = solution(EXAMPLE_2);
    expect(result.part2).toBe(RESULT_2);
  });
});
