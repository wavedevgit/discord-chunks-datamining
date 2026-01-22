/** Chunk was on 47950 **/
/** chunk id: 800729, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk5264 = require("./5264.js"),
  Chunk688525 = require("./688525.js"),
  a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  i = /^\w*$/;
let l = function(e, t) {
  if ((0, n.A)(e)) returnfalse;
  var r = typeof e;
  return !!("number" == r || "symbol" == r || "boolean" == r || null == e || (0, o.A)(e)) || i.test(e) || !a.test(e) || null != t && e in Object(t)
}