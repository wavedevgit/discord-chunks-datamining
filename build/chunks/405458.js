/** Chunk was on 23706 **/
/** chunk id: 405458, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk489161 = require("./489161.js"),
  a = Array.prototype.concat,
  o = Array.prototype.slice,
  s = module.exports = function(e) {
    for (var t = [], r = 0, s = e.length; r < s; r++) {
      var i = e[r];
      n(i) ? t = a.call(t, o.call(i)) : t.push(i)
    }
    return t
  };
s.wrap = function(e) {
  return function() {
    return e(s(arguments))
  }
}