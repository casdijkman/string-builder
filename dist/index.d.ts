type StringType = string | String;
export declare class StringBuilder {
    #private;
    string: string;
    constructor(...strings: StringType[]);
    toString(): string;
    add(...strings: StringType[]): void;
    addIf(maybe: boolean, ...strings: StringType[]): this;
    addTimes(string: StringType, times: number): this;
}
export default function stringBuilder(...strings: StringType[]): StringBuilder;
export declare const sb: typeof stringBuilder;
export {};
