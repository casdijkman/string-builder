import formatString from 'string-format';

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
    const validTimes = typeof times === 'number' && times === Math.round(times) && times >= 0;
    console.assert(validTimes, 'times should be a non-negative integer');
    if (!validTimes) {
      return this;
    }

    return this.#addString(string.repeat(times));
  }

  format(...arguments_: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return formatString(this.toString(), ...arguments_);
  }

  #addString(string: StringType) {
    this.strings.push(String(string));
    return this;
  }
}

export default function stringBuilder(...strings: StringType[]) {
  return new StringBuilder(...strings);
}

export const sb = stringBuilder;
