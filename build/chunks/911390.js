/** Chunk was on 45620 **/
/** chunk id: 911390, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk1870 = require("./1870.js");

function a(e, t) {
  let n = r.useMemo(() => {
      var n;
      return null != (n = null == e ? true : e.products.filter(e => e.skuId !== t).map(e => e.skuId)) ? n : []
    }, [null == e ? true : e.products, t]),
    a = (0, l.e7)([i.Z], () => i.Z.getPurchases(n));
  return {
    readyToClaim: r.useMemo(() => a.length === n.length, [a, n]),
    collectibleProductSkuIds: n,
    collectedSkuIds: a
  }
}