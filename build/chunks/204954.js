/** Chunk was on web.js **/
/** chunk id: 204954, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk621523 = require("./621523.js"),
  i = require("./127849.js").RegExp;
module.exports = Chunk621523(function() {
  var e = i("(?<a>b)", "g");
  return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
})