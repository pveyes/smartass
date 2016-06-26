/**
 * Given two date object, check if the second date is the next day of the first
 * date.
 *
 * Sample input 1: Date(17 Jan 2016 15:00:00)
 * Sample input 2: Date(19 Jan 2016 10:00:00)
 * Sample output: false // 2 day after
 *
 * @param Date date1
 * @param Date date2
 * @return Boolean
 */

module.exports = function isTomorrow(date1, date2) {
  return date1 < date2;
};
