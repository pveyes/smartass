import fs from 'fs';
import path from 'path';
import test from 'ava';
import dumbMultiplier from '../answer/dumb-multiplier';

test('no magic', t => {
  const codePath = path.join(__dirname, '../answer/dumb-multiplier.js');
  const code = fs.readFileSync(codePath, 'utf-8');

  t.same(!!code.match(/a ?\* ?b/), false, '* operator found');
  t.same(!!code.match(/Math\./), false, 'do not use Math library');
});

test('basic multiplication', t => {
  t.same(dumbMultiplier(3, 5), 15);
  t.same(dumbMultiplier(3, 1), 3);
  t.same(dumbMultiplier(5, 1), 5);
});

test('multiplication with zero', t => {
  t.same(dumbMultiplier(3, 0), 0);
  t.same(dumbMultiplier(0, 5), 0);
  t.same(dumbMultiplier(0, 0), 0);
});

test('multiplication with negative value', t => {
  t.same(dumbMultiplier(3, -1), -3);
  t.same(dumbMultiplier(-1, 5), -5);
  t.same(dumbMultiplier(-3, -5), 15);
  t.same(dumbMultiplier(3, -0), 0);
  t.same(dumbMultiplier(-0, 5), 0);
});
