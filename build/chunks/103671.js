/** Chunk was on 67244 **/
/** chunk id: 103671, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk665352 = require("./665352.js"),
  Chunk181568 = require("./181568.js");

function s(e, t, {
  epsilon: r = 75e-6
} = {}) {
  e = (0, n.Z)(e), t || (t = e.space), t = a.Z.get(t);
  let o = e.coords;
  return t !== e.space && (o = t.from(e)), t.inGamut(o, {
    epsilon: r
  })
}