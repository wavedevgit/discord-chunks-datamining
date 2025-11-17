/** Chunk was on web.js **/
/** chunk id: 296848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AT: () => O,
  GY: () => E,
  IV: () => y,
  R4: () => g,
  oE: () => b,
  qH: () => v,
  yb: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk99945 = require("./99945.js"),
  Chunk442837 = require("./442837.js"),
  Chunk821849 = require("./821849.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function h(e) {
  return e.items.map(e => {
    let t = d.Z.get(e.planId);
    return a()(null != t, "Unable to fetch plan"), t
  })
}

function m(e) {
  return h(e).map(e => e.skuId)
}

function g(e, t, n) {
  let r = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === _.NYc.PREMIUM && null == r || (a()(null != r, "Current subscription has no plan in group"), a()(r !== p.Xh.PREMIUM_YEAR_TIER_1 || t !== p.Xh.PREMIUM_MONTH_TIER_2, "Unexpected plan switch"), n.indexOf(r) < n.indexOf(t))
}

function E(e, t, n) {
  return !g(e, t, n)
}

function b(e, t) {
  let n = d.Z.get(e);
  if (null == n) {
    let n = p.GP[e];
    a()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let r = (0, f.Wz)(n.skuId);
    d.Z.isFetchingForSKU(r) || (0, u.GZ)(r, t)
  }
  return n
}

function y(e, t) {
  let [n, i] = (0, c.Wu)([d.Z], () => {
    let t = null != e ? d.Z.get(e) : null;
    return [t, null != t && d.Z.isFetchingForSKU(t.skuId)]
  });
  return r.useEffect(() => {
    if (null != n || null == e || i) return;
    let r = p.GP[e];
    a()(null != r, "Missing hardcoded subscriptionPlan: ".concat(e)), (0, u.GZ)((0, f.Wz)(r.skuId), t)
  }, [n, e, t, i]), n
}

function O(e) {
  let t = Object.keys(l.T).filter(e => isNaN(Number(e)));
  if (e.status !== _.O0b.PAUSED) return {
    durations: t,
    currentDaysPaused: 0
  };
  if (null == e.pauseEndsAt) return {
    durations: [],
    currentDaysPaused: 0
  };
  {
    let n = s()(e.currentPeriodStart),
      r = Math.round(s()(e.pauseEndsAt).diff(n, "days", true)),
      i = [];
    for (let e of t) l.T[e] > r && i.push(e);
    return {
      durations: i,
      currentDaysPaused: r
    }
  }
}

function v(e) {
  return null != e && s().isMoment(e) && e.isSameOrAfter(s()())
}