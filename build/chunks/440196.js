/** Chunk was on web.js **/
"use strict";
var r = n(936940),
  i = n(161581).RegExp;
e.exports = r(function() {
  var e = i("(?<a>b)", "g");
  return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
})