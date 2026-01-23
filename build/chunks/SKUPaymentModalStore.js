/** Chunk was on web.js **/
/** chunk id: 79387, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => Y,
  B: () => p
}), require("./896048.js");
var a, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = "no_payment_source",
  _ = null,
  h = null,
  m = null,
  g = null,
  E = null,
  y = {},
  b = null,
  O = false,
  v = null,
  A = false,
  I = false,
  S = false,
  T = false,
  C = null,
  N = new Set;

function w(e) {
  null != r && null != b ? r(b) : null != i && i(e), r = null, i = null
}

function R(e) {
  w(), _ = e.skuId, m = e.applicationId, I = e.isIAP, g = e.analyticsLocation, C = e.context, T = e.isGift, S = true, A = false, r = e.resolve, i = e.reject, v = null, b = null, E = e.promotionId
}

function P(e) {
  let {
    error: t
  } = e;
  S = false, C = null, w(t)
}

function D(e) {
  let {
    skuId: t
  } = e;
  N.add(t)
}

function x(e) {
  let {
    skuId: t,
    paymentSourceId: n,
    price: r
  } = e;
  y = f(u({}, y), {
    [t]: f(u({}, y[t]), {
      [null != n ? n : p]: r
    })
  }), N.delete(t)
}

function L(e) {
  let {
    skuId: t
  } = e;
  N.delete(t)
}

function j() {
  O = true
}

function M(e) {
  let {
    entitlements: t,
    giftCode: n
  } = e;
  O = false, b = t, h = n
}

function k(e) {
  let {
    giftCode: t
  } = e;
  if (0 !== t.uses || t.sku_id !== _) returnfalse;
  h = t.code
}

function U(e) {
  let {
    error: t
  } = e;
  O = false, v = t
}

function G() {
  A = true
}

function V() {
  v = null
}

function F(e) {
  T = e.isGift
}

function B(e) {
  let {
    locked: t
  } = e;
  if (!t || null == C) returnfalse;
  S = false, C = null, w()
}
class H extends(a = Chunk311907.Ay.Store) {
  getPricesForSku(e) {
    return y[e]
  }
  isOpen() {
    let e = __OVERLAY__ ? l.BRT.OVERLAY : l.BRT.APP;
    return C === e && S
  }
  get isPurchasingSKU() {
    return O
  }
  get forceConfirmationStepOnMount() {
    return A
  }
  get error() {
    return v
  }
  get skuId() {
    return _
  }
  get applicationId() {
    return m
  }
  get analyticsLocation() {
    return g
  }
  get promotionId() {
    return E
  }
  get isIAP() {
    return I
  }
  get giftCode() {
    return h
  }
  get isGift() {
    return T
  }
  isFetchingSKU(e) {
    return N.has(e)
  }
}
c(H, "displayName", "SKUPaymentModalStore");
let Y = new H(Chunk73153.h, {
  SKU_PURCHASE_MODAL_OPEN: R,
  SKU_PURCHASE_MODAL_CLOSE: P,
  SKU_PURCHASE_PREVIEW_FETCH: D,
  SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: x,
  SKU_PURCHASE_PREVIEW_FETCH_FAILURE: L,
  SKU_PURCHASE_START: j,
  SKU_PURCHASE_SUCCESS: M,
  SKU_PURCHASE_FAIL: U,
  SKU_PURCHASE_SHOW_CONFIRMATION_STEP: G,
  SKU_PURCHASE_CLEAR_ERROR: V,
  SKU_PURCHASE_UPDATE_IS_GIFT: F,
  OVERLAY_SET_INPUT_LOCKED: B,
  GIFT_CODE_CREATE: k
})