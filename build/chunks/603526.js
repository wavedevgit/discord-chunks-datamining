/** Chunk was on web.js **/
/** chunk id: 603526, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk503628 = require("./503628.js"),
  i = require("./860511.js").RegExp,
  a = Chunk503628(function() {
    var e = i("a", "y");
    return e.lastIndex = 2, null !== e.exec("abcd")
  }),
  s = a || Chunk503628(function() {
    return !i("a", "y").sticky
  });
module.exports = {
  BROKEN_CARET: a || Chunk503628(function() {
    var e = i("^r", "gy");
    return e.lastIndex = 2, null !== e.exec("str")
  }),
  MISSED_STICKY: s,
  UNSUPPORTED_Y: a
}