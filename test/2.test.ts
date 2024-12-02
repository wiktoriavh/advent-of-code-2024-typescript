import { expect, test, describe } from "bun:test";
import solution from "../src/2";

const EXAMPLE_1 = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
const RESULT_1 = "2";

const EXAMPLE_2 = EXAMPLE_1;
const RESULT_2 = "31";

describe("Day 2", () => {
  test("Part 1", () => {
    const result = solution(EXAMPLE_1);
    expect(result.part1).toBe(RESULT_1);
  });

  test.skip("Part 2", () => {
    const result = solution(EXAMPLE_2);
    expect(result.part2).toBe(RESULT_2);
  });
});
