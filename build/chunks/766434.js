/** Chunk was on 384 **/
/** chunk id: 766434, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Br: () => i,
  Uj: () => l,
  j0: () => r
});
let r = e => {
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

function i(e) {
  let t, n, r = new Date,
    i = new Date(Date.UTC(r.getUTCFullYear(), r.getUTCMonth(), 1)).toISOString(),
    l = e.findIndex(e => e.periodStartingAt === i);
  return false !== l ? (t = e[l], n = e.slice(l + 1)) : n = e, {
    currentPeriod: t,
    previousPeriods: n
  }
}

function l(e, t) {
  let n, r, i, l;
  return null != e && (n = e.amount, i = e.paymentsCount, null != t && (t.amount > 0 && (r = e.amount / t.amount - 1), l = e.paymentsCount - t.paymentsCount)), {
    revenue: n,
    revenuePctChange: r,
    paymentsCount: i,
    paymentsCountChange: l
  }
}