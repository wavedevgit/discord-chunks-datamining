/** Chunk was on web.js **/
/** chunk id: 919971, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk503628 = require("./503628.js"),
  i = require("./860511.js").RegExp;
module.exports = Chunk503628(function() {
  var e = i("(?<a>b)", "g");
  return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
})