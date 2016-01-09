import test from 'ava';
import colorful from '../answer/colorful';

const COLORS = [
  'red',
  'green',
  'blue',
  'cyan',
  'magenta',
  'yellow'
];

test('basic coloring', t => {
  const clr = colorful(COLORS);

  t.same(clr.red('x'), { text: 'x', colors: ['red'] });
  t.same(clr.green('x'), { text: 'x', colors: ['green'] });
  t.same(clr.blue('x'), { text: 'x', colors: ['blue'] });
  t.same(clr.cyan('x'), { text: 'x', colors: ['cyan'] });
  t.same(clr.magenta('x'), { text: 'x', colors: ['magenta'] });
  t.same(clr.yellow('x'), { text: 'x', colors: ['yellow'] });
});

test('basic chaining', t => {
  const clr = colorful(COLORS);

  t.same(clr.red.green.blue('x'), { text: 'x', colors: ['red', 'green', 'blue'] });
  t.same(clr.cyan.magenta.yellow('x'), { text: 'x', colors: ['cyan', 'magenta', 'yellow'] });
});

test('repetitive chaining', t => {
  const clr = colorful(COLORS);

  t.same(clr.red.red.red.red.red.red.red.red('x'), { text: 'x', colors: ['red'] });
  t.same(clr.red.red.red.red.blue.red('x'), { text: 'x', colors: ['blue', 'red'] });
  t.same(clr.red.red.red.green.blue('x'), { text: 'x', colors: ['red', 'green', 'blue'] });
});

test('allow adding color', t => {
  const clr = colorful(COLORS);

  t.same(clr.black, undefined);

  clr.add('black');
  t.same(typeof clr.black, 'function');
  t.same(clr.black('never go back'), { text: 'never go back', colors: ['black'] });
  t.same(clr.red.black('tree'), { text: 'tree', colors: ['red', 'black'] });
});

test('at first there was nothing', t => {
  const clr = colorful([]);

  t.same(clr.red, undefined);
  t.same(clr.green, undefined);
  t.same(clr.blue, undefined);
  t.same(clr.cyan, undefined);
  t.same(clr.magenta, undefined);
  t.same(clr.yellow, undefined);
  t.same(clr.black, undefined);

  clr.add(...COLORS, 'black');
  t.same(clr.red.green.blue('rgb'), { text: 'rgb', colors: ['red', 'green', 'blue'] });
  t.same(clr.cyan.magenta.yellow.black('cmyk'), { text: 'cmyk', colors: ['cyan', 'magenta', 'yellow', 'black'] });
});
