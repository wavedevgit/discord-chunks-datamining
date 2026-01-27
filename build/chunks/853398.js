/** Chunk was on web.js **/
/** chunk id: 853398, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk311907 = require("./311907.js"),
  Chunk97352 = require("./97352.js"),
  Chunk83617 = require("./83617.js"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  var t, n;
  let {
    activeSubscription: l,
    skuIDs: u,
    paymentSourceId: f,
    isGift: p,
    excludeSubscriptionPlansBySKU: _
  } = e;
  u = u.filter(e => e !== o.pe.NONE);
  let h = (0, r.bG)([i.A], () => {
      let e = i.A.getPlanIdsForSkus(u).filter(e => !p || o.JM.has(e));
      return e.length > 0 ? i.A.get(e[0]) : null
    }),
    m = null == h ? [] : (0, a._w)(h.id, f, p),
    g = null != (t = null != (n = m.find(e => e === (null == l ? true : l.currency))) ? n : m[0]) ? t : s.Yr.USD;
  return d(c({}, (0, a.Yk)({
    initialCurrency: g,
    subscriptionPlanId: null == h ? true : h.id,
    paymentSourceId: f,
    isGift: p,
    skuIDs: u,
    excludeSubscriptionPlansBySKU: _
  })), {
    currencies: m
  })
}