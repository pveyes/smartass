import test from 'ava';
import superflat from '../answer/superflat';

test('1 dimensional array', t => {
  const arr = ['1', '2', '3', '4'];

  const flat = superflat(arr);
  const expected = '1, 2, 3, 4';
  t.same(flat, expected);
});

test('2 dimensional array', t => {
  const arr = [1, [2, 3], 4];

  const flat = superflat(arr);
  const expected = '1, 2, 3, 4';
  t.same(flat, expected);
});

test('multi dimensional array', t => {
  const arr = [1, [2, [3]], 4];

  const flat = superflat(arr);
  const expected = '1, 2, 3, 4';
  t.same(flat, expected);
});

test('crazy dimensional array', t => {
  const arr = [[[[[1, [[[[2, [[[3]]], 4]]]], 5]]]]];

  const flat = superflat(arr);
  const expected = '1, 2, 3, 4, 5';
  t.same(flat, expected);
});

test('method trap', t => {
  const x = [2];
  x.forEach = function forEach() { throw new Error('array.forEach is not a function'); };
  x.map = function map() { throw new Error('array.map is not a function'); };
  x.reduce = function reduce() { throw new Error('array.reduce is not a function'); };
  x.filter = function filter() { throw new Error('array.filter is not a function'); };
  const arr = [1, x, 3];

  const flat = superflat(arr);
  const expected = '1, 2, 3';
  t.same(flat, expected);
});
