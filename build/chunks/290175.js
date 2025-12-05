/** Chunk was on 75393 **/
/** chunk id: 290175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => s
});
var Chunk314794 = require("./314794.js"),
  Chunk442837 = require("./442837.js"),
  Chunk78839 = require("./78839.js"),
  Chunk388032 = require("./388032.jsx");
let s = e => {
  let t = (0, l.e7)([r.Z], () => {
    let e = r.Z.getPremiumSubscription();
    return (null == e ? true : e.isPurchasedExternally) === true
  });
  return e === a.a.PREMIUM_TIER_2_3_DAY ? {
    isDisabled: t,
    disabledReason: t ? i.intl.string(i.t.NbveHD) : null
  } : {
    isDisabled: false,
    disabledReason: null
  }
}