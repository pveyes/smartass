/**
 * Returns a "class" that implement interface below
 * class Mirrorless {
 *   rate: Number = 13000 (default value)
 *   price: Number
 *
 *   setRate(Number): void
 *   setPrice(Number): void
 *   getPriceIdr(Number): Number (rate * price)
 * }
 *
 * The caveat is:
 * Every time you call setRate on one instance, all rate in other instance should also changed
 *
 * Why? because we don't want to call setRate as many as our instances because god knows
 * mirrorless is very popular these days, you can't count them using
 * your finger.
 *
 * PS: Do not complain that this is a bad design
 * bad design is placing the wrong button on the screen
 *
 * @return Class
 */
module.exports = function mirrorless() {
};
