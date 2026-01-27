/** Chunk was on web.js **/
/** chunk id: 312852, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk4227 = require("./4227.js"),
  Chunk623373 = require("./623373.js");
let o = e => {
  let t = (0, r.bG)([i.A], () => i.A.purchases);
  return null != e && (0, a.B1)(e) ? Math.max(0, e.variants.findIndex(e => !t.has(e.skuId))) : 0
}