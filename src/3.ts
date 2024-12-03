function solution(input: string): { part1: string; part2: string } {
  let result1 = 0;
  let result2 = 0;

  const regex = /mul\((\d{1,3}),(\d{1,3})\)/gm;
  const matches = input.matchAll(regex);

  function* multiply(
    matches: RegExpStringIterator<RegExpExecArray>
  ): Generator<number> {
    for (const match of matches) {
      const [_, a, b] = match;
      yield Number(a) * Number(b);
    }
  }

  const generator = multiply(matches);
  let isDone = false;
  while (!isDone) {
    const { value, done } = generator.next();
    if (done) {
      isDone = true;
      break;
    }

    result1 += value;
  }

  const regex2 = /mul\((\d{1,3}),(\d{1,3})\)|(do|don't)\(\)/gm;
  const matches2 = input.matchAll(regex2);

  function* multiply2(
    matches: RegExpStringIterator<RegExpExecArray>
  ): Generator<number> {
    let match = matches.next();
    let prevAction = "do";
    while (!match.done) {
      const [_, a, b, action] = match.value;
      if (action !== undefined) {
        prevAction = action;
      }
      if (prevAction === "do" && action === undefined) {
        yield Number(a) * Number(b);
      }
      match = matches.next();
    }
  }

  const generator2 = multiply2(matches2);
  let isDone2 = false;
  while (!isDone2) {
    const { value, done } = generator2.next();
    if (done) {
      isDone2 = true;
      break;
    }

    result2 += value;
  }

  return {
    part1: result1.toString(),
    part2: result2.toString(),
  };
}

export default solution;
