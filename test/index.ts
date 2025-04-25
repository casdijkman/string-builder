import { describe } from '@casd/expect';
import { sb } from '../lib/string-builder.js';

const success = [
  describe('foo and bar should be foobar')
    .expect(sb('foo').add('bar').toString()).to.equal('foobar'),

  describe('addTimes should add string multiple times')
    .expect(sb('foo').addTimes('bar', 2).toString()).to.equal('foobarbar'),

  describe('joiner set to space should add space between values')
    .expect(sb('foo').add('bar').toString({ joiner: ' ' })).to.equal('foo bar'),
].every(Boolean);

if (success) {
  console.log(`Tests succeeded! ${Math.random() < 0.5 ? '⊂(｡╹ヮ╹｡)つ' : 'ฅʕ•ᴥ•ʔฅ'}`);
}

// eslint-disable-next-line unicorn/no-process-exit, n/prefer-global/process
process.exit(success ? 0 : 1);
