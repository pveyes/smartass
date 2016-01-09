import test from 'ava';
import lazyFibonacci from '../answer/lazy-fibonacci';

test('usual increase', t => {
  const fibonacci = lazyFibonacci();

  t.same(fibonacci(), 1);
  t.same(fibonacci(), 1);
  t.same(fibonacci(), 2);
  t.same(fibonacci(), 3);
  t.same(fibonacci(), 5);
  t.same(fibonacci(), 8);
  t.same(fibonacci(), 13);
  t.same(fibonacci(), 21);
});

test('unusual increase', t => {
  const fibonacci = lazyFibonacci();

  t.same(fibonacci(), 1);
  t.same(fibonacci(null), 1);
  t.same(fibonacci(), 2);
  t.same(fibonacci(null), 3);
  t.same(fibonacci(), 5);
  t.same(fibonacci(null), 8);
  t.same(fibonacci(), 13);
  t.same(fibonacci(null), 21);
});

test('skip 1', t => {
  const fibonacci = lazyFibonacci();

  t.same(fibonacci(2), 1);
  t.same(fibonacci(2), 3);
  t.same(fibonacci(2), 8);
  t.same(fibonacci(2), 21);
});

test('constant fibonacci?', t => {
  const fibonacci = lazyFibonacci();

  t.same(fibonacci(), 1);
  t.same(fibonacci(), 1);
  t.same(fibonacci(), 2);
  t.same(fibonacci(0), 2);
  t.same(fibonacci(0), 2);
  t.same(fibonacci(0), 2);
});

test('look back', t => {
  const fibonacci = lazyFibonacci();

  t.same(fibonacci(), 1);
  t.same(fibonacci(), 1);
  t.same(fibonacci(), 2);
  t.same(fibonacci(), 3);
  t.same(fibonacci(), 5);
  t.same(fibonacci(), 8);
  t.same(fibonacci(), 13);
  t.same(fibonacci(-1), 8);
  t.same(fibonacci(-1), 5);
  t.same(fibonacci(-1), 3);
  t.same(fibonacci(-1), 2);
  t.same(fibonacci(-1), 1);
  t.same(fibonacci(-1), 1);
});

test('look back skip 1', t => {
  const fibonacci = lazyFibonacci();
  t.same(fibonacci(2), 1);
  t.same(fibonacci(2), 3);
  t.same(fibonacci(2), 8);
  t.same(fibonacci(2), 21);
  t.same(fibonacci(-2), 8);
  t.same(fibonacci(-2), 3);
  t.same(fibonacci(-2), 1);
});

test('move on', t => {
  const fibonacci = lazyFibonacci();

  t.same(fibonacci(-1), 1);
  t.same(fibonacci(-1), 1);
  t.same(fibonacci(-1), 1);
  t.same(fibonacci(-1), 1);
  t.same(fibonacci(-1), 1);
  t.same(fibonacci(-1), 1);
  t.same(fibonacci(-1), 1);
  t.same(fibonacci(-1), 1);
  t.same(fibonacci(), 1);
  t.same(fibonacci(), 2);
  t.same(fibonacci(), 3);
  t.same(fibonacci(), 5);
  t.same(fibonacci(), 8);
  t.same(fibonacci(), 13);
});

test('keep calm and no error', t => {
  const fibonacci = lazyFibonacci();
  t.same(fibonacci(-1), 1);
  t.same(fibonacci(0), 1);
  t.same(fibonacci(-1), 1);
  t.same(fibonacci(0), 1);
  t.same(fibonacci(Number.MIN_SAFE_INTEGER), 1);
  t.same(fibonacci(0), 1);
  t.same(fibonacci(Number.MIN_SAFE_INTEGER), 1);
  t.same(fibonacci(0), 1);
});
