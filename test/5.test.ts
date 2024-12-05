import { expect, test, describe } from "bun:test";
import solution from "../src/5";

const EXAMPLE_1 = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;
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
