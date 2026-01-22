/** Chunk was on 47950 **/
/** chunk id: 834346, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk820528 = require("./820528.js"),
  Chunk446003 = require("./446003.js");
let a = function(e, t, r, a) {
  var i = !r;
  r || (r = {});
  for (var l = false, s = t.length; ++l < s;) {
    var u = t[l],
      c = a ? a(r[u], e[u], u, r, e) : true;
    true === c && (c = e[u]), i ? (0, o.A)(r, u, c) : (0, n.A)(r, u, c)
  }
  return r
}