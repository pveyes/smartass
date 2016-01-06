import test from 'ava';
import saturdate from '../answer/saturdate';

test('missing one', t => {
  const list = [
    'Sat Jan 02 2016',
    'Fri Jan 08 2016',
    'Sat Jan 16 2016',
    'Sat Jan 23 2016'
  ];
  const today = 'Sun Jan 3 2016';
  const output = [
    'Sat Jan 30 2016',
    'Sat Jan 09 2016',
    'Sat Jan 16 2016',
    'Sat Jan 23 2016'
  ];

  t.same(saturdate(list, today), output);
});

test('missing two', t => {
  const list = [
    'Sat Jan 02 2016',
    'Sat Jan 09 2016',
    'Sat Jan 16 2016',
    'Sat Dec 26 2015'
  ];
  const today = 'Sun Jan 3 2016';
  const output = [
    'Sat Jan 30 2016',
    'Sat Jan 09 2016',
    'Sat Jan 16 2016',
    'Sat Jan 23 2016'
  ];

  t.same(saturdate(list, today), output);
});

test('after saturday, after today', t => {
  const list = [
    'Mon Jan 04 2016',
    'Sat Jan 09 2016',
    'Sat Jan 16 2016',
    'Sat Jan 23 2016'
  ];
  const today = 'Sun Jan 3 2016';
  const output = [
    'Sat Jan 30 2016',
    'Sat Jan 09 2016',
    'Sat Jan 16 2016',
    'Sat Jan 23 2016'
  ];

  t.same(saturdate(list, today), output);
});
