import test from 'ava';
import mirrorless from '../answer/mirrorless';

test('basic synchronization', t => {
  const Mirrorless = mirrorless();
  const sony = new Mirrorless();
  const fuji = new Mirrorless();

  // check requirement
  t.same(sony.rate, 13000);
  t.same(fuji.rate, 13000);

  // another requirement
  sony.setPrice(900);
  fuji.setPrice(1200);
  t.same(sony.getPriceIdr(), 900 * 13000);
  t.same(fuji.getPriceIdr(), 1200 * 13000);

  // another fake usd to idr
  sony.setRate(13500);
  t.same(sony.rate, 13500);

  // rate conversion should stay same across product
  // without having to change manually one by one
  t.same(fuji.rate, 13500);

  // just to make sure
  t.same(sony.getPriceIdr(), 900 * 13500);
  t.same(fuji.getPriceIdr(), 1200 * 13500);
});
