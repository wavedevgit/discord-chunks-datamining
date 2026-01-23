/** Chunk was on 59275 **/
/** chunk id: 357704, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk4227 = require("./4227.js");

function a(e, t) {
  let n = r.useMemo(() => {
      var n;
      return null != (n = null == e ? true : e.products.filter(e => e.skuId !== t).map(e => e.skuId)) ? n : []
    }, [null == e ? true : e.products, t]),
    a = (0, l.bG)([s.A], () => s.A.getPurchases(n));
  return {
    readyToClaim: r.useMemo(() => a.length === n.length, [a, n]),
    collectibleProductSkuIds: n,
    collectedSkuIds: a
  }
}