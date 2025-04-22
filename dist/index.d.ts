type StringType = string | String;
export declare class StringBuilder {
    string: string;
    constructor(...strings: StringType[]);
    add(string: StringType): this;
    addIf(maybe: boolean, ...strings: StringType[]): this;
    addTimes(string: StringType, times: number): this;
    toString(): string;
}
export default function stringBuilder(...strings: StringType[]): StringBuilder;
export declare const sb: typeof stringBuilder;
export {};
