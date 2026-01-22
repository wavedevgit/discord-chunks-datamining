/** Chunk was on 47841 **/
/** chunk id: 105917, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  El: () => l,
  Rs: () => r,
  dc: () => i
});
let r = e => {
  var t, n;
  let r = Object.values(null != (t = null == e ? true : e.ppgs) ? t : {})[0],
    i = null == r ? true : r.status,
    l = null == r || null == (n = r.payout) ? true : n.status;
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