/** Chunk was on 67244 **/
/** chunk id: 33838, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk857702 = require("./857702.js"),
  Chunk181568 = require("./181568.js");

function s(e, t) {
  [e, t] = (0, n.Z)([e, t]);
  let [r, s, o] = a.Z.from(e), [i, c, l] = a.Z.from(t);
  Number.isNaN(o) && Number.isNaN(l) ? (o = 0, l = 0) : Number.isNaN(o) ? o = l : Number.isNaN(l) && (l = o);
  let u = 2 * Math.sqrt(s * c) * Math.sin((o - l) / 2 * (Math.PI / 180));
  return Math.sqrt((r - i) ** 2 + (s - c) ** 2 + u ** 2)
}