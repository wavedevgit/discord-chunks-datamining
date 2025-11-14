/** Chunk was on web.js **/
/** chunk id: 494424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A,
  c: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
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
let b = 1,
  y = 15;

function O() {
  let e = T();
  return 1 === module ? Chunk388032.intl.string(Chunk388032.t.NBae0i) : Chunk388032.intl.format(Chunk388032.t.GSynLW, {
    time: module
  })
}

function v() {
  let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumSubscription());
  return null != module && module.status === Chunk981631.O0b.CANCELED ? module : null
}

function I() {
  let e = v(),
    t = T();
  return null != module && exports >= b && exports <= y
}

function T() {
  let e = v();
  return null != module ? (0, Chunk74538.YN)(module) : 0
}

function S(e, t) {
  let n = (0, _.kG)(),
    r = I(),
    i = (0, f.S)(e, t);
  return null != n && r && i
}
let A = e => {
  var t;
  let {
    markAsDismissed: n,
    children: a,
    mode: c = "popover",
    tooltipDelay: d = 300,
    targetElementRef: f
  } = e, {
    analyticsLocations: v
  } = (0, s.ZP)(o.Z.TIERED_TENURE_BADGE_CHURN_REMINDER), I = O(), S = T(), A = null != (t = (0, _.kG)()) ? t : h.VU.PREMIUM_TENURE_1_MONTH, C = (0, i.useCallback)(() => {
    u.default.track(m.rMx.TOOLTIP_VIEWED, {
      type: "tiered_tenure_badge_churn_reminder"
    })
  }, []), N = (0, i.useCallback)(() => {
    null == n || n(g.L.TAKE_ACTION), (0, l.Z)({
      initialPlanId: null,
      subscriptionTier: null,
      analyticsLocations: v
    })
  }, [n, v]), R = [{
    text: E.intl.string(E.t.iIvF2z),
    variant: "expressive",
    onClick: N
  }], P = S >= b && S <= y ? Math.max(1, Math.min(100, (y - S) / y * 100)) : 1, D = S <= 10 ? "critical" : "warning";
  return (0, r.jsx)(p.Z, {
    badgeId: A,
    targetElementRef: f,
    body: I,
    mode: c,
    tooltipDelay: d,
    markAsDismissed: n,
    progressCircleText: "" + S,
    progressCirclePercent: P,
    progressCircleUrgency: D,
    actions: R,
    onShow: "tooltip" === c ? C : true,
    children: a
  })
}