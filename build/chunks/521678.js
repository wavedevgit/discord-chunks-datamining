/** Chunk was on 66382 **/
/** chunk id: 521678, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk175056 = require("./175056.js"),
  Chunk906024 = require("./906024.js"),
  a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  i = /^\w*$/;
let l = function(e, t) {
  if ((0, n.Z)(e)) returnfalse;
  var r = typeof e;
  return !!("number" == r || "symbol" == r || "boolean" == r || null == e || (0, o.Z)(e)) || i.test(e) || !a.test(e) || null != t && e in Object(t)
}