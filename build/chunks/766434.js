/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  Br: () => s,
  Uj: () => a,
  j0: () => i
}), n(47120);
var r = n(198139);
let i = e => {
  var t, n;
  let r = Object.values(null !== (n = null == e ? void 0 : e.ppgs) && void 0 !== n ? n : {})[0],
    i = null == r ? void 0 : r.status,
    s = null == r ? void 0 : null === (t = r.payout) || void 0 === t ? void 0 : t.status;
  return {
    ppgStatus: i,
    payoutStatus: s,
    ppgDeferralReasons: null == r ? void 0 : r.deferral_reasons,
    periodEndDate: null == r ? void 0 : r.period_ending_at
  }
};

function s(e) {
  let t, n;
  let {
    ppgStatus: s
  } = i(e[0]);
  return s === r.x_.OPEN ? [t, ...n] = e : n = e, {
    currentPeriod: t,
    previousPeriods: n
  }
}

function a(e, t) {
  let n, r, i, s;
  return null != e && (n = e.amount, i = e.paymentsCount, null != t && (r = e.amount / t.amount - 1, s = e.paymentsCount - t.paymentsCount)), {
    revenue: n,
    revenuePctChange: r,
    paymentsCount: i,
    paymentsCountChange: s
  }
}