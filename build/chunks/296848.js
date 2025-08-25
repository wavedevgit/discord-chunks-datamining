/** Chunk was on web.js **/
/** chunk id: 296848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AT: () => E,
  GY: () => m,
  R4: () => h,
  oE: () => g,
  qH: () => b,
  yb: () => p
}), require("./388685.js"), require("./539854.js"), require("./647438.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk99945 = require("./99945.js");
require("./442837.js");
var Chunk821849 = require("./821849.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function _(e) {
  return e.items.map(e => {
    let t = c.Z.get(e.planId);
    return i()(null != t, "Unable to fetch plan"), t
  })
}

function p(e) {
  return _(e).map(e => e.skuId)
}

function h(e, t, n) {
  let r = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === d.NYc.PREMIUM && null == r || (i()(null != r, "Current subscription has no plan in group"), i()(r !== f.Xh.PREMIUM_YEAR_TIER_1 || t !== f.Xh.PREMIUM_MONTH_TIER_2, "Unexpected plan switch"), n.indexOf(r) < n.indexOf(t))
}

function m(e, t, n) {
  return !h(e, t, n)
}

function g(e, t) {
  let n = c.Z.get(e);
  if (null == n) {
    let n = f.GP[e];
    i()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let r = (0, u.Wz)(n.skuId);
    c.Z.isFetchingForSKU(r) || (0, l.GZ)(r, t)
  }
  return n
}

function E(e) {
  let t = Object.keys(s.T).filter(e => isNaN(Number(e)));
  if (e.status !== d.O0b.PAUSED) return {
    durations: t,
    currentDaysPaused: 0
  };
  if (null == e.pauseEndsAt) return {
    durations: [],
    currentDaysPaused: 0
  };
  {
    let n = a()(e.currentPeriodStart),
      r = Math.round(a()(e.pauseEndsAt).diff(n, "days", true)),
      i = [];
    for (let e of t) s.T[e] > r && i.push(e);
    return {
      durations: i,
      currentDaysPaused: r
    }
  }
}

function b(e) {
  return null != e && a().isMoment(e) && e.isSameOrAfter(a()())
}