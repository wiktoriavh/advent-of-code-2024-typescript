function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const lines = input.split("\n").map((line) => line.split(""));

  const antennaCoordinates = new Map<string, Set<string>>();

  lines.forEach((line, y) => {
    line.forEach((cell, x) => {
      if (cell !== ".") {
        if (!antennaCoordinates.has(cell)) {
          antennaCoordinates.set(cell, new Set<string>());
        }
        const antennas = antennaCoordinates.get(cell)!;
        antennaCoordinates.set(cell, antennas.add(`${x},${y}`));
      }
    });
  });

  const antennaTypes = antennaCoordinates.keys();
  const antinodeCoordinates = new Set<string>();
  const ALLAntinodeCoordinates = new Set<string>();

  for (const type of antennaTypes) {
    const coordinates = Array.from(antennaCoordinates.get(type)!).map((coord) =>
      coord.split(",").map((c) => parseInt(c))
    );

    let pointer = 0;

    while (pointer < coordinates.length) {
      const [x, y] = coordinates[pointer];

      coordinates.forEach(([x2, y2]) => {
        if (x === x2 && y === y2) {
          return;
        }

        const dx = x2 - x;
        const dy = y2 - y;

        let nodeX = x - dx;
        let nodeY = y - dy;

        if (
          nodeX < 0 ||
          nodeY < 0 ||
          nodeX >= lines[0].length ||
          nodeY >= lines.length
        ) {
          return;
        }

        const antinode = `${nodeX},${nodeY}`;
        antinodeCoordinates.add(antinode);
        ALLAntinodeCoordinates.add(antinode);

        while (true) {
          nodeX -= dx;
          nodeY -= dy;

          if (
            nodeX < 0 ||
            nodeY < 0 ||
            nodeX >= lines[0].length ||
            nodeY >= lines.length
          ) {
            break;
          }

          const antinode = `${nodeX},${nodeY}`;
          ALLAntinodeCoordinates.add(antinode);
        }
      });

      pointer++;
    }
  }

  result1 = antinodeCoordinates.size;
  result2 = ALLAntinodeCoordinates.size;

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
