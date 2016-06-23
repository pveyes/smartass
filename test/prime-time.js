import test from 'ava';
import primeTime from '../answer/prime-time';

test('2 prime', t => {
  t.same(primeTime(6), [2, 3]);
  t.same(primeTime(10), [2, 5]);
  t.same(primeTime(15), [3, 5]);
});

test('2 implicit prime', t => {
  t.same(primeTime(12), [2, 3]);
  t.same(primeTime(18), [2, 3]);
  t.same(primeTime(20), [2, 5]);
  t.same(primeTime(50), [2, 5]);
  t.same(primeTime(45), [3, 5]);
  t.same(primeTime(75), [3, 5]);
});

test('1 prime', t => {
  t.same(primeTime(2), [2]);
  t.same(primeTime(3), [3]);
  t.same(primeTime(5), [5]);
  t.same(primeTime(7), [7]);
  t.same(primeTime(11), [11]);
});

test('1 implicit prime', t => {
  t.same(primeTime(8), [2]);
  t.same(primeTime(2048), [2]);
  t.same(primeTime(27), [3]);
  t.same(primeTime(729), [3]);
  t.same(primeTime(125), [5]);
});

test('multi prime', t => {
  t.same(primeTime(2 * 3 * 5 * 7), [2, 3, 5, 7]);
  t.same(primeTime(2 * 2 * 3 * 3 * 5 * 5 * 7 * 7), [2, 3, 5, 7]);
});
