/** Chunk was on web.js **/
/** chunk id: 332983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./415506.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk122289 = require("./122289.js"),
  Chunk937615 = require("./937615.js"),
  Chunk667354 = require("./667354.js"),
  Chunk231338 = require("./231338.js");

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
let _ = Chunk667354.vk.DISCONNECTED,
  h = null,
  m = new Map,
  g = new Set,
  E = new Set,
  b = null,
  y = false,
  O = false,
  v = false,
  S = null;

function I(e) {
  let {
    connectionState: t
  } = e;
  _ = t
}

function T(e) {
  let t = e.currencyCode.toLowerCase(),
    n = e.price / 100,
    r = "BG" === S && t === c.pK.EUR ? (0, s.HR)(n, {
      convertToMajorUnits: false
    }) : (0, s.yH)(n, t, {
      convertToMajorUnits: false
    });
  return p(d({}, e), {
    price: e.price,
    currencyCode: t,
    priceString: r
  })
}

function C() {
  v = true
}

function A() {
  v = false
}

function N() {
  O = true
}

function P() {
  O = false
}

function w(e) {
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
    h = null == h ? true : h.map(T)
  } catch (e) {
    (0, o.q2)(e)
  }
  switch (null == h || h.forEach(e => {
      m.set(e.identifier, e)
    }), r) {
    case l.oo.IN_APP:
      O = false;
      break;
    case l.oo.SUBSCRIPTION:
      v = false
  }
}

function R(e) {
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

function x(e) {
  let {
    pendingDowngrade: t
  } = e;
  b = t
}

function L(e) {
  let {
    isDowngrading: t
  } = e;
  y = t
}

function j(e) {
  let {
    countryCode: t
  } = e;
  S = t
}
class M extends(r = Chunk442837.ZP.Store) {
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
    return E.size > 0 || y
  }
  isPurchasingProduct(e) {
    return E.has(e)
  }
  isReady() {
    return _ === l.vk.CONNECTED
  }
  hasConnectionError() {
    return _ === l.vk.ERROR
  }
  getPendingDowngrade() {
    return b
  }
  isFetchingGoogleSkus() {
    return v || O
  }
  isFetchingProducts() {
    return v || O
  }
  getUserCountry() {
    return S
  }
}
u(M, "displayName", "IAPStore");
let k = new M(Chunk570140.Z, {
  GPLAY_UPDATE_CONNECTION_STATE: I,
  GPLAY_FETCH_SUBSCRIPTION_SKUS_START: C,
  GPLAY_SUBSCRIPTION_SKUS_LOADED: w,
  GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED: A,
  GPLAY_FETCH_IN_APP_SKUS_START: N,
  GPLAY_IN_APP_SKUS_LOADED: w,
  GPLAY_FETCH_IN_APP_SKUS_FAILED: P,
  GPLAY_VERIFICATION_START: R,
  GPLAY_VERIFICATION_END: D,
  GPLAY_UPDATE_PENDING_DOWNGRADE: x,
  GPLAY_UPDATE_IS_DOWNGRADING: L,
  GPLAY_SET_USER_COUNTRY: j
})