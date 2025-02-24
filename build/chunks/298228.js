/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  O: () => o
}), r(47120), r(653041);
var n = r(192379),
  i = r(399606),
  l = r(1870);
let o = e => {
  let t = (0, i.e7)([l.Z], () => l.Z.purchases);
  return (0, n.useMemo)(() => {
    let r = [],
      n = [];
    for (let i of e.values()) i.products.every(e => !!t.get(e.skuId)) ? r.push(i) : n.push(i);
    return n.concat(r)
  }, [e, t])
}