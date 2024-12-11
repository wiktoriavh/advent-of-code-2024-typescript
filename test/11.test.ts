import { expect, test, describe } from "bun:test";
import solution from "../src/11";

const EXAMPLE_1 = `125 17`;
const RESULT_1 = "55312";

const EXAMPLE_2 = EXAMPLE_1;
const RESULT_2 = "31";

describe("Day 11", () => {
  test("Part 1", () => {
    const result = solution(EXAMPLE_1);
    expect(result.part1).toBe(RESULT_1);
  });

  test("Part 2", () => {
    const result = solution(EXAMPLE_2);
    expect(result.part2).toBe(RESULT_2);
  });
});
