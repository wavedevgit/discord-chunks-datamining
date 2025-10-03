/** Chunk was on 54628 **/
/** chunk id: 103671, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk665352 = require("./665352.js"),
  Chunk181568 = require("./181568.js");

function o(e, t, {
  epsilon: r = 75e-6
} = {}) {
  e = (0, n.Z)(e), t || (t = e.space), t = a.Z.get(t);
  let s = e.coords;
  return t !== e.space && (s = t.from(e)), t.inGamut(s, {
    epsilon: r
  })
}