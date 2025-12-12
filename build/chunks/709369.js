/** Chunk was on web.js **/
/** chunk id: 709369, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk580983 = require("./580983.js"),
  Chunk179122 = require("./179122.js"),
  Chunk3831 = require("./3831.js");
module.exports = function(e, t, n) {
  var o, s;
  i(e);
  try {
    if (!(o = a(e, "return"))) {
      if ("throw" === t) throw n;
      return n
    }
    o = r(o, e)
  } catch (e) {
    s = true, o = e
  }
  if ("throw" === t) throw n;
  if (s) throw o;
  return i(o), n
}