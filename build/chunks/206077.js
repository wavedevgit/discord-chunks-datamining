/** Chunk was on 59275 **/
/** chunk id: 206077, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  X: () => o
}), require("./896048.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk417597 = require("./417597.js"),
  Chunk4227 = require("./4227.js");
let i = (e, t) => {
    if (e.type === r.R.BUNDLE && e.items.some(e => t.includes(e.skuId))) return 2;
    if (e.type === r.R.VARIANTS_GROUP) {
      var l, n;
      if (null != (l = null == (n = e.variants) ? true : n.some(e => t.includes(e.skuId))) && l) return 1
    }
    return 3 * !!t.includes(e.skuId)
  },
  o = e => {
    let t = (0, s.bG)([a.A], () => a.A.purchases),
      l = (0, n.useMemo)(() => [...t].map(e => {
        let [t] = e;
        return t
      }), [t]);
    return (0, n.useMemo)(() => [...e].sort((e, t) => i(e, l) - i(t, l)), [e, l])
  }