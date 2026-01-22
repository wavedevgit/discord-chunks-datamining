/** Chunk was on web.js **/
/** chunk id: 987237, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C,
  C: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk166403 = require("./166403.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk697087 = require("./697087.js"),
  Chunk112848 = require("./112848.js"),
  Chunk508591 = require("./508591.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");
let y = 1,
  O = 15;

function A() {
  let e = I();
  return 1 === e ? b.intl.string(b.t.NBae0i) : b.intl.format(b.t.GSynLW, {
    time: e
  })
}

function v() {
  let e = (0, a.bG)([u.A], () => u.A.getPremiumSubscription());
  return null != e && e.status === g.Dmq.CANCELED ? e : null
}

function S() {
  let e = v(),
    t = I();
  return null != e && t >= y && t <= O
}

function I() {
  let e = v();
  return null != e ? (0, f.x6)(e) : 0
}

function T(e, t) {
  let n = (0, _.Lh)(),
    r = S(),
    i = (0, p.u)(e, t);
  return null != n && r && i
}
let C = e => {
  var t;
  let {
    markAsDismissed: n,
    children: a,
    mode: u = "popover",
    tooltipDelay: f = 300,
    targetElementRef: p
  } = e, {
    analyticsLocations: v
  } = (0, l.Ay)(o.A.TIERED_TENURE_BADGE_CHURN_REMINDER), S = A(), T = I(), C = null != (t = (0, _.Lh)()) ? t : m.Ac.PREMIUM_TENURE_1_MONTH, N = (0, i.useCallback)(() => {
    d.default.track(g.HAw.TOOLTIP_VIEWED, {
      type: "tiered_tenure_badge_churn_reminder"
    })
  }, []), R = (0, i.useCallback)(() => {
    null == n || n(E.i.TAKE_ACTION), (0, c.A)({
      initialPlanId: null,
      subscriptionTier: null,
      analyticsLocations: v
    })
  }, [n, v]), w = [{
    text: b.intl.string(b.t.iIvF2z),
    variant: "expressive",
    icon: s.tvc,
    iconPosition: "start",
    onClick: R
  }], P = T >= y && T <= O ? Math.max(1, Math.min(100, (O - T) / O * 100)) : 1, D = T <= 10 ? "critical" : "warning";
  return (0, r.jsx)(h.A, {
    badgeId: C,
    targetElementRef: p,
    body: S,
    mode: u,
    tooltipDelay: f,
    markAsDismissed: n,
    progressCircleText: "" + T,
    progressCirclePercent: P,
    progressCircleUrgency: D,
    actions: w,
    onShow: "tooltip" === u ? N : true,
    estimatedTooltipHeight: 300,
    children: a
  })
}