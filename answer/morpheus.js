/**
 * Return a function that accept arbitrary number of arguments
 * When the function is called, store the arguments inside an array, and return
 * a function that behaves exactly like the returned function, so it can be called
 * infinite times.
 *
 * The only exception is if you found argument type that is
 * Boolean(false), return all arguments that you already stored
 * instead of a function. If you find a function, run the function with
 * all arguments that you stored, and check the result. If the result is
 * Boolean(false), return all arguments that you already save, if not
 * store the return value of the function.
 *
 * Sample usage:
 * var morph = morpheus();
 * morph = morph(1);
 * morph = morph(2, 3, 4);
 * var result = morph(false); // [1, 2, 3, 4]
 *
 * var another = morph(function () { return false }); // [1, 2, 3, 4]
 *
 * morph = morph(function (a, b, c, d) { return a + b + c + d });
 * result = morph(false); [1, 2, 3, 4, 10]
 *
 * @return Function(...args: ?any)
 */
module.exports = function morpheus() {
  return function morph() {};
};
