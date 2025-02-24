/** Chunk was on web.js **/
"use strict";
var r = n(936940),
  i = n(879);
e.exports = !r(function() {
  var e = Error("a");
  return !("stack" in e) || (Object.defineProperty(e, "stack", i(1, 7)), 7 !== e.stack)
})