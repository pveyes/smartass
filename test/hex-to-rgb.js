import test from 'ava';
import hexToRgb from '../answer/hex-to-rgb';

test('6 characters hex color', t => {
  t.same(hexToRgb('#000000'), [0, 0, 0]);
  t.same(hexToRgb('#ffffff'), [255, 255, 255]);
  t.same(hexToRgb('#ff0000'), [255, 0, 0]);
  t.same(hexToRgb('#00ff00'), [0, 255, 0]);
  t.same(hexToRgb('#0000ff'), [0, 0, 255]);
  t.same(hexToRgb('#2288ee'), [34, 136, 238]);
  t.same(hexToRgb('#0f3c69'), [15, 60, 105]);
  t.same(hexToRgb('#f12342'), [241, 35, 66]);
});

test('3 characters hex color', t => {
  t.same(hexToRgb('#000'), [0, 0, 0]);
  t.same(hexToRgb('#fff'), [255, 255, 255]);
  t.same(hexToRgb('#f00'), [255, 0, 0]);
  t.same(hexToRgb('#0f0'), [0, 255, 0]);
  t.same(hexToRgb('#00f'), [0, 0, 255]);
  t.same(hexToRgb('#28e'), [34, 136, 238]);
});
