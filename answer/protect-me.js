/**
 * You must output an object with one property named "value"
 * with value of 5, but any changes to the value property
 * should not affect the object (the value property should
 * always equal to 5)
 *
 * @return Object<value: 5>
 */
module.exports = function protectMe() {
  return {
    value: 5
  };
};
