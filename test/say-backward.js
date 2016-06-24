import test from 'ava';
import sayBackward from '../answer/say-backward';

test('single sentence', t => {
  t.same(
    sayBackward('Lorem ipsum dolor sit amet.'),
    'amet sit dolor ipsum Lorem.'
  );
});

test('a paragraph', t => {
  t.same(
    sayBackward('Lorem ipsum dolor sit amet. Maecenas tincidunt felis id. Neque ultrices ultricies.'),
    'ultricies ultrices Neque. id felis tincidunt Maecenas. amet sit dolor ipsum Lorem.'
  );
});
