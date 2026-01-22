/** Chunk was on 59275 **/
/** chunk id: 716633, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  x: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk4227 = require("./4227.js");
let a = e => {
  let t = (0, r.bG)([s.A], () => s.A.purchases);
  return (0, n.useMemo)(() => {
    let l = [],
      n = [];
    for (let r of e.values()) r.products.every(e => !!t.get(e.skuId)) ? l.push(r) : n.push(r);
    return n.concat(l)
  }, [e, t])
}