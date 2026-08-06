/* eslint-disable @typescript-eslint/restrict-template-expressions, no-implicit-coercion, @typescript-eslint/restrict-plus-operands */

import { describe } from '@casd/expect';
import { sb } from '../lib/string-builder.js';

const success = [
  describe('foo and bar should be foobar')
    .expect(sb('foo').add('bar').toString())
    .to.equal('foobar'),

  describe('addTimes should add string multiple times')
    .expect(sb('foo').addTimes('bar', 2).toString())
    .to.equal('foobarbar'),

  describe('joiner set to space should add space between values')
    .expect(sb('foo').add('bar').toString({ joiner: ' ' }))
    .to.equal('foo bar'),

  describe('format should insert strings in the correct position')
    .expect(sb('{0} {1}').format('foo', 'bar').toString())
    .to.equal('foo bar'),

  describe('format should insert strings at the correct name')
    .expect(sb('foo {what}').format({ what: 'bar' }).toString())
    .to.equal('foo bar'),

  describe('format should resolve object dot access correctly')
    .expect(
      sb('{foo.bar}')
        .format({ foo: { bar: 'baz' } })
        .toString(),
    )
    .to.equal('baz'),

  describe('sb should implicitly typecast to string in template')
    .expect(`${sb('foo bar')}`)
    .to.be.a('string'),

  describe('sb should implicitly typecast to string in template')
    .expect(`${sb('foo bar')}`)
    .to.equal('foo bar'),

  describe('sb should implicitly typecast to string in String constructor')
    .expect(String(sb('foo bar')))
    .to.be.a('string'),

  describe('sb should implicitly typecast to string in String constructor')
    .expect(String(sb('foo bar')))
    .to.equal('foo bar'),

  describe('sb should implicitly typecast to string in string concatenation')
    .expect('' + sb('foo bar'))
    .to.be.a('string'),

  describe('sb should implicitly typecast to string in string concatenation')
    .expect('' + sb('foo bar'))
    .to.equal('foo bar'),
].every(Boolean);

if (success) {
  console.log(`Tests succeeded! ${Math.random() < 0.5 ? '⊂(｡╹ヮ╹｡)つ' : 'ฅʕ•ᴥ•ʔฅ'}`);
}

// eslint-disable-next-line unicorn/no-process-exit, n/prefer-global/process
process.exit(success ? 0 : 1);
