import test from 'ava';
import dotfiles from '../answer/dotfiles';

test('did you do your job?', t => {
  const dir = dotfiles();

  // make sure you know the requirement
  t.same(dir.value, 5);
  t.same(dir['.aliases'], 'alias fuck="sudo $(history -p !!)"');
  t.same(dir['.pm2'], '.pm2 is a directory');

  const shouldBeHidden = ['.aliases', '.pm2'];

  // let's see
  for (const prop in dir) {
    if (shouldBeHidden.indexOf(prop) > -1) {
      t.fail();
    }
  }
});

test('boss changes requirements', t => {
  const dir = dotfiles();

  // as usually happened in software development
  dir.value = 10;
  dir['.aliases'] = '';
  dir['.pm2'] = 'no .pm2 in this directory';

  // boss check on you
  t.same(dir.value, 10);
  t.same(dir['.aliases'], '');
  t.same(dir['.pm2'], 'no .pm2 in this directory');

  // no regression, no regret
  t.same(Object.keys(dir).length, 1);
});

test('they exist, but ignored', t => {
  const dir = dotfiles();

  t.same(Object.keys(dir).length, 1);

  delete dir['.aliases'];
  delete dir['.pm2'];

  // as if nothing happen
  t.same(Object.keys(dir).length, 1);
});

test('only realized how much you need it after you lost it', t => {
  const dir = dotfiles();

  // your money
  delete dir.value;
  t.same(Object.keys(dir).length, 0);
});
