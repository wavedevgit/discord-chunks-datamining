/** Chunk was on web.js **/
/** chunk id: 212895, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DE: () => g,
  gr: () => b,
  i1: () => m,
  tD: () => E
}), require("./388685.js"), require("./49124.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk570140 = require("./570140.js"),
  Chunk821849 = require("./821849.js"),
  Chunk15640 = require("./15640.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = 10027;

function m(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [...f.YQ];
  return null == e || c.Z.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise((e, n) => {
    o.Z.wait(async () => {
      try {
        await (0, s.Gn)(t), e()
      } catch (e) {
        n(e)
      }
    })
  })
}

function g(e, t, n) {
  let r, i = [],
    o = [],
    s = {
      purchaseType: n ? d.tuJ.GIFT : d.tuJ.DEFAULT
    };
  return r = "string" == typeof e ? c.Z.get(e) : e, a()(r, "subscription plan not loaded"), null != t && c.Z.hasPaymentSourceForSKUId(t, r.skuId) && (s.paymentSourceId = t), (i = (o = (0, u.T4)(r.id, s)).map(e => e.currency)).length < 1 && (i = [d.pKx.USD]), i
}

function E(e, t, n) {
  let r = c.Z.get(e);
  return a()(null != r, "plan is undefined"), g(r, n, false).includes(t)
}

function b(e) {
  let {
    initialCurrency: t,
    subscriptionPlanId: n,
    paymentSourceId: i,
    isGift: a,
    skuIDs: o,
    excludeSubscriptionPlansBySKU: s
  } = e, [u, d] = r.useReducer((e, t) => p({}, e, t), null != i ? {
    paymentSourceId: i,
    currency: t,
    loaded: false
  } : {
    currency: t,
    loaded: false
  }), f = (0, l.V)(o), _ = JSON.stringify(o), E = r.useRef(o);
  r.useEffect(() => {
    E.current = o
  }), r.useEffect(() => {
    (async () => {
      let {
        current: e
      } = E;
      try {
        e.length > 0 && !s && await m(i, e)
      } catch (e) {
        if (e.code !== h) throw e
      }
      let t = [];
      null != n && null != c.Z.get(n) && (t = g(n, i, a)), t.length > 0 ? d({
        paymentSourceId: i,
        currency: t[0],
        loaded: true
      }) : d({
        paymentSourceId: i,
        loaded: false
      })
    })()
  }, [i, _, n, a, f, s]);
  let b = u.paymentSourceId !== i || null == n || !f || true !== u.loaded;
  return {
    hasFetchedSubscriptionPlans: f,
    priceOptions: u,
    setCurrency: e => {
      d({
        currency: e
      })
    },
    currencyLoading: b
  }
}