/** Chunk was on web.js **/
/** chunk id: 367074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qw: () => P,
  Vi: () => N,
  l2: () => w
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
let C = 10;

function A(e) {
  let {
    experimentEnabled: t,
    premiumSubscription: n,
    mostRecentSubscription: r,
    previousPremiumSubscription: o
  } = e;
  if (!t) returnfalse;
  if (null != r && r.status === T.O0b.ENDED) {
    let e = r.endedAt,
      t = r.hasPremiumAtLeast(I.PremiumTypes.TIER_2);
    if (null != e && t && i()().subtract(C, "days").isBefore(e)) returnfalse
  }
  if (null != o && o.status === T.O0b.ENDED) {
    let e = o.endedAt,
      t = o.hasPremiumAtLeast(I.PremiumTypes.TIER_2);
    if (null != e && t && i()().subtract(C, "days").isBefore(e)) returnfalse
  }
  if (null != n) {
    let e = n.hasPremiumAtLeast(I.PremiumTypes.TIER_2),
      t = c.default.getCurrentUser(),
      r = !!(null == n ? true : n.hasActiveTrial) && _.ZP.isPremiumExactly(t, I.PremiumTypes.TIER_0),
      i = (0, p.isAndroid)() && n.paymentGateway !== T.gg$.GOOGLE;
    if (e || r || i) returnfalse
  }
  return !(a.tq && f.Z.isFractionalPremiumActive())
}

function N() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    {
      paymentsBlocked: n
    } = l.Z.useExperiment({
      location: "153d31_1"
    }, {
      autoTrackExposure: false
    }),
    {
      promotion: r
    } = (0, v.mq)(),
    {
      enabled: i
    } = (0, g.ZP)(),
    {
      enabled: s
    } = (0, m.ZP)(),
    {
      mostRecentSubscription: c,
      premiumSubscription: d,
      previousPremiumSubscription: f
    } = (0, o.cj)([u.Z], () => ({
      mostRecentSubscription: u.Z.getMostRecentPremiumTypeSubscription(),
      premiumSubscription: u.Z.getPremiumTypeSubscription(),
      previousPremiumSubscription: u.Z.getPreviousPremiumTypeSubscription()
    })),
    _ = (0, b.N)(),
    O = (0, E.N)(),
    S = new Date(null != (e = null == r ? true : r.endDate) ? e : 0).valueOf(),
    I = Date.now(),
    T = I > S;
  (0, y.Z)({
    delay: T ? false : S - I
  });
  let C = !a.tq || (0, p.isAndroid)() && s,
    N = A({
      experimentEnabled: i,
      premiumSubscription: d,
      mostRecentSubscription: c,
      previousPremiumSubscription: f
    }),
    P = C && N && null == _ && null != r && !n && null == O,
    {
      enabled: w
    } = h.Z.useExperiment({
      location: "153d31_2"
    }, {
      autoTrackExposure: P,
      disable: !P
    });
  return !T && (t ? w : P)
}
async function P() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    n = c.default.getCurrentUser(),
    r = !(null == n ? true : n.isClaimed()),
    {
      paymentsBlocked: i
    } = l.Z.getCurrentConfig({
      location: "153d31_3"
    }, {
      autoTrackExposure: false
    }),
    {
      enabled: o
    } = (0, g.aW)(),
    {
      enabled: f
    } = (0, m.oW)(),
    {
      enabled: p
    } = h.Z.getCurrentConfig({
      location: "153d31_4"
    }, {
      autoTrackExposure: false
    }),
    _ = !a.tq || f;
  if (r || i || !o || t && !p || !_ || d.Z.hasFetchedOffer() && (d.Z.hasAnyUnexpiredOffer() || d.Z.hasAnyUnexpiredDiscountOffer())) returnfalse;
  !u.Z.hasFetchedMostRecentPremiumTypeSubscription() && (null == (e = c.default.getCurrentUser()) ? true : e.hasPurchasedFlag(I.in.PREMIUM_TIER_2)) && await (0, s.ou)(), u.Z.hasFetchedSubscriptions() || await (0, s.jg)();
  let E = u.Z.getMostRecentPremiumTypeSubscription();
  return A({
    experimentEnabled: o,
    premiumSubscription: u.Z.getPremiumTypeSubscription(),
    mostRecentSubscription: E,
    previousPremiumSubscription: u.Z.getPreviousPremiumTypeSubscription()
  })
}
async function w() {
  if (!await P(false)) return;
  let e = S.Z.bogoPromotion;
  null != e && new Date(e.endDate).valueOf() >= Date.now() || await (0, O.L9)()
}