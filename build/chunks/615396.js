/** Chunk was on web.js **/
/** chunk id: 615396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ge: () => g,
  MP: () => m,
  Vy: () => O,
  b2: () => A,
  c9: () => b,
  vT: () => E,
  zz: () => y
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk539267 = require("./539267.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73825 = require("./73825.js"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function h(e) {
  return e.items.map(e => {
    let t = d.A.get(e.planId);
    return a()(null != t, "Unable to fetch plan"), t
  })
}

function m(e) {
  return h(e).map(e => e.skuId)
}

function g(e, t, n) {
  let r = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === p.rzx.PREMIUM && null == r || (a()(null != r, "Current subscription has no plan in group"), a()(r !== _.gD.PREMIUM_YEAR_TIER_1 || t !== _.gD.PREMIUM_MONTH_TIER_2, "Unexpected plan switch"), n.indexOf(r) < n.indexOf(t))
}

function E(e, t, n) {
  return !g(e, t, n)
}

function b(e, t) {
  let n = d.A.get(e);
  if (null == n) {
    let n = _.hd[e];
    a()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let r = (0, f.mH)(n.skuId);
    d.A.isFetchingForSKU(r) || (0, u.ur)(r, t)
  }
  return n
}

function y(e, t) {
  let [n, i] = (0, c.yK)([d.A], () => {
    let t = null != e ? d.A.get(e) : null;
    return [t, null != t && d.A.isFetchingForSKU(t.skuId)]
  });
  return r.useEffect(() => {
    if (null != n || null == e || i) return;
    let r = _.hd[e];
    a()(null != r, "Missing hardcoded subscriptionPlan: ".concat(e)), (0, u.ur)((0, f.mH)(r.skuId), t)
  }, [n, e, t, i]), n
}

function O(e) {
  let t = Object.keys(l.V).filter(e => isNaN(Number(e)));
  if (e.status !== p.Dmq.PAUSED) return {
    durations: t,
    currentDaysPaused: 0
  };
  if (null == e.pauseEndsAt) return {
    durations: [],
    currentDaysPaused: 0
  };
  {
    let n = o()(e.currentPeriodStart),
      r = Math.round(o()(e.pauseEndsAt).diff(n, "days", true)),
      i = [];
    for (let e of t) l.V[e] > r && i.push(e);
    return {
      durations: i,
      currentDaysPaused: r
    }
  }
}

function A(e) {
  return null != e && o().isMoment(e) && e.isSameOrAfter(o()())
}