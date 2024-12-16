import { to2D } from "../utils/to2d";

function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const maze = to2D(input);
  const REINDEER = "S";
  const EXIT = "E";
  const WALL = "#";
  const POINTS = {
    foward: 1,
    turn: 1000,
  };

  const reindeerPosition: { x: number; y: number } = maze.reduce(
    (acc, row, y) => {
      const x = row.indexOf(REINDEER);
      if (x !== -1) {
        acc = { x, y };
      }
      return acc;
    },
    { x: -1, y: -1 }
  );

  function heuristic(a: { x: number; y: number }, b: { x: number; y: number }) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  }

  function aStar(
    start: { x: number; y: number },
    goal: { x: number; y: number }
  ) {
    const directions = [
      { x: 0, y: 1 }, // down
      { x: 1, y: 0 }, // right
      { x: 0, y: -1 }, // up
      { x: -1, y: 0 }, // left
    ];

    // calculate the cost of moving from the start to the end
  }

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
