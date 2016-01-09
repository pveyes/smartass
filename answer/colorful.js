/**
 * Given list of color string, return a chainable object property to format a text
 * by color, the last chained property is a function that will accept a string.
 * That function should return an object describing the text string and the color
 * in sorted order (sorted by property access order)
 *
 * Sample usage:
 * var clr = colorful(['red', 'blue']);
 *
 * // allow simple coloring
 * clr.red('simple') = { text: 'simple', colors: ['red'] }
 *
 * // allow chainable color
 * clr.red.blue('hello') = { text: 'hello', colors: ['red', 'blue'] }
 *
 * // allow repetitive chain
 * clr.red.red.red.red.red.red.blue.red('world') = { text: 'world', colors: ['blue', 'red'] }
 *
 * // you can also add new color
 * clr.add('black')
 * clr.black('empty') = { text: 'empty', colors: ['black'] }
 * clr.red.black('tree') = { text: 'tree', colors: ['red', 'black'] }
 *
 * // And add more than one
 * clr.add('white', 'grey', 'gray')
 *
 * NOTE: if same color appear twice, include only the latest
 *
 * @param Array<string> colors
 * @return Object
 */

module.exports = function colorful(colors) {
  function ColorGenerator() {}
  ColorGenerator.prototype.add = function () {};

  return new ColorGenerator();
};
