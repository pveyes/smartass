/**
 * Given two string, check if the second string is a possible abbreviation
 * of the first string. Every words in source string must have a partial
 * abbreviation, and the partial abbreviation should not have any jump in
 * characters (British can be partially abbreviated into Brit or Br but not Brish)
 *
 * Sample input source: "British exit"
 * Sample input abbr: "Brexit"
 * Sample output: true // Br..... exit
 *
 * Sample input source: "British exit"
 * Sample input abbr: "Brishit"
 * Sample output: false // Bri..sh ..it
 *                             ^- char jump
 *
 * @param String source
 * @param String abbr
 * @return Boolean
 */

module.exports = function isAbbreviation(source, abbr) {
  return source === abbr;
};
