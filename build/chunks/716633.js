/** Chunk was on 59275 **/
/** chunk id: 716633, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  x: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk4227 = require("./4227.js");
let a = e => {
  let t = (0, l.bG)([s.A], () => s.A.purchases);
  return (0, r.useMemo)(() => {
    let n = [],
      r = [];
    for (let l of e.values()) l.products.every(e => !!t.get(e.skuId)) ? n.push(l) : r.push(l);
    return r.concat(n)
  }, [e, t])
}