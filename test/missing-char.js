import test from 'ava';
import missingChar from '../answer/missing-char';

test('same', t => {
  t.same(missingChar('abcde', 'abcde'), []);
  t.same(missingChar('edcba', 'abcde'), []);
  t.same(missingChar('aebdc', 'cadeb'), []);
});

test('ssaammee', t => {
  t.same(missingChar('aabbccddee', 'abcde'), []);
  t.same(missingChar('aaaaaabaaaaaaa', 'ab'), []);
  t.same(missingChar('ab', 'bbbbbbabbbbbb'), []);
  t.same(missingChar('aabbcd', 'abccdd'), []);
});

test('diff 1', t => {
  t.same(missingChar('abcd', 'abd'), ['c']);
  t.same(missingChar('aabbccdd', 'abbc'), ['d']);
  t.same(missingChar('bccd', 'aabbccdd'), ['a']);
});

test('sorted alphabetically', t => {
  t.same(missingChar('missing', 'string'), ['m', 'r', 't']);
  t.same(missingChar('missing', 'char'), ['a', 'c', 'g', 'h', 'i', 'm', 'n', 'r', 's']);
});
