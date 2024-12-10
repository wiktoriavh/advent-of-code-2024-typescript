import { expect, test, describe } from "bun:test";
import solution from "../src/10";

const EXAMPLE_1 = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;
const RESULT_1 = "36";

const EXAMPLE_2 = EXAMPLE_1;
const RESULT_2 = "81";

describe("Day 10", () => {
  test("Part 1", () => {
    const result = solution(EXAMPLE_1);
    expect(result.part1).toBe(RESULT_1);
  });

  test("Part 2", () => {
    const result = solution(EXAMPLE_2);
    expect(result.part2).toBe(RESULT_2);
  });
});
