import { expect, test, describe } from "bun:test";
import solution from "../src/12";

const EXAMPLE_1 = `AAAA
BBCD
BBCC
EEEC`;
const EXAMPLE_1_2 = `OOOOO
OXOXO
OOOOO
OXOXO
OOOOO`;
const EXAMPLE_1_3 = `RRRRIICCFF
RRRRIICCCF
VVRRRCCFFF
VVRCCCJFFF
VVVVCJJCFE
VVIVCCJJEE
VVIIICJJEE
MIIIIIJJEE
MIIISIJEEE
MMMISSJEEE`;
const RESULT_1 = "140";
const RESULT_1_2 = "772";
const RESULT_1_3 = "1930";

const EXAMPLE_2 = EXAMPLE_1;
const RESULT_2 = "0";

describe("Day 12", () => {
  test("Part 1 Example 1", () => {
    const result = solution(EXAMPLE_1);
    expect(result.part1).toBe(RESULT_1);
  });

  test("Part 1 Example 2", () => {
    const result = solution(EXAMPLE_1_2);
    expect(result.part1).toBe(RESULT_1_2);
  });

  test("Part 1 Example 3", () => {
    const result = solution(EXAMPLE_1_3);
    expect(result.part1).toBe(RESULT_1_3);
  });

  test("Part 2", () => {
    const result = solution(EXAMPLE_2);
    expect(result.part2).toBe(RESULT_2);
  });
});
