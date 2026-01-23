/** Chunk was on web.js **/
/** chunk id: 40185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cg: () => N,
  hb: () => w,
  nq: () => R
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk607399 = require("./607399.js"),
  Chunk417597 = require("./417597.js"),
  Chunk384904 = require("./384904.js"),
  Chunk86379 = require("./86379.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk816733 = require("./816733.js"),
  Chunk469778 = require("./469778.js"),
  Chunk723702 = require("./723702.js"),
  Chunk927578 = require("./927578.js"),
  Chunk478097 = require("./478097.js"),
  Chunk238000 = require("./238000.js"),
  Chunk196042 = require("./196042.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk586983 = require("./586983.js"),
  Chunk597758 = require("./597758.js"),
  Chunk35587 = require("./35587.js"),
  Chunk412260 = require("./412260.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js");
let T = 10;

function C(e) {
  let {
    experimentEnabled: t,
    premiumSubscription: n,
    mostRecentSubscription: r,
    previousPremiumSubscription: s
  } = e;
  if (!t) returnfalse;
  if (null != r && r.status === S.Dmq.ENDED) {
    let e = r.endedAt,
      t = r.hasPremiumAtLeast(I.PremiumTypes.TIER_2);
    if (null != e && t && i()().subtract(T, "days").isBefore(e)) returnfalse
  }
  if (null != s && s.status === S.Dmq.ENDED) {
    let e = s.endedAt,
      t = s.hasPremiumAtLeast(I.PremiumTypes.TIER_2);
    if (null != e && t && i()().subtract(T, "days").isBefore(e)) returnfalse
  }
  if (null != n) {
    let e = n.hasPremiumAtLeast(I.PremiumTypes.TIER_2),
      t = c.default.getCurrentUser(),
      r = !!(null == n ? true : n.hasActiveTrial) && _.Ay.isPremiumExactly(t, I.PremiumTypes.TIER_0),
      i = (0, p.isAndroid)() && n.paymentGateway !== S.kM_.GOOGLE;
    if (e || r || i) returnfalse
  }
  return !(a.Fr && f.A.isFractionalPremiumActive())
}

function N() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    {
      paymentsBlocked: n
    } = l.A.useExperiment({
      location: "153d31_1"
    }, {
      autoTrackExposure: false
    }),
    {
      promotion: r
    } = (0, v.Eu)(),
    {
      enabled: i
    } = (0, g.Ay)(),
    {
      enabled: o
    } = (0, m.Ay)(),
    {
      mostRecentSubscription: c,
      premiumSubscription: d,
      previousPremiumSubscription: f
    } = (0, s.cf)([u.A], () => ({
      mostRecentSubscription: u.A.getMostRecentPremiumTypeSubscription(),
      premiumSubscription: u.A.getPremiumTypeSubscription(),
      previousPremiumSubscription: u.A.getPreviousPremiumTypeSubscription()
    })),
    _ = (0, y.V)(),
    O = (0, E.O)(),
    A = new Date(null != (e = null == r ? true : r.endDate) ? e : 0).valueOf(),
    I = Date.now(),
    S = I > A;
  (0, b.A)({
    delay: S ? false : A - I
  });
  let T = !a.Fr || (0, p.isAndroid)() && o,
    N = C({
      experimentEnabled: i,
      premiumSubscription: d,
      mostRecentSubscription: c,
      previousPremiumSubscription: f
    }),
    R = T && N && null == _ && null != r && !n && null == O,
    {
      enabled: w
    } = h.A.useExperiment({
      location: "153d31_2"
    }, {
      autoTrackExposure: R,
      disable: !R
    });
  return !S && (t ? w : R)
}
async function R() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    n = c.default.getCurrentUser(),
    r = !(null == n ? true : n.isClaimed()),
    {
      paymentsBlocked: i
    } = l.A.getCurrentConfig({
      location: "153d31_3"
    }, {
      autoTrackExposure: false
    }),
    {
      enabled: s
    } = (0, g.fy)(),
    {
      enabled: f
    } = (0, m.LB)(),
    {
      enabled: p
    } = h.A.getCurrentConfig({
      location: "153d31_4"
    }, {
      autoTrackExposure: false
    }),
    _ = !a.Fr || f;
  if (r || i || !s || t && !p || !_ || d.A.hasFetchedOffer() && (d.A.hasAnyUnexpiredOffer() || d.A.hasAnyUnexpiredDiscountOffer())) returnfalse;
  !u.A.hasFetchedMostRecentPremiumTypeSubscription() && (null == (e = c.default.getCurrentUser()) ? true : e.hasPurchasedFlag(I.lA.PREMIUM_TIER_2)) && await (0, o.I8)(), u.A.hasFetchedSubscriptions() || await (0, o.hP)();
  let E = u.A.getMostRecentPremiumTypeSubscription();
  return C({
    experimentEnabled: s,
    premiumSubscription: u.A.getPremiumTypeSubscription(),
    mostRecentSubscription: E,
    previousPremiumSubscription: u.A.getPreviousPremiumTypeSubscription()
  })
}
async function w() {
  if (!await R(false)) return;
  let e = A.A.bogoPromotion;
  null != e && new Date(e.endDate).valueOf() >= Date.now() || await (0, O.hS)()
}