"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _StringBuilder_instances, _StringBuilder_addString;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sb = exports.StringBuilder = void 0;
exports.default = stringBuilder;
const string_format_1 = __importDefault(require("string-format"));
class StringBuilder {
    constructor(...strings) {
        _StringBuilder_instances.add(this);
        this.strings = [];
        for (const string of strings) {
            __classPrivateFieldGet(this, _StringBuilder_instances, "m", _StringBuilder_addString).call(this, string);
        }
    }
    toString({ joiner = '' } = {}) {
        return this.strings.join(joiner);
    }
    add(...strings) {
        for (const string of strings) {
            __classPrivateFieldGet(this, _StringBuilder_instances, "m", _StringBuilder_addString).call(this, string);
        }
        return this;
    }
    addIf(maybe, ...strings) {
        if (maybe) {
            for (const string of strings) {
                __classPrivateFieldGet(this, _StringBuilder_instances, "m", _StringBuilder_addString).call(this, string);
            }
        }
        return this;
    }
    addTimes(string, times) {
        const validTimes = typeof times === 'number' && times === Math.round(times) && times >= 0;
        console.assert(validTimes, 'times should be a non-negative integer');
        if (!validTimes) {
            return this;
        }
        return __classPrivateFieldGet(this, _StringBuilder_instances, "m", _StringBuilder_addString).call(this, string.repeat(times));
    }
    format(...arguments_) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return (0, string_format_1.default)(this.toString(), ...arguments_);
    }
}
exports.StringBuilder = StringBuilder;
_StringBuilder_instances = new WeakSet(), _StringBuilder_addString = function _StringBuilder_addString(string) {
    this.strings.push(String(string));
    return this;
};
function stringBuilder(...strings) {
    return new StringBuilder(...strings);
}
exports.sb = stringBuilder;
