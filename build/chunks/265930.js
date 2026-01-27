/** Chunk was on 38939 **/
/** chunk id: 265930, original params: t (module,exports,require) **/
"use strict";
module.exports = function(t, e, r, n) {
  if (t.size) {
    var i = 0;
    t.reduce(function(t, o, a) {
      return e(t, o) || (r(t) && n(i, a), i = a), o
    }), r(t.last()) && n(i, t.count())
  }
}