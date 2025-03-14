/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  l: () => c
}), n(47120), n(653041);
var r = n(192379),
  l = n(952639),
  a = n.n(l),
  o = n(399606),
  s = n(1870),
  i = n(724994);
let c = e => {
  let t = (0, o.e7)([s.Z], () => s.Z.purchases);
  return (0, r.useMemo)(() => {
    let t = [
      [],
      [],
      [],
      []
    ];
    for (let n of e.values()) {
      let {
        isPurchased: e,
        isPartiallyOwnedBundle: r,
        isPartiallyOwnedVariantsGroup: l
      } = (0, i.U)(s.Z, n);
      t[r ? 2 : l ? 1 : 3 * !!e].push(n)
    }
    return a()(t)
  }, [t, e])
}