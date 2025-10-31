/** Chunk was on 78825 **/
/** chunk id: 290175, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  G: () => o
});
var Chunk314794 = require("./314794.js"),
  Chunk442837 = require("./442837.js"),
  Chunk78839 = require("./78839.js"),
  Chunk388032 = require("./388032.jsx");
let o = e => {
  let n = (0, l.e7)([i.Z], () => {
    let e = i.Z.getPremiumSubscription();
    return (null == e ? true : e.isPurchasedExternally) === true
  });
  return e === r.a.PREMIUM_TIER_2_3_DAY ? {
    isDisabled: n,
    disabledReason: n ? a.intl.string(a.t.NbveHD) : null
  } : {
    isDisabled: false,
    disabledReason: null
  }
}