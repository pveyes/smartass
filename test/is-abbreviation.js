import test from 'ava';
import isAbbreviation from '../answer/is-abbreviation';

test('common abbr', t => {
  t.same(isAbbreviation('British exit', 'Brexit'), true);
  t.same(isAbbreviation('European Union', 'EU'), true);
  t.same(isAbbreviation('Thank god it\'s friday', 'TGIF'), true);
  t.same(isAbbreviation('Multiple universe', 'Multiverse'), true);
});

test('forced abbr', t => {
  t.same(isAbbreviation('European', 'euro'), true);
  t.same(isAbbreviation('Github Bitbucket', 'githucket'), true);
  t.same(isAbbreviation('Facebook Bookmark', 'facebookmark'), true);
});

test('not an abbreviation', t => {
  t.same(isAbbreviation('Cheesy Potatoes', 'cheetos'), false);
  t.same(isAbbreviation('Thankgod It\'s Friday', 'TGIF'), false);
  t.same(isAbbreviation('Call me maybe', 'calbe'), false);
  t.same(isAbbreviation('European Union', 'Europe'), true);
});
