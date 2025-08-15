/** Chunk was on 45620 **/
/** chunk id: 298228, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  O: () => i
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk1870 = require("./1870.js");
let i = e => {
  let t = (0, l.e7)([a.Z], () => a.Z.purchases);
  return (0, n.useMemo)(() => {
    let r = [],
      n = [];
    for (let l of e.values()) l.products.every(e => !!t.get(e.skuId)) ? r.push(l) : n.push(l);
    return n.concat(r)
  }, [e, t])
}