/** Chunk was on web.js **/
/** chunk id: 350714, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk446474 = require("./446474.js"),
  Chunk101968 = require("./101968.js"),
  Chunk95959 = require("./95959.js");
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