function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const [rulesRaw, pagesRaw] = input.split("\n\n");
  const rules = rulesRaw.split("\n").map((rule) => rule.split("|"));
  const pages = pagesRaw.split("\n").map((page) => page.split(","));

  const rulesMap = new Map<string, { before: string[]; after: string[] }>();
  rules.forEach((rule) => {
    const alpha = rulesMap.get(rule[0]) ?? { before: [], after: [] };
    rulesMap.set(rule[0], {
      before: [...alpha.before, rule[1]],
      after: alpha.after,
    });

    const beta = rulesMap.get(rule[1]) ?? { before: [], after: [] };
    rulesMap.set(rule[1], {
      after: [...beta.after, rule[0]],
      before: beta.before,
    });
  });

  pages.forEach((page) => {
    let isValid: boolean = true;
    let pagePointer = 0;
    let comparePointer = 0;

    while (pagePointer < page.length) {
      const currentPage = page[pagePointer];
      if (comparePointer === pagePointer) {
        comparePointer++;
      }

      const currentRule = rulesMap.get(currentPage);
    }
    console.log("----");
  });

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
