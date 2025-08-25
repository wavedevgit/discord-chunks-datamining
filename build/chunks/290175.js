/** Chunk was on web.js **/
/** chunk id: 290175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => s
});
var Chunk314794 = require("./314794.js"),
  Chunk442837 = require("./442837.js"),
  Chunk78839 = require("./78839.js"),
  Chunk388032 = require("./388032.jsx");
let s = e => {
  let t = (0, i.e7)([o.Z], () => {
    let e = o.Z.getPremiumSubscription();
    return (null == e ? true : e.isPurchasedExternally) === true
  });
  return e === r.a.PREMIUM_TIER_2_3_DAY ? {
    isDisabled: t,
    disabledReason: t ? a.intl.string(a.t.NbveHB) : null
  } : {
    isDisabled: false,
    disabledReason: null
  }
}