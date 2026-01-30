/** Chunk was on web.js **/
/** chunk id: 210507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nn: () => d,
  _V: () => u,
  pt: () => c
});
var Chunk531260 = require("./531260.js"),
  Chunk615396 = require("./615396.js"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk519412 = require("./519412.js");
let c = e => {
    let {
      fractionalPremiumInfo: t,
      selectedPlanId: n,
      planGroup: r,
      premiumSubscription: o,
      isGift: s
    } = e, l = null != o && null != n && (0, i.Ge)(o, n, r);
    return t.isFractionalPremiumActive && (null == o || l) && !s && null != n && a.JM.has(n)
  },
  u = e => {
    let {
      selectedPlanId: t,
      planGroup: n,
      premiumSubscription: i,
      isGift: a
    } = e, o = (0, r.A)({
      forceFetch: false,
      excludeReverseTrial: false,
      excludeReverseTrialFromCountdown: true
    });
    return {
      showFractionalPremiumBanner: c({
        fractionalPremiumInfo: o,
        selectedPlanId: t,
        planGroup: n,
        premiumSubscription: i,
        isGift: a
      }),
      fractionalPremiumInfo: o
    }
  },
  d = () => s.intl.formatToPlainString(l.default["h1i+H8"], {
    premiumGroupProductName: (0, o.DP)(),
    cooldownMonths: o.wl
  })