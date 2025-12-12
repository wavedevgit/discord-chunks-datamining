/** Chunk was on 45620 **/
/** chunk id: 911390, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => i
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk1870 = require("./1870.js");

function i(e, t) {
  let n = r.useMemo(() => {
      var n;
      return null != (n = null == e ? true : e.products.filter(e => e.skuId !== t).map(e => e.skuId)) ? n : []
    }, [null == e ? true : e.products, t]),
    i = (0, l.e7)([o.Z], () => o.Z.getPurchases(n));
  return {
    readyToClaim: r.useMemo(() => i.length === n.length, [i, n]),
    collectibleProductSkuIds: n,
    collectedSkuIds: i
  }
}