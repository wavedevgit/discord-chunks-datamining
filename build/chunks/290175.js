/** Chunk was on 71459 **/
"use strict";
r.d(t, {
  G: () => a
});
var n = r(314794),
  i = r(442837),
  o = r(78839),
  l = r(388032);
let a = e => {
  let t = (0, i.e7)([o.ZP], () => {
    let e = o.ZP.getPremiumSubscription();
    return (null == e ? void 0 : e.isPurchasedExternally) === !0
  });
  return e === n.a.PREMIUM_TIER_2_3_DAY ? {
    isDisabled: t,
    disabledReason: t ? l.NW.string(l.t.NbveHB) : null
  } : {
    isDisabled: !1,
    disabledReason: null
  }
}