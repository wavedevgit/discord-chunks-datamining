/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  l: () => c
}), r(47120), r(653041);
var n = r(192379),
  l = r(952639),
  i = r.n(l),
  o = r(399606),
  a = r(1870),
  s = r(724994);
let c = e => {
  let t = (0, o.e7)([a.Z], () => a.Z.purchases);
  return (0, n.useMemo)(() => {
    let t = [
      [],
      [],
      [],
      []
    ];
    for (let r of e.values()) {
      let {
        isPurchased: e,
        isPartiallyOwnedBundle: n,
        isPartiallyOwnedVariantsGroup: l
      } = (0, s.U)(a.Z, r);
      t[n ? 2 : l ? 1 : 3 * !!e].push(r)
    }
    return i()(t)
  }, [t, e])
}