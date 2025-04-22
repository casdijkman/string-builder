type StringType = string | String;

export class StringBuilder {
  string = '';

  constructor(...strings: StringType[]) {
    for (const string of strings) {
      this.add(string);
    }
  }

  add(string: StringType) {
    this.string = this.string.concat(string.toString());
    return this;
  }

  addIf(maybe: boolean, ...strings: StringType[]) {
    if (maybe) {
      for (const string of strings) {
        this.add(string);
      }
    }

    return this;
  }

  addTimes(string: StringType, times: number) {
    const validTimes = times === Math.round(times) && times >= 0;
    console.assert(validTimes, 'times should be a non-negative integer');
    if (!validTimes) {
      return this;
    }

    return this.add(string.repeat(times));
  }

  toString() {
    return this.string;
  }
}

export default function stringBuilder(...strings: StringType[]) {
  return new StringBuilder(...strings);
}

export const sb = stringBuilder;
