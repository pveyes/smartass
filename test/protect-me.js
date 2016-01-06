import test from 'ava';
import protectMe from '../answer/protect-me';

test('protected', t => {
  const protectedValue = 5;
  const newValue = 10;
  const key = 'value';

  const prot = protectMe();
  t.same(prot.value, protectedValue);

  prot.value = newValue;
  t.same(prot.value, protectedValue);

  prot.value++;
  t.same(prot.value, protectedValue);

  prot.value--;
  t.same(prot.value, protectedValue);

  prot.value *= newValue;
  t.same(prot.value, protectedValue);

  prot.value /= newValue;
  t.same(prot.value, protectedValue);

  prot.value %= newValue;
  t.same(prot.value, protectedValue);

  prot[key] = newValue;
  t.same(prot.value, protectedValue);

  delete prot.value;
  prot.value = newValue;
  t.same(prot.value, newValue);
  // finally
});
