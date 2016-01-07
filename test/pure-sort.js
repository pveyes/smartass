import test from 'ava';
import pureSort from '../answer/pure-sort';

test('no side effect', t => {
  const array = [
    { i: 5 },
    { i: 1 },
    { i: 4 },
    { i: 2 }
  ];

  const output = [
    { i: 1 },
    { i: 2 },
    { i: 4 },
    { i: 5 }
  ];

  t.same(pureSort(array, 'i'), output);

  // no side effect
  t.same(array[0], { i: 5 });
  t.same(array[1], { i: 1 });
  t.same(array[2], { i: 4 });
  t.same(array[3], { i: 2 });
});

test('different key, dynamic property', t => {
  const array = [
    { 5: 5, a: 'b' },
    { 5: 1, c: 'd', e: 'f', g: 'h' },
    { 5: 4, i: 'j', k: 'l' },
    { 5: 2, m: 'n', o: 'p' }
  ];

  const output = [
    { 5: 1, c: 'd', e: 'f', g: 'h' },
    { 5: 2, m: 'n', o: 'p' },
    { 5: 4, i: 'j', k: 'l' },
    { 5: 5, a: 'b' }
  ];

  t.same(pureSort(array, '5'), output);

  // no side effect
  t.same(array[0], { 5: 5, a: 'b' });
  t.same(array[1], { 5: 1, c: 'd', e: 'f', g: 'h' });
  t.same(array[2], { 5: 4, i: 'j', k: 'l' });
  t.same(array[3], { 5: 2, m: 'n', o: 'p' });
});

test('weird key', t => {
  const array = [
    [1, 2, 3, 4, 5],
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2]
  ];

  const output = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5]
  ];

  t.same(pureSort(array, 'length'), output);

  // no side effect
  t.same(array[0], [1, 2, 3, 4, 5]);
  t.same(array[1], [1, 2, 3]);
  t.same(array[2], [1, 2, 3, 4]);
  t.same(array[3], [1, 2]);
});
