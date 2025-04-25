type StringType = string | String;
export declare class StringBuilder {
    #private;
    strings: string[];
    constructor(...strings: StringType[]);
    toString({ joiner }?: {
        joiner?: string | undefined;
    }): string;
    add(...strings: StringType[]): this;
    addIf(maybe: boolean, ...strings: StringType[]): this;
    addTimes(string: StringType, times: number): this;
}
export default function stringBuilder(...strings: StringType[]): StringBuilder;
export declare const sb: typeof stringBuilder;
export {};
