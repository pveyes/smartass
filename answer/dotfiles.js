/**
 * As we know in *nix, dotfiles are hidden from "normal eyes"
 * Your task fix this function returning some properties.
 * All the property starting with dot "." must be hidden when
 * iterated over object property, but property should be seen clearly.
 *
 * @return Object<>
 */
module.exports = function dotfiles() {
  var obj = {
    value: 5
  };

  // hide this
  obj['.aliases'] = 'alias fuck="sudo $(history -p !!)"';
  obj['.pm2'] = '.pm2 is a directory';

  return obj;
};
