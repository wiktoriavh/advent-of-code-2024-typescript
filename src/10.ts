function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const lines = input.split("\n").map((line) => line.split("").map(Number));

  const trails = new Map<string, Set<string>>();
  const trails2 = new Map<string, string[]>();

  function startHike(x: number, y: number, key: string, currentHeight = 0) {
    const directions = [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
      { x: -1, y: 0 },
    ];

    for (const { x: dx, y: dy } of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newY >= 0 &&
        newY < lines.length &&
        newX >= 0 &&
        newX < lines[newY].length
      ) {
        const adjacentValue = lines[newY][newX];

        if (adjacentValue === 9 && adjacentValue === currentHeight + 1) {
          const trail = trails.get(key)!;
          const trail2 = trails2.get(key)!;
          trail.add(`${newY},${newX}`);
          trail2.push(`${newY},${newX}`);
        } else if (adjacentValue === currentHeight + 1) {
          startHike(newX, newY, key, currentHeight + 1);
        }
      }
    }
  }

  for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[y].length; x++) {
      if (lines[y][x] === 0) {
        const key = `${y},${x}`;
        const trail = trails.get(key) ?? new Set();
        trails.set(key, trail);
        const trail2 = trails2.get(key) ?? [];
        trails2.set(key, trail2);
        startHike(x, y, key);

        continue;
      }

      const key = `${y},${x}`;
      trails.set(key, new Set());
    }
  }

  for (const trail of trails.values()) {
    result1 += trail.size;
  }

  for (const trail of trails2.values()) {
    if (trail.length) {
      result2 += trail.length;
    }
  }

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
