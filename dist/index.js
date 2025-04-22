"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sb = exports.StringBuilder = void 0;
exports.default = stringBuilder;
class StringBuilder {
    constructor(...strings) {
        this.string = '';
        for (const string of strings) {
            this.add(string);
        }
    }
    add(string) {
        this.string = this.string.concat(string.toString());
        return this;
    }
    addIf(maybe, ...strings) {
        if (maybe) {
            for (const string of strings) {
                this.add(string);
            }
        }
        return this;
    }
    addTimes(string, times) {
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
exports.StringBuilder = StringBuilder;
function stringBuilder(...strings) {
    return new StringBuilder(...strings);
}
exports.sb = stringBuilder;
