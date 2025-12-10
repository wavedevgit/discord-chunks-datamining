/** Chunk was on web.js **/
/** chunk id: 494424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A,
  c: () => C
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
  let e = T();
  return 1 === module ? Chunk388032.intl.string(Chunk388032.t.NBae0i) : Chunk388032.intl.format(Chunk388032.t.GSynLW, {
    time: module
  })
}

function S() {
  let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumSubscription());
  return null != module && module.status === Chunk981631.O0b.CANCELED ? module : null
}

function I() {
  let e = S(),
    t = T();
  return null != module && exports >= y && exports <= O
}

function T() {
  let e = S();
  return null != module ? (0, Chunk74538.YN)(module) : 0
}

function C(e, t) {
  let n = (0, _.kG)(),
    r = I(),
    i = (0, p.S)(e, t);
  return null != n && r && i
}
let A = e => {
  var t;
  let {
    markAsDismissed: n,
    children: a,
    mode: u = "popover",
    tooltipDelay: f = 300,
    targetElementRef: p
  } = e, {
    analyticsLocations: S
  } = (0, l.ZP)(s.Z.TIERED_TENURE_BADGE_CHURN_REMINDER), I = v(), C = T(), A = null != (t = (0, _.kG)()) ? t : h.VU.PREMIUM_TENURE_1_MONTH, N = (0, i.useCallback)(() => {
    d.default.track(g.rMx.TOOLTIP_VIEWED, {
      type: "tiered_tenure_badge_churn_reminder"
    })
  }, []), P = (0, i.useCallback)(() => {
    null == n || n(E.L.TAKE_ACTION), (0, c.Z)({
      initialPlanId: null,
      subscriptionTier: null,
      analyticsLocations: S
    })
  }, [n, S]), R = [{
    text: b.intl.string(b.t.iIvF2z),
    variant: "expressive",
    icon: o.SrA,
    iconPosition: "start",
    onClick: P
  }], w = C >= y && C <= O ? Math.max(1, Math.min(100, (O - C) / O * 100)) : 1, D = C <= 10 ? "critical" : "warning";
  return (0, r.jsx)(m.Z, {
    badgeId: A,
    targetElementRef: p,
    body: I,
    mode: u,
    tooltipDelay: f,
    markAsDismissed: n,
    progressCircleText: "" + C,
    progressCirclePercent: w,
    progressCircleUrgency: D,
    actions: R,
    onShow: "tooltip" === u ? N : true,
    estimatedTooltipHeight: 300,
    children: a
  })
}