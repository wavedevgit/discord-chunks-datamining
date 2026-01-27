/** Chunk was on web.js **/
/** chunk id: 369827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk384904 = require("./384904.js"),
  Chunk295405 = require("./295405.js");

function s(e) {
  let {
    isGift: t,
    activeSubscription: n,
    eligiblePaymentGateways: s
  } = e, {
    defaultPaymentSourceId: l,
    paymentSources: c,
    hasFetchedPaymentSources: u
  } = (0, i.cf)([o.A], () => ({
    defaultPaymentSourceId: o.A.defaultPaymentSourceId,
    paymentSources: o.A.paymentSources,
    hasFetchedPaymentSources: o.A.hasFetchedPaymentSources
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
    u ? p(d(t, n, l, s)) : (0, a.$o)()
  }, [u, t, n, l, s]), {
    paymentSources: c,
    hasPaymentSources: Object.keys(c).length > 0,
    paymentSourceId: f,
    setPaymentSourceId: p,
    hasFetchedPaymentSources: u,
    defaultPaymentSource: null != l ? c[l] : null
  }
}