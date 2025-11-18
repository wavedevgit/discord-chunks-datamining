/** Chunk was on 45620 **/
/** chunk id: 937510, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => o
}), require("./388685.js"), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js"),
  Chunk399606 = require("./399606.js"),
  Chunk1870 = require("./1870.js");
let s = (e, t) => {
    if (e.type === l.Z.BUNDLE && e.items.some(e => t.includes(e.skuId))) return 2;
    if (e.type === l.Z.VARIANTS_GROUP) {
      var n, r;
      if (null != (r = null == (n = e.variants) ? true : n.some(e => t.includes(e.skuId))) && r) return 1
    }
    return 3 * !!t.includes(e.skuId)
  },
  o = e => {
    let t = (0, i.e7)([a.Z], () => a.Z.purchases),
      n = (0, r.useMemo)(() => [...t].map(e => {
        let [t] = e;
        return t
      }), [t]);
    return (0, r.useMemo)(() => [...e].sort((e, t) => s(e, n) - s(t, n)), [e, n])
  }