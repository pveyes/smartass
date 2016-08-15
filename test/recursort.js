import test from 'ava';
import recursort from '../answer/recursort';

test('1 dimensional array', t => {
  t.same(recursort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
  t.same(recursort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  t.same(recursort([5, 1, 4, 2, 3]), [1, 2, 3, 4, 5]);
});

test('2 dimensional array', t => {
  t.same(recursort([[5, 4], 3, 2, 1]), [1, 2, 3, [4, 5]]);
  t.same(recursort([5, 4, 3, [2, 1]]), [3, 4, 5, [1, 2]]);
});

test('2 dimensional array - varied length', t => {
  t.same(recursort([[5, 4], [3], 2, 1]), [1, 2, [3], [4, 5]]);
  t.same(recursort([[5, 4, 3], [2, 1]]), [[1, 2], [3, 4, 5]]);
});

test('2 dimensional array - same length', t => {
  t.same(recursort([[5, 4], [3, 2], 1]), [1, [2, 3], [4, 5]]);
  t.same(recursort([[5, 4], [5, 3], 1]), [1, [3, 5], [4, 5]]);
});

test('chaotic array', t => {
  t.same(recursort([[[[[5], 4], 3], 2], 1]), [1, [2, [3, [4, [5]]]]]);
  t.same(recursort([[[5], 4], [[3], 2], 1]), [1, [2, [3]], [4, [5]]]);
});
