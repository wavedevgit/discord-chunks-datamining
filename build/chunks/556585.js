/** Chunk was on web.js **/
/** chunk id: 556585, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk880181 = require("./880181.js"),
  Chunk117895 = require("./117895.js"),
  Chunk494465 = require("./494465.js"),
  Chunk587218 = require("./587218.js");
module.exports = function(e, t, n, s) {
  s || (s = {});
  var l = s.enumerable,
    c = true !== s.name ? s.name : t;
  if (r(n) && o(n, c, s), s.global) l ? e[t] = n : a(t, n);
  else {
    try {
      s.unsafe ? e[t] && (l = true) : delete e[t]
    } catch (e) {}
    l ? e[t] = n : i.f(e, t, {
      value: n,
      enumerable: false,
      configurable: !s.nonConfigurable,
      writable: !s.nonWritable
    })
  }
  return e
}