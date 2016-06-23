import test from 'ava';
import dotProp from '../answer/dot-prop';

test('1 level deep', t => {
  t.same(dotProp({ a: 1 }, 'a'), 1);
  t.same(dotProp({ b: 'c' }, 'b'), 'c');
});

test('random level deep', t => {
  t.same(dotProp({ a: { b: 3 } }, 'a.b'), 3);
  t.same(dotProp({ a: { b: { c: { d: { e: 0 } } } } }, 'a.b.c.d.e'), 0);
});

test('undefined prop', t => {
  t.same(dotProp({ a: 1 }, 'b'), undefined);
  t.same(dotProp({ b: 'c' }, 'a.b.c.d.e'), undefined);
});

test('random object shape', t => {
  const o = {
    a: {
      b: {
        c: 1
      },
      'b.c': 2
    },
    'a.b': {
      c: 3
    },
    'a.b.c': 4
  };

  t.same(dotProp(o, 'a.b.c'), 1);
  t.same(dotProp(o, 'a.b\\.c'), 2);
  t.same(dotProp(o, 'a\\.b.c'), 3);
  t.same(dotProp(o, 'a\\.b\\.c'), 4);
});
