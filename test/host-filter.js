import test from 'ava';
import hostFilter from '../answer/host-filter';

test('multi same', t => {
  const input = [
    { k: 'api01', v: 1 },
    { k: 'api02', v: 2 },
    { k: 'api03', v: 3 }
  ];
  const output = [
    { k: 'api01', v: 1 }
  ];

  t.same(hostFilter(input), output);
});

test('double multi', t => {
  const input = [
    { k: 'api01', v: 1 },
    { k: 'api02', v: 2 },
    { k: 'queue03', v: 3 },
    { k: 'queue01', v: 4 }
  ];
  const output = [
    { k: 'api01', v: 1 },
    { k: 'queue03', v: 3 }
  ];

  t.same(hostFilter(input), output);
});

test('multi between', t => {
  const input = [
    { k: 'api01', v: 1 },
    { k: 'queue', v: 2 },
    { k: 'api', v: 3 },
    { k: 'queue01', v: 4 }
  ];
  const output = [
    { k: 'api01', v: 1 },
    { k: 'queue', v: 2 }
  ];

  t.same(hostFilter(input), output);
});

test('surprise!', t => {
  const input = [
    { k: 'api01', v: 1 },
    { k: 'queue03', v: 2 },
    { k: 'staging01', v: 3 },
    { k: 'queue', v: 4 },
    { k: 'staging05', v: 5 }
  ];
  const output = [
    { k: 'api01', v: 1 },
    { k: 'queue03', v: 2 },
    { k: 'staging01', v: 3 },
    { k: 'staging05', v: 5 }
  ];

  t.same(hostFilter(input), output);
});
