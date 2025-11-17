/** Chunk was on 45620 **/
/** chunk id: 298228, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  O: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk1870 = require("./1870.js");
let a = e => {
  let t = (0, l.e7)([i.Z], () => i.Z.purchases);
  return (0, r.useMemo)(() => {
    let n = [],
      r = [];
    for (let l of e.values()) l.products.every(e => !!t.get(e.skuId)) ? n.push(l) : r.push(l);
    return r.concat(n)
  }, [e, t])
}