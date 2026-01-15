/** Chunk was on web.js **/
/** chunk id: 583046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk509545 = require("./509545.js"),
  Chunk212895 = require("./212895.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js");

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
  u = u.filter(e => e !== o.Si.NONE);
  let h = (0, r.e7)([i.Z], () => {
      let e = i.Z.getPlanIdsForSkus(u).filter(e => !p || o.dJ.has(e));
      return e.length > 0 ? i.Z.get(e[0]) : null
    }),
    m = null == h ? [] : (0, a.DE)(h.id, f, p),
    g = null != (n = null != (t = m.find(e => e === (null == l ? true : l.currency))) ? t : m[0]) ? n : s.pK.USD;
  return d(c({}, (0, a.gr)({
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