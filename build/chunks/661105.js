/** Chunk was on 54628 **/
/** chunk id: 661105, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk181568 = require("./181568.js"),
  Chunk665352 = require("./665352.js"),
  Chunk262281 = require("./262281.js");

function s(e, t, {
  inGamut: r
} = {}) {
  e = (0, a.Z)(e);
  let i = (t = n.Z.get(t)).from(e),
    c = {
      space: t,
      coords: i,
      alpha: e.alpha
    };
  return r && (c = (0, o.Z)(c, true === r ? true : r)), c
}
s.returns = "color"