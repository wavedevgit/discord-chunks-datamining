/** Chunk was on 384 **/
/** chunk id: 766434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Br: () => l,
  Uj: () => a,
  j0: () => i
}), require("./388685.js");
var Chunk198139 = require("./198139.js");
let i = e => {
  var t, n;
  let r = Object.values(null != (n = null == e ? true : e.ppgs) ? n : {})[0],
    i = null == r ? true : r.status,
    l = null == r || null == (t = r.payout) ? true : t.status;
  return {
    ppgStatus: i,
    payoutStatus: l,
    ppgDeferralReasons: null == r ? true : r.deferral_reasons,
    periodEndDate: null == r ? true : r.period_ending_at
  }
};

function l(e) {
  let t, n, {
    ppgStatus: l
  } = i(e[0]);
  return l === r.x_.OPEN ? [t, ...n] = e : n = e, {
    currentPeriod: t,
    previousPeriods: n
  }
}

function a(e, t) {
  let n, r, i, l;
  return null != e && (n = e.amount, i = e.paymentsCount, null != t && (r = e.amount / t.amount - 1, l = e.paymentsCount - t.paymentsCount)), {
    revenue: n,
    revenuePctChange: r,
    paymentsCount: i,
    paymentsCountChange: l
  }
}