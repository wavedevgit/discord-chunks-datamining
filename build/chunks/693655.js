/** Chunk was on web.js **/
/** chunk id: 693655, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk339626 = require("./339626.js"),
  Chunk4940 = require("./4940.js"),
  Chunk313400 = require("./313400.js"),
  Chunk88388 = require("./88388.js");
module.exports = function(e, t, n, s) {
  s || (s = {});
  var l = s.enumerable,
    c = true !== s.name ? s.name : t;
  if (r(n) && a(n, c, s), s.global) l ? e[t] = n : o(t, n);
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