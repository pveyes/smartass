import test from 'ava';
import fizzbuzz from '../answer/fizz-buzz';

test('3', t => {
  t.same(fizzbuzz(3), '1\n2\nfizz');
});

test('5', t => {
  t.same(fizzbuzz(5), '1\n2\nfizz\n4\nbuzz');
});

test('3 and 5', t => {
  t.same(fizzbuzz(15), '1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz');
});

test('trap 1', t => {
  t.same(fizzbuzz(1), '1');
});

test('trap 0', t => {
  t.same(fizzbuzz(0), '');
});
