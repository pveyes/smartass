import test from 'ava';
import isTomorrow from '../answer/is-tomorrow';

test('next day', t => {
  t.same(isTomorrow(
      new Date('1 Jan 2016 00:00:00'),
      new Date('2 Jan 2016 00:00:00')
  ), true);

  t.same(isTomorrow(
      new Date('1 Aug 2016 23:59:59'),
      new Date('2 Aug 2016 23:59:59')
  ), true);

  t.same(isTomorrow(
      new Date('29 Feb 2016 23:59:59'),
      new Date('1 Mar 2016 00:00:00')
  ), true);

  t.same(isTomorrow(
      new Date('28 Feb 2015 23:59:59'),
      new Date('1 Mar 2015 00:00:00')
  ), true);

  t.same(isTomorrow(
      new Date('31 Dec 2015 00:00:00'),
      new Date('1 Jan 2016 23:59:59')
  ), true);

  t.same(isTomorrow(
      new Date('31 Aug 2016 00:00:00'),
      new Date('1 Sept 2016 23:59:59')
  ), true);

  t.same(isTomorrow(
      new Date('30 Jun 2016 00:00:00'),
      new Date('1 Jul 2016 23:59:59')
  ), true);
});

test('same day', t => {
  t.same(isTomorrow(
      new Date('25 Dec 2016 23:59:58'),
      new Date('25 Dec 2016 23:59:59')
  ), false);

  t.same(isTomorrow(
      new Date('17 Aug 2016 00:00:00'),
      new Date('17 Aug 2016 23:59:59')
  ), false);
});

test('2 days', t => {
  t.same(isTomorrow(
      new Date('30 Jul 2016 00:00:00'),
      new Date('1 Aug 2016 00:00:00')
  ), false);

  t.same(isTomorrow(
      new Date('31 Oct 2016 23:59:59'),
      new Date('2 Nov 2016 00:00:00')
  ), false);

  t.same(isTomorrow(
      new Date('27 Feb 2016 00:00:00'),
      new Date('29 Feb 2016 23:59:59')
  ), false);

  t.same(isTomorrow(
      new Date('31 Dec 2015 23:59:59'),
      new Date('2 Jan 2016 00:00:00')
  ), false);
});

test('previous day', t => {
  t.same(isTomorrow(
      new Date('22 May 2016 00:00:00'),
      new Date('21 May 2016 00:00:00')
  ), false);

  t.same(isTomorrow(
      new Date('1 Jan 2016 00:00:00'),
      new Date('31 Dec 2015 23:59:59')
  ), false);

  t.same(isTomorrow(
      new Date('1 Mar 2016 00:00:00'),
      new Date('29 Feb 2016 23:59:59')
  ), false);
});

test('far away', t => {
  t.same(isTomorrow(
      new Date('31 Dec 2014 00:00:00'),
      new Date('1 Jan 2016 00:00:00')
  ), false);

  t.same(isTomorrow(
      new Date('17 Oct 2016 00:00:00'),
      new Date('18 Sept 2016 00:00:00')
  ), false);

  t.same(isTomorrow(
      new Date('8 Nov 2016 00:00:00'),
      new Date('9 Nov 2017 00:00:00')
  ), false);

  t.same(isTomorrow(
      new Date('12 Apr 2016 00:00:00'),
      new Date('13 Apr 2015 00:00:00')
  ), false);
});
