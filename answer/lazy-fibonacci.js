/**
 * Return a function that can produce a fibonacci number at some
 * index. Everytime the function is called, it will produced next
 * fibonacci number (starting at 1, 1, 2, and so on). The only exception
 * is when the function is called with an argument, you must change your next
 * fibonacci based on difference value given in argument.
 *
 *
 * Sample test:
 * var a = lazyFibonacci();
 * a() // return 1
 * a() // return 1
 * a() // return 2
 * a(1) // return 3
 * a(2) // return 8, skipping 5
 * a(0) // return 8, no index increase
 *
 * @return Function(diff: ?number)
 */
module.exports = function lazyFibonacci() {
  return function fibonacci(diff) {
    return 1;
  };
};
