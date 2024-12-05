function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const [rulesRaw, pagesRaw] = input.split("\n\n");
  const rules = rulesRaw.split("\n").map((rule) => rule.split("|"));
  const pages = pagesRaw.split("\n").map((page) => page.split(","));

  const rulesMap = new Map<string, { [key: string]: string }>();
  rules.forEach((rule) => {
    const ruleConfig = rulesMap.get(rule[0]) ?? {};
    rulesMap.set(rule[0], {
      ...ruleConfig,
      [rule[1]]: `${rule[0]}.${rule[1]}`,
    });
  });

  pages.forEach((page) => {
    let isValid: boolean = true;
    let pagePointer = 0;
    let comparePointer = 0;

    while (pagePointer < page.length) {
      if (comparePointer === pagePointer) {
        comparePointer++;
      }
      const currentPage = page[pagePointer];
      const comparePage = page[comparePointer];

      const currentRule = rulesMap.get(currentPage);
      const otherRule = rulesMap.get(comparePage);
      if (currentRule && currentRule[comparePage]) {
        comparePointer++;
      }
      if (otherRule && otherRule[currentPage]) {
        isValid = false;
        break;
      }

      pagePointer++;
    }

    if (isValid) {
      const middle = page[(page.length - 1) / 2];
      result1 += parseInt(middle);
    }
  });

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
