import test from 'ava';
import gnirts from '../answer/gnirts';

test('simple string', t => {
  t.same(gnirts('abcde'), 'edcba');
  t.same(gnirts('12345'), '54321');
});

test('single char', t => {
  t.same(gnirts('1'), '1');
});

test('empty string', t => {
  t.same(gnirts(''), '');
});
