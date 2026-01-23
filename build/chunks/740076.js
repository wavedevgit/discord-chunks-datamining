/** Chunk was on 21724 **/
/** chunk id: 740076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => o
});
var Chunk334279 = require("./334279.js"),
  Chunk311907 = require("./311907.js"),
  Chunk166403 = require("./166403.js"),
  Chunk985018 = require("./985018.jsx");
let o = e => {
  let t = (0, l.bG)([a.A], () => {
    let e = a.A.getPremiumSubscription();
    return (null == e ? true : e.isPurchasedExternally) === true
  });
  return e === r.j.PREMIUM_TIER_2_3_DAY ? {
    isDisabled: t,
    disabledReason: t ? i.intl.string(i.t.NbveHD) : null
  } : {
    isDisabled: false,
    disabledReason: null
  }
}