function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const lines = input.split("\n").map((line) => line.split(""));
  const regions = new Map<string, { area: Set<string>; fence: Set<string> }>();

  function fillFlood(
    x: number,
    y: number,
    targetPlant: string,
    prevCoord: string
  ): void {
    const fence = regions.get(targetPlant)?.fence ?? new Set();
    const area = regions.get(targetPlant)?.area ?? new Set();

    if (area.has(`${x},${y}`)) {
      return;
    }

    if (x < 0 || x >= lines[0].length || y < 0 || y >= lines.length) {
      regions.set(targetPlant, {
        area: area,
        fence: fence.add(`${x},${y}:${prevCoord}`),
      });
      return;
    }

    const currentPlant = lines[y][x];
    if (currentPlant !== targetPlant) {
      regions.set(targetPlant, {
        area: area,
        fence: fence.add(`${x},${y}:${prevCoord}`),
      });
      return;
    }

    if (currentPlant === targetPlant && !area.has(`${x},${y}`)) {
      regions.set(targetPlant, { area: area.add(`${x},${y}`), fence: fence });

      fillFlood(x - 1, y, targetPlant, `${x},${y}`);
      fillFlood(x + 1, y, targetPlant, `${x},${y}`);
      fillFlood(x, y - 1, targetPlant, `${x},${y}`);
      fillFlood(x, y + 1, targetPlant, `${x},${y}`);
    }
  }

  lines.forEach((line, y) => {
    line.forEach((plant, x) => {
      if (regions.has(plant) && regions.get(plant)?.area.has(`${x},${y}`)) {
        return;
      }
      fillFlood(x, y, plant, `${x},${y}`);
    });
  });

  const plantTypes = regions.keys();

  // for (const plantType of plantTypes) {
  //   const region = regions.get(plantType);
  //   const area = region?.area ?? new Set();
  //   const fence = region?.fence ?? new Set();

  //   if (plantType === "C") {
  //     console.log(fence);
  //   }

  //   result1 += area.size * fence.size;
  // }

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
