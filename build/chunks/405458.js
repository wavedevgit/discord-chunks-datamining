/** Chunk was on 31422 **/
/** chunk id: 405458, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk489161 = require("./489161.js"),
  n = Array.prototype.concat,
  s = Array.prototype.slice,
  o = module.exports = function(e) {
    for (var t = [], r = 0, o = e.length; r < o; r++) {
      var i = e[r];
      a(i) ? t = n.call(t, s.call(i)) : t.push(i)
    }
    return t
  };
o.wrap = function(e) {
  return function() {
    return e(o(arguments))
  }
}