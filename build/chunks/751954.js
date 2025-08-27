/** Chunk was on web.js **/
/** chunk id: 751954, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk621523 = require("./621523.js"),
  i = require("./127849.js").RegExp,
  a = Chunk621523(function() {
    var e = i("a", "y");
    return module.lastIndex = 2, null !== module.exec("abcd")
  }),
  o = a || Chunk621523(function() {
    return !i("a", "y").sticky
  });
module.exports = {
  BROKEN_CARET: a || Chunk621523(function() {
    var e = i("^r", "gy");
    return module.lastIndex = 2, null !== module.exec("str")
  }),
  MISSED_STICKY: o,
  UNSUPPORTED_Y: a
}