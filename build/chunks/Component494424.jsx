/** Chunk was on web.js **/
/** chunk id: 494424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C,
  c: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk660000 = require("./660000.js"),
  Chunk848572 = require("./848572.js"),
  Chunk654939 = require("./654939.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let y = 1,
  O = 15;

function v() {
  let e = S();
  return 1 === module ? Chunk388032.intl.string(Chunk388032.t.NBae0i) : Chunk388032.intl.format(Chunk388032.t.GSynLW, {
    time: module
  })
}

function I() {
  let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumSubscription());
  return null != module && module.status === Chunk981631.O0b.CANCELED ? module : null
}

function T() {
  let e = I(),
    t = S();
  return null != module && exports >= y && exports <= O
}

function S() {
  let e = I();
  return null != module ? (0, Chunk74538.YN)(module) : 0
}

function A(e, t) {
  let n = (0, p.kG)(),
    r = T(),
    i = (0, _.S)(e, t);
  return null != n && r && i
}
let C = e => {
  var t;
  let {
    markAsDismissed: n,
    children: a,
    mode: u = "popover",
    tooltipDelay: f = 300,
    targetElementRef: _
  } = e, {
    analyticsLocations: I
  } = (0, l.ZP)(s.Z.TIERED_TENURE_BADGE_CHURN_REMINDER), T = v(), A = S(), C = null != (t = (0, p.kG)()) ? t : m.VU.PREMIUM_TENURE_1_MONTH, N = (0, i.useCallback)(() => {
    d.default.track(g.rMx.TOOLTIP_VIEWED, {
      type: "tiered_tenure_badge_churn_reminder"
    })
  }, []), R = (0, i.useCallback)(() => {
    null == n || n(E.L.TAKE_ACTION), (0, c.Z)({
      initialPlanId: null,
      subscriptionTier: null,
      analyticsLocations: I
    })
  }, [n, I]), P = [{
    text: b.intl.string(b.t.iIvF2z),
    variant: "expressive",
    icon: o.SrA,
    iconPosition: "start",
    onClick: R
  }], D = A >= y && A <= O ? Math.max(1, Math.min(100, (O - A) / O * 100)) : 1, w = A <= 10 ? "critical" : "warning";
  return (0, r.jsx)(h.Z, {
    badgeId: C,
    targetElementRef: _,
    body: T,
    mode: u,
    tooltipDelay: f,
    markAsDismissed: n,
    progressCircleText: "" + A,
    progressCirclePercent: D,
    progressCircleUrgency: w,
    actions: P,
    onShow: "tooltip" === u ? N : true,
    children: a
  })
}