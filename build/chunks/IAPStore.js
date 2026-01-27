/** Chunk was on web.js **/
/** chunk id: 5255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js"), require("./65821.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk739508 = require("./739508.js"),
  Chunk580630 = require("./580630.js"),
  Chunk558519 = require("./558519.js"),
  Chunk818348 = require("./818348.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = Chunk558519.vx.DISCONNECTED,
  h = null,
  m = new Map,
  g = new Set,
  E = new Set,
  y = null,
  b = false,
  O = false,
  v = false,
  A = null;

function I(e) {
  let {
    connectionState: t
  } = e;
  _ = t
}

function S(e) {
  let t = e.currencyCode.toLowerCase(),
    n = e.price / 100,
    r = "BG" === A && t === c.Yr.EUR ? (0, s.ze)(n, {
      convertToMajorUnits: false
    }) : (0, s.Gp)(n, t, {
      convertToMajorUnits: false
    });
  return p(d({}, e), {
    price: e.price,
    currencyCode: t,
    priceString: r
  })
}

function T() {
  v = true
}

function C() {
  v = false
}

function N() {
  O = true
}

function w() {
  O = false
}

function R(e) {
  var t;
  let {
    skus: n,
    skusType: r
  } = e;
  n.forEach(e => {
    m.set(e.identifier, e)
  }), null == (h = null == (t = Array.from(m.values())) ? true : t.filter(e => null != e)) || h.forEach(e => {
    let t = null == e ? true : e.offerIds;
    null != t && t.forEach(e => g.add(e))
  });
  try {
    h = null == h ? true : h.map(S)
  } catch (e) {
    (0, o.pM)(e)
  }
  switch (null == h || h.forEach(e => {
      m.set(e.identifier, e)
    }), r) {
    case l.MA.IN_APP:
      O = false;
      break;
    case l.MA.SUBSCRIPTION:
      v = false
  }
}

function P(e) {
  let {
    productId: t
  } = e;
  E.add(t)
}

function D(e) {
  let {
    productId: t
  } = e;
  if (!E.has(t)) throw Error("Tried verifying product without initialization: ".concat(t));
  E.delete(t)
}

function L(e) {
  let {
    pendingDowngrade: t
  } = e;
  y = t
}

function x(e) {
  let {
    isDowngrading: t
  } = e;
  b = t
}

function M(e) {
  let {
    countryCode: t
  } = e;
  A = t
}
class j extends(r = Chunk311907.Ay.Store) {
  getProducts() {
    return h
  }
  getOfferIds() {
    return g
  }
  getProduct(e) {
    var t;
    return null != (t = m.get(e)) ? t : null
  }
  isBusy() {
    return E.size > 0 || b
  }
  isPurchasingProduct(e) {
    return E.has(e)
  }
  isReady() {
    return _ === l.vx.CONNECTED
  }
  hasConnectionError() {
    return _ === l.vx.ERROR
  }
  getPendingDowngrade() {
    return y
  }
  isFetchingGoogleSkus() {
    return v || O
  }
  isFetchingProducts() {
    return v || O
  }
  getUserCountry() {
    return A
  }
}
u(j, "displayName", "IAPStore");
let k = new j(Chunk73153.h, {
  GPLAY_UPDATE_CONNECTION_STATE: I,
  GPLAY_FETCH_SUBSCRIPTION_SKUS_START: T,
  GPLAY_SUBSCRIPTION_SKUS_LOADED: R,
  GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: C,
  GPLAY_FETCH_IN_APP_SKUS_START: N,
  GPLAY_IN_APP_SKUS_LOADED: R,
  GPLAY_FETCH_IN_APP_SKUS_FAILED: w,
  GPLAY_VERIFICATION_START: P,
  GPLAY_VERIFICATION_END: D,
  GPLAY_UPDATE_PENDING_DOWNGRADE: L,
  GPLAY_UPDATE_IS_DOWNGRADING: x,
  GPLAY_SET_USER_COUNTRY: M
})