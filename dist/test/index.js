"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect_1 = require("@casd/expect");
const string_builder_js_1 = require("../lib/string-builder.js");
const success = [
    (0, expect_1.describe)('foo and bar should be foobar')
        .expect((0, string_builder_js_1.sb)('foo').add('bar').toString()).to.equal('foobar'),
    (0, expect_1.describe)('addTimes should add string multiple times')
        .expect((0, string_builder_js_1.sb)('foo').addTimes('bar', 2).toString()).to.equal('foobarbar'),
    (0, expect_1.describe)('joiner set to space should add space between values')
        .expect((0, string_builder_js_1.sb)('foo').add('bar').toString({ joiner: ' ' })).to.equal('foo bar'),
].every(Boolean);
if (success) {
    console.log(`Tests succeeded! ${Math.random() < 0.5 ? '⊂(｡╹ヮ╹｡)つ' : 'ฅʕ•ᴥ•ʔฅ'}`);
}
// eslint-disable-next-line unicorn/no-process-exit, n/prefer-global/process
process.exit(success ? 0 : 1);
