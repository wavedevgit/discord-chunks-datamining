/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
var r = n(936940),
  i = n(161581).RegExp,
  o = r(function() {
    var e = i("a", "y");
    return e.lastIndex = 2, null !== e.exec("abcd")
  }),
  a = o || r(function() {
    return !i("a", "y").sticky
  }),
  s = o || r(function() {
    var e = i("^r", "gy");
    return e.lastIndex = 2, null !== e.exec("str")
  });
e.exports = {
  BROKEN_CARET: s,
  MISSED_STICKY: a,
  UNSUPPORTED_Y: o
}