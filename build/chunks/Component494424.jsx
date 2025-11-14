/** Chunk was on web.js **/
/** chunk id: 494424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S,
  c: () => T
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
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let E = 1,
  b = 15;

function y() {
  let e = I();
  return 1 === module ? Chunk388032.intl.string(Chunk388032.t.NBae0i) : Chunk388032.intl.format(Chunk388032.t.GSynLW, {
    time: module
  })
}

function O() {
  let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumSubscription());
  return null != module && module.status === Chunk981631.O0b.CANCELED ? module : null
}

function v() {
  let e = O(),
    t = I();
  return null != module && exports >= E && exports <= b
}

function I() {
  let e = O();
  return null != module ? (0, Chunk74538.YN)(module) : 0
}

function T(e, t) {
  let n = (0, _.Rw)(),
    r = v(),
    i = (0, f.S)(e, t);
  return (null == n ? true : n.status) === _.Vq.EARNED && r && i
}
let S = e => {
  let {
    markAsDismissed: t,
    children: n,
    mode: a = "popover",
    tooltipDelay: c = 300,
    targetElementRef: d
  } = e, {
    analyticsLocations: f
  } = (0, s.ZP)(o.Z.TIERED_TENURE_BADGE_CHURN_REMINDER), _ = y(), O = I(), v = (0, i.useCallback)(() => {
    u.default.track(h.rMx.TOOLTIP_VIEWED, {
      type: "tiered_tenure_badge_churn_reminder"
    })
  }, []), T = (0, i.useCallback)(() => {
    null == t || t(m.L.TAKE_ACTION), (0, l.Z)({
      initialPlanId: null,
      subscriptionTier: null,
      analyticsLocations: f
    })
  }, [t, f]), S = [{
    text: g.intl.string(g.t.iIvF2z),
    variant: "expressive",
    onClick: T
  }], A = O >= E && O <= b ? Math.max(1, Math.min(100, (b - O) / b * 100)) : 1, C = O <= 10 ? "critical" : "warning";
  return (0, r.jsx)(p.Z, {
    targetElementRef: d,
    body: _,
    mode: a,
    tooltipDelay: c,
    markAsDismissed: t,
    progressCircleText: "" + O,
    progressCirclePercent: A,
    progressCircleUrgency: C,
    actions: S,
    onShow: "tooltip" === a ? v : true,
    children: n
  })
}