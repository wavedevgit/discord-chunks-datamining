/** Chunk was on web.js **/
/** chunk id: 257469, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e, t, n, r) {
  if (e.size) {
    var i = 0;
    e.reduce(function(e, a, o) {
      return t(e, a) || (n(e) && r(i, o), i = o), a
    }), n(e.last()) && r(i, e.count())
  }
}