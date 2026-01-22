/** Chunk was on web.js **/
/** chunk id: 265930, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e, t, n, r) {
  if (e.size) {
    var i = 0;
    e.reduce(function(e, a, s) {
      return t(e, a) || (n(e) && r(i, s), i = s), a
    }), n(e.last()) && r(i, e.count())
  }
}