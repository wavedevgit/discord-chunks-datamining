/** Chunk was on web.js **/
/** chunk id: 367074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qw: () => R,
  Vi: () => N,
  l2: () => P
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk873546 = require("./873546.js"),
  Chunk399606 = require("./399606.js"),
  Chunk355467 = require("./355467.js"),
  Chunk211242 = require("./211242.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk431 = require("./431.js"),
  Chunk580130 = require("./580130.js"),
  Chunk358085 = require("./358085.js"),
  Chunk74538 = require("./74538.js"),
  Chunk617799 = require("./617799.js"),
  Chunk84053 = require("./84053.js"),
  Chunk61196 = require("./61196.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk921022 = require("./921022.js"),
  Chunk748770 = require("./748770.js"),
  Chunk725727 = require("./725727.js"),
  Chunk1844 = require("./1844.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");
let A = 10;

function C(e) {
  let {
    experimentEnabled: t,
    premiumSubscription: n,
    mostRecentSubscription: r,
    previousPremiumSubscription: o
  } = e;
  if (!t) returnfalse;
  if (null != r && r.status === S.O0b.ENDED) {
    let e = r.endedAt,
      t = r.hasPremiumAtLeast(T.PremiumTypes.TIER_2);
    if (null != e && t && i()().subtract(A, "days").isBefore(e)) returnfalse
  }
  if (null != o && o.status === S.O0b.ENDED) {
    let e = o.endedAt,
      t = o.hasPremiumAtLeast(T.PremiumTypes.TIER_2);
    if (null != e && t && i()().subtract(A, "days").isBefore(e)) returnfalse
  }
  if (null != n) {
    let e = n.hasPremiumAtLeast(T.PremiumTypes.TIER_2),
      t = c.default.getCurrentUser(),
      r = !!(null == n ? true : n.hasActiveTrial) && p.ZP.isPremiumExactly(t, T.PremiumTypes.TIER_0),
      i = (0, _.isAndroid)() && n.paymentGateway !== S.gg$.GOOGLE;
    if (e || r || i) returnfalse
  }
  return !(a.tq && f.Z.isFractionalPremiumActive())
}

function N() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    {
      paymentsBlocked: n
    } = Chunk211242.Z.useExperiment({
      location: "153d31_1"
    }, {
      autoTrackExposure: false
    }),
    {
      promotion: r
    } = (0, Chunk725727.mq)(),
    {
      enabled: i
    } = (0, Chunk61196.ZP)(),
    {
      enabled: s
    } = (0, Chunk84053.ZP)(),
    {
      mostRecentSubscription: c,
      premiumSubscription: d,
      previousPremiumSubscription: f
    } = (0, Chunk399606.cj)([Chunk78839.Z], () => ({
      mostRecentSubscription: Chunk78839.Z.getMostRecentPremiumTypeSubscription(),
      premiumSubscription: Chunk78839.Z.getPremiumTypeSubscription(),
      previousPremiumSubscription: Chunk78839.Z.getPreviousPremiumTypeSubscription()
    })),
    p = (0, Chunk639119.N)(),
    O = (0, Chunk622909.N)(),
    I = new Date(null != (e = null == Chunk913527 ? true : Chunk913527.endDate) ? module : 0).valueOf(),
    T = Date.now(),
    S = Chunk474936 > Chunk1844;
  (0, Chunk921022.Z)({
    delay: Chunk981631 ? false : Chunk1844 - Chunk474936
  });
  let A = !Chunk873546.tq || (0, Chunk358085.isAndroid)() && Chunk355467,
    N = C({
      experimentEnabled: i,
      premiumSubscription: Chunk431,
      mostRecentSubscription: Chunk594174,
      previousPremiumSubscription: Chunk580130
    }),
    R = A && N && null == Chunk74538 && null != Chunk913527 && !require && null == Chunk748770,
    {
      enabled: P
    } = Chunk617799.Z.useExperiment({
      location: "153d31_2"
    }, {
      autoTrackExposure: R,
      disable: !R
    });
  return !Chunk981631 && (exports ? P : R)
}
async function R() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    n = Chunk594174.default.getCurrentUser(),
    r = !(null == require ? true : require.isClaimed()),
    {
      paymentsBlocked: i
    } = Chunk211242.Z.getCurrentConfig({
      location: "153d31_3"
    }, {
      autoTrackExposure: false
    }),
    {
      enabled: o
    } = (0, Chunk61196.aW)(),
    {
      enabled: f
    } = (0, Chunk84053.oW)(),
    {
      enabled: _
    } = Chunk617799.Z.getCurrentConfig({
      location: "153d31_4"
    }, {
      autoTrackExposure: false
    }),
    p = !Chunk873546.tq || Chunk580130;
  if (Chunk913527 || i || !Chunk399606 || exports && !Chunk358085 || !Chunk74538 || Chunk431.Z.hasFetchedOffer() && (Chunk431.Z.hasAnyUnexpiredOffer() || Chunk431.Z.hasAnyUnexpiredDiscountOffer())) returnfalse;
  !Chunk78839.Z.hasFetchedMostRecentPremiumTypeSubscription() && (null == (e = Chunk594174.default.getCurrentUser()) ? true : module.hasPurchasedFlag(Chunk474936.in.PREMIUM_TIER_2)) && await (0, Chunk355467.ou)(), Chunk78839.Z.hasFetchedSubscriptions() || await (0, Chunk355467.jg)();
  let E = Chunk78839.Z.getMostRecentPremiumTypeSubscription();
  return C({
    experimentEnabled: Chunk399606,
    premiumSubscription: Chunk78839.Z.getPremiumTypeSubscription(),
    mostRecentSubscription: Chunk622909,
    previousPremiumSubscription: Chunk78839.Z.getPreviousPremiumTypeSubscription()
  })
}
async function P() {
  if (!await R(false)) return;
  let e = Chunk1844.Z.bogoPromotion;
  null != module && new Date(module.endDate).valueOf() >= Date.now() || await (0, Chunk748770.L9)()
}