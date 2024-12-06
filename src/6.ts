import { visitParameterList } from "typescript";

type Tile = "." | "#" | "^" | "v" | "<" | ">";
type Direction = "^" | "v" | "<" | ">";
type Move = { x: number; y: number; nextDirection: Direction };

function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const lines = input.split("\n").map((line) => line.split("")) as Tile[][];

  const directions = new Set(["^", ">", "v", "<"]);

  const move: Record<Direction, Move> = {
    "^": { x: 0, y: -1, nextDirection: ">" },
    ">": { x: 1, y: 0, nextDirection: "v" },
    v: { x: 0, y: 1, nextDirection: "<" },
    "<": { x: -1, y: 0, nextDirection: "^" },
  };

  let x = 0;
  let y = 0;
  const guard = { x: -1, y: -1 };

  while (true) {
    if (guard.x === x && guard.y === y) {
      break;
    }

    const current = lines[y][x];
    if (directions.has(current)) {
      guard.x = x;
      guard.y = y;
    }

    if (x === lines[y].length - 1) {
      x = 0;
      y++;
      continue;
    } else {
      x++;
    }

    if (x === lines[y].length - 1 && y === lines.length - 1) {
      break;
    }
  }

  x = guard.x;
  y = guard.y;

  const visited = new Set<string>();
  visited.add(`${x},${y}`);
  let inRoom = true;
  let currentDirection = lines[y][x] as Direction;

  while (inRoom) {
    const movement = move[currentDirection as Direction];
    const newY = y + movement.y;
    const newX = x + movement.x;

    if (
      newY < 0 ||
      newY >= lines.length ||
      newX < 0 ||
      newX >= lines[newY].length
    ) {
      inRoom = false;
      visited.add(`${x},${y}`);
      break;
    }

    const nextTile = lines[newY][newX];

    if (nextTile === "#") {
      currentDirection = movement.nextDirection;
      continue;
    }

    visited.add(`${x},${y}`);
    x += movement.x;
    y += movement.y;
  }

  console.log(visited.size);

  result1 = visited.size;

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
