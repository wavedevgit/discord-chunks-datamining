/** Chunk was on 31422 **/
/** chunk id: 181568, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk665352 = require("./665352.js"),
  Chunk37484 = require("./37484.js"),
  Chunk94367 = require("./94367.js");

function o(e) {
  if (Array.isArray(e)) return e.map(o);
  if (!e) throw TypeError("Empty color reference");
  (0, n.HD)(e) && (e = (0, s.Z)(e));
  let t = e.space || e.spaceId;
  return t instanceof a.Z || (e.space = a.Z.get(t)), true === e.alpha && (e.alpha = 1), e
}