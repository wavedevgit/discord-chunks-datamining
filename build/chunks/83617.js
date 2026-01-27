/** Chunk was on web.js **/
/** chunk id: 83617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yk: () => y,
  _w: () => g,
  c_: () => m,
  jJ: () => E
}), require("./896048.js"), require("./457529.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk73153 = require("./73153.js"),
  Chunk73825 = require("./73825.js"),
  Chunk160946 = require("./160946.js"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let h = 10027;

function m(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [...f.oz];
  return null == e || c.A.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise((e, n) => {
    o.h.wait(async () => {
      try {
        await (0, s.jv)(t), e()
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
      purchaseType: n ? d.lid.GIFT : d.lid.DEFAULT
    };
  return r = "string" == typeof e ? c.A.get(e) : e, a()(r, "subscription plan not loaded"), null != t && c.A.hasPaymentSourceForSKUId(t, r.skuId) && (s.paymentSourceId = t), (i = (o = (0, u.pb)(r.id, s)).map(e => e.currency)).length < 1 && (i = [d.Yri.USD]), i
}

function E(e, t, n) {
  let r = c.A.get(e);
  return a()(null != r, "plan is undefined"), g(r, n, false).includes(t)
}

function y(e) {
  let {
    initialCurrency: t,
    subscriptionPlanId: n,
    paymentSourceId: i,
    isGift: a,
    skuIDs: o,
    excludeSubscriptionPlansBySKU: s
  } = e, [u, d] = r.useReducer((e, t) => _({}, e, t), null != i ? {
    paymentSourceId: i,
    currency: t,
    loaded: false
  } : {
    currency: t,
    loaded: false
  }), f = (0, l.Y)(o), p = JSON.stringify(o), E = r.useRef(o);
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
      null != n && null != c.A.get(n) && (t = g(n, i, a)), t.length > 0 ? d({
        paymentSourceId: i,
        currency: t[0],
        loaded: true
      }) : d({
        paymentSourceId: i,
        loaded: false
      })
    })()
  }, [i, p, n, a, f, s]);
  let y = u.paymentSourceId !== i || null == n || !f || true !== u.loaded;
  return {
    hasFetchedSubscriptionPlans: f,
    priceOptions: u,
    setCurrency: e => {
      d({
        currency: e
      })
    },
    currencyLoading: y
  }
}