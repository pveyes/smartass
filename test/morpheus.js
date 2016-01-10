import test from 'ava';
import morpheus from '../answer/morpheus';

test('morph 1', t => {
  let morph = morpheus();
  morph = morph(1);

  t.same(morph(false), [1]);
});

test('morph many', t => {
  let morph = morpheus();
  morph = morph(1);
  morph = morph(2);
  morph = morph(3);
  morph = morph(4);
  morph = morph(5);

  t.same(morph(false), [1, 2, 3, 4, 5]);
});

test('morph parallel', t => {
  let morph = morpheus();
  morph = morph(1, 2, 3);
  morph = morph(4, 5, 6);

  t.same(morph(false), [1, 2, 3, 4, 5, 6]);
});

test('morph nothing', t => {
  const morph = morpheus();
  t.same(morph(false), []);
});

test('stopped halfway', t => {
  const morph = morpheus();
  t.same(morph(1, 2, 3, false, 4, 5, 6), [1, 2, 3]);
});

test('do not stop', t => {
  let morph = morpheus();
  morph = morph(1);

  function doNotStopMorph() {
    return 1;
  }

  morph = morph(doNotStopMorph);

  t.same(morph(false), [1, 1]);
});

test('stop when you\'re wrong', t => {
  let morph = morpheus();
  morph = morph(1);
  morph = morph(2);
  morph = morph(3);

  function stopMorph() {
    return false;
  }

  t.same(morph(stopMorph), [1, 2, 3]);
});

test('fibonacci!', t => {
  let morph = morpheus();

  function fibonacciMorph() {
    const ln = arguments.length;

    if (ln < 2) {
      return 1;
    }

    return arguments[ln - 1] + arguments[ln - 2];
  }

  morph = morph(fibonacciMorph);
  morph = morph(fibonacciMorph);
  morph = morph(fibonacciMorph);
  morph = morph(fibonacciMorph);
  morph = morph(fibonacciMorph);
  morph = morph(fibonacciMorph);
  morph = morph(fibonacciMorph);

  t.same(morph(false), [1, 1, 2, 3, 5, 8, 13]);
});
