/**
 * Given two string, check if the second string is a possible abbreviation
 * of the first string.
 *
 *
 * Sample input source: "British exit"
 * Sample input abbr: "Brexit"
 * Sample output: true // Br..... exit
 *
 * @param String source
 * @param String abbr
 * @return Boolean
 */

module.exports = function isAbbreviation(source, abbr) {
  return source === abbr;
};
