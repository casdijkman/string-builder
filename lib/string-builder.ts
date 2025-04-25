type StringType = string | String;

export class StringBuilder {
  strings: string[] = [];

  constructor(...strings: StringType[]) {
    for (const string of strings) {
      this.#addString(string);
    }
  }

  toString({ joiner = '' } = {}) {
    return this.strings.join(joiner);
  }

  add(...strings: StringType[]) {
    for (const string of strings) {
      this.#addString(string);
    }

    return this;
  }

  addIf(maybe: boolean, ...strings: StringType[]) {
    if (maybe) {
      for (const string of strings) {
        this.#addString(string);
      }
    }

    return this;
  }

  addTimes(string: StringType, times: number) {
    const validTimes = typeof times === 'number'
      && times === Math.round(times)
      && times >= 0;
    console.assert(validTimes, 'times should be a non-negative integer');
    if (!validTimes) {
      return this;
    }

    return this.#addString(string.repeat(times));
  }

  #addString(string: StringType) {
    this.strings.push(string.toString());
    return this;
  }
}

export default function stringBuilder(...strings: StringType[]) {
  return new StringBuilder(...strings);
}

export const sb = stringBuilder;
