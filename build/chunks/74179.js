/** Chunk was on web.js **/
/** chunk id: 74179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk355467 = require("./355467.js"),
  Chunk853872 = require("./853872.js");

function s(e) {
  let {
    isGift: t,
    activeSubscription: n,
    eligiblePaymentGateways: s
  } = e, {
    defaultPaymentSourceId: l,
    paymentSources: c,
    hasFetchedPaymentSources: u
  } = (0, i.cj)([o.Z], () => ({
    defaultPaymentSourceId: o.Z.defaultPaymentSourceId,
    paymentSources: o.Z.paymentSources,
    hasFetchedPaymentSources: o.Z.hasFetchedPaymentSources
  })), d = (e, t, n, r) => {
    if (!e && (null == t ? true : t.paymentSourceId) != null) return t.paymentSourceId;
    if (null != r && r.length > 0) {
      if (null != n && r.includes(c[n].paymentGateway)) return n;
      for (let e in c) {
        let t = c[e];
        if (r.includes(t.paymentGateway)) return e
      }
      return null
    }
    return n
  }, [f, p] = r.useState(() => d(t, n, l, s));
  return r.useEffect(() => {
    u ? p(d(t, n, l, s)) : (0, a.tZ)()
  }, [u, t, n, l, s]), {
    paymentSources: c,
    hasPaymentSources: Object.keys(c).length > 0,
    paymentSourceId: f,
    setPaymentSourceId: p,
    hasFetchedPaymentSources: u,
    defaultPaymentSource: null != l ? c[l] : null
  }
}