import fs from 'fs';
import path from 'path';
import test from 'ava';
import superflat from '../answer/superflat';

const superflatSrc = path.join(__dirname, '../answer/superflat.js');

test('1 dimensional array', t => {
  const arr = [1, 2, 3, 4];

  const flat = superflat(arr);
  const expected = [1, 2, 3, 4];
  t.same(flat, expected);
});

test('2 dimensional array', t => {
  const arr = [1, [2, 3], 4];

  const flat = superflat(arr);
  const expected = [1, 2, 3, 4];
  t.same(flat, expected);
});

test('multi dimensional array', t => {
  const arr = [1, [2, [3]], 4];

  const flat = superflat(arr);
  const expected = [1, 2, 3, 4];
  t.same(flat, expected);
});

test('no references', t => {
  const arr = [1, [2, [3]], 4];
  const flat = superflat(arr);

  arr[1][0] = 1;
  arr[1][1][0] = 1;
  arr[2] = 1;

  t.same(arr, [1, [1, [1]], 1]);
  t.same(flat, [1, 2, 3, 4]);
});

test('do not use loop', t => {
  const code = fs.readFileSync(superflatSrc, 'utf-8');
  t.same(code.match(/for ?\(/), null);
});

test('do not use while loop', t => {
  const code = fs.readFileSync(superflatSrc, 'utf-8');
  t.same(code.match(/while ?\(/), null);
});

test('do not use forEach', t => {
  const code = fs.readFileSync(superflatSrc, 'utf-8');
  t.same(code.indexOf(/\.forEach ?\(/), -1);
});
