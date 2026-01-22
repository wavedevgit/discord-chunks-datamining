/** Chunk was on 59275 **/
/** chunk id: 357704, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk4227 = require("./4227.js");

function a(e, t) {
  let l = n.useMemo(() => {
      var l;
      return null != (l = null == e ? true : e.products.filter(e => e.skuId !== t).map(e => e.skuId)) ? l : []
    }, [null == e ? true : e.products, t]),
    a = (0, r.bG)([s.A], () => s.A.getPurchases(l));
  return {
    readyToClaim: n.useMemo(() => a.length === l.length, [a, l]),
    collectibleProductSkuIds: l,
    collectedSkuIds: a
  }
}