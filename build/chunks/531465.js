/** Chunk was on web.js **/
/** chunk id: 531465, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  var t = {};
  return function(n) {
    return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n]
  }
}