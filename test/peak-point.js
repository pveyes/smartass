import test from 'ava';
import peakPoint from '../answer/peak-point';

test('single peak', t => {
  t.same(peakPoint([0, 2, 3, 4, 5, 4, 3, 2, 0]), [5]);
  t.same(peakPoint([0, 0, 1, 5, 10, 5, 1, 0, 0]), [10]);
  t.same(peakPoint([5, 0, 0, 0, 5, 5, 0, 0, 0]), [5]);
  t.same(peakPoint([0, 0, 0, 5, 5, 0, 0, 0, 5]), [5]);
  t.same(peakPoint([0, 0, 0, 0, 5, 0, 0, 0, 0]), [5]);
});

test('multi peaks', t => {
  t.same(peakPoint([0, 3, 5, 2, 3, 2, 5, 3, 0]), [5, 3, 5]);
  t.same(peakPoint([0, 0, 2, 3, 5, 0, 2, 3, 0]), [5, 3]);
  t.same(peakPoint([1, 5, 1, 5, 1, 5, 1, 5, 1]), [5, 5, 5, 5]);
  t.same(peakPoint([0, 5, 5, 5, 0, 5, 2, 4, 3]), [5, 4]);
});

test('no peak', t => {
  t.same(peakPoint([0, 0, 0, 0, 0, 0, 0, 0, 0]), []);
  t.same(peakPoint([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]), []);
  t.same(peakPoint([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1]), []);
  t.same(peakPoint([5, 5, 5, 5, 0, 5, 5, 5, 5]), []);
});
