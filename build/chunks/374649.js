/** Chunk was on web.js **/
/** chunk id: 374649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ED: () => I,
  Ox: () => T,
  hz: () => b,
  o5: () => S,
  pV: () => C
}), require("./388685.js"), require("./49124.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk544891 = require("./544891.js"),
  Chunk881052 = require("./881052.js"),
  Chunk146528 = require("./146528.js"),
  Chunk74538 = require("./74538.js"),
  Chunk73346 = require("./73346.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
async function E(e) {
  let {
    items: t,
    paymentSourceId: n,
    trialId: r,
    code: i,
    applyEntitlements: o = false,
    currency: u,
    renewal: f,
    metadata: _
  } = e, g = {
    items: (t = (0, c.gB)(t)).map(e => {
      var {
        planId: t
      } = e;
      return m(p({}, h(e, ["planId"])), {
        plan_id: t
      })
    }),
    payment_source_id: n,
    trial_id: r,
    code: i,
    apply_entitlements: o,
    currency: u,
    renewal: f,
    metadata: _
  };
  try {
    let e = await a.tn.post({
      url: d.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
      body: g,
      oldFormErrors: true,
      rejectWithError: false
    });
    return l.Z.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new s.HF(e)
  }
}
async function b(e) {
  let {
    subscriptionId: t,
    items: n,
    paymentSourceId: r,
    renewal: i,
    currency: o,
    applyEntitlements: u = false,
    analyticsLocations: f,
    analyticsLocation: _,
    userDiscountOfferId: g
  } = e;
  null != n && (n = (0, c.gB)(n));
  let E = {
    items: null == n ? true : n.map(e => {
      var {
        planId: t
      } = e;
      return m(p({}, h(e, ["planId"])), {
        plan_id: t
      })
    }),
    payment_source_id: r,
    renewal: i,
    apply_entitlements: u,
    currency: o,
    user_discount_offer_id: g
  };
  try {
    let e = await a.tn.patch({
      url: d.ANM.BILLING_SUBSCRIPTION_PREVIEW(t),
      query: {
        location: _,
        location_stack: f
      },
      body: E,
      oldFormErrors: true,
      rejectWithError: false
    });
    return l.Z.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new s.HF(e)
  }
}
async function y(e) {
  let {
    paymentSourceId: t,
    skuId: n,
    subscriptionPlanId: r,
    currency: i,
    loadId: a
  } = e;
  o()(n, "SKU ID is missing for one time purchase gift invoice preview");
  let c = {
    gift: true,
    payment_source_id: t,
    sku_subscription_plan_id: r,
    currency: i,
    load_id: a
  };
  try {
    let e = await (0, u.Kb)({
      url: d.ANM.STORE_SKU_PURCHASE(n),
      query: c,
      oldFormErrors: true,
      rejectWithError: false
    });
    return l.Z.createInvoiceFromServer(e.body)
  } catch (e) {
    throw new s.HF(e)
  }
}
async function O(e) {
  let {
    subscriptionId: t,
    preventFetch: n
  } = e;
  if (n) return null;
  let r = await a.tn.get({
    url: d.ANM.BILLING_SUBSCRIPTION_INVOICE(t),
    oldFormErrors: true,
    rejectWithError: false
  });
  return l.Z.createInvoiceFromServer(r.body)
}

function v(e, t) {
  let {
    preventFetch: n = false
  } = e, [i, o] = (0, r.useState)(null), [a, s] = (0, r.useState)(null);
  return (0, r.useEffect)(() => {
    let e = false;
    async function r() {
      try {
        s(null), o(null);
        let n = await t();
        e || o(n)
      } catch (t) {
        e || s(t)
      }
    }
    return n || r(), () => {
      e = true
    }
  }, [n, t]), [i, a]
}

function S(e) {
  let t = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
    t.current = e
  });
  let n = JSON.stringify(e);
  return v(e, (0, r.useCallback)(() => y(t.current), [n]))
}

function I(e) {
  if ("subscriptionId" in e && null == e.subscriptionId) {
    let {
      subscriptionId: t
    } = e;
    e = h(e, ["subscriptionId"])
  }
  let t = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
    t.current = e
  });
  let n = JSON.stringify(e),
    i = (0, r.useCallback)(() => {
      let {
        current: e
      } = t;
      return "subscriptionId" in e ? b(e) : "items" in e ? E(e) : null
    }, [n]);
  return v(e, i)
}

function T(e) {
  let t = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
    t.current = e
  });
  let n = JSON.stringify(e);
  return v(e, (0, r.useCallback)(() => O(t.current), [n]))
}

function C(e) {
  let t = e.subscriptionPlanPrice;
  return e.discounts.forEach(n => {
    let r = n.amount / e.quantity;
    t -= r
  }), t
}