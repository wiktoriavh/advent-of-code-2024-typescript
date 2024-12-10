function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const lines = input.split("").map(Number);
  const disk: string[] = [];

  let current = 0;
  let id = 0;

  while (current < lines.length) {
    const block = lines[current];
    const isFile = current % 2 === 0;

    for (let i = 0; i < block; i++) {
      if (isFile) {
        disk.push(id.toString());
      } else {
        disk.push(".");
      }
    }

    if (isFile) {
      id++;
    }
    current++;
  }

  const fragmentedDisk = [];

  let pStart = 0;
  let pEnd = disk.length - 1;

  while (pStart < disk.length) {
    if (pStart > pEnd) {
      break;
    }

    const block = disk[pStart];

    if (block === ".") {
      const otherBlock = disk[pEnd];
      if (otherBlock === ".") {
        pEnd--;
        continue;
      } else {
        fragmentedDisk.push(otherBlock);
        pEnd--;
        pStart++;
      }
    } else {
      fragmentedDisk.push(block);
      pStart++;
    }
  }

  fragmentedDisk.forEach((block, index) => {
    result1 += index * Number(block);
  });

  const fragmentedDisk2 = [];

  pStart = 0;
  pEnd = disk.length - 1;
  //console.log(disk);

  while (pEnd > 0) {
    let length = 0;
    let block = disk[pEnd];
    let prev = disk[pEnd - 1];

    while (block !== ".") {
      block = disk[pEnd];
      if (block !== prev) {
        break;
      }
      length++;
      pEnd--;
    }
    //console.log(length);

    let foo = 0;
    let index = 0;

    break;
  }

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
