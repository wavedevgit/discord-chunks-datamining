/** Chunk was on web.js **/
/** chunk id: 855775, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => H,
  c: () => _
}), require("./388685.js");
var a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

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
let _ = "no_payment_source",
  p = null,
  h = null,
  m = null,
  g = null,
  E = null,
  b = {},
  y = null,
  O = false,
  v = null,
  I = false,
  S = false,
  T = false,
  A = false,
  C = null,
  N = new Set;

function R(e) {
  null != r && null != y ? r(y) : null != i && i(e), r = null, i = null
}

function P(e) {
  R(), p = e.skuId, m = e.applicationId, S = e.isIAP, g = e.analyticsLocation, C = e.context, A = e.isGift, T = true, I = false, r = e.resolve, i = e.reject, v = null, y = null, E = e.promotionId
}

function w(e) {
  let {
    error: t
  } = e;
  T = false, C = null, R(t)
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
  b = f(u({}, b), {
    [t]: f(u({}, b[t]), {
      [null != n ? n : _]: r
    })
  }), N.delete(t)
}

function L(e) {
  let {
    skuId: t
  } = e;
  N.delete(t)
}

function M() {
  O = true
}

function j(e) {
  let {
    entitlements: t,
    giftCode: n
  } = e;
  O = false, y = t, h = n
}

function k(e) {
  let {
    giftCode: t
  } = e;
  if (0 !== t.uses || t.sku_id !== p) returnfalse;
  h = t.code
}

function U(e) {
  let {
    error: t
  } = e;
  O = false, v = t
}

function G() {
  I = true
}

function B() {
  v = null
}

function Z(e) {
  A = e.isGift
}

function F(e) {
  let {
    locked: t
  } = e;
  if (!t || null == C) returnfalse;
  T = false, C = null, R()
}
class V extends(a = Chunk442837.ZP.Store) {
  getPricesForSku(e) {
    return b[e]
  }
  isOpen() {
    let e = __OVERLAY__ ? Chunk981631.IlC.OVERLAY : Chunk981631.IlC.APP;
    return C === module && T
  }
  get isPurchasingSKU() {
    return O
  }
  get forceConfirmationStepOnMount() {
    return I
  }
  get error() {
    return v
  }
  get skuId() {
    return p
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
    return S
  }
  get giftCode() {
    return h
  }
  get isGift() {
    return A
  }
  isFetchingSKU(e) {
    return N.has(e)
  }
}
c(V, "displayName", "SKUPaymentModalStore");
let H = new V(Chunk570140.Z, {
  SKU_PURCHASE_MODAL_OPEN: P,
  SKU_PURCHASE_MODAL_CLOSE: w,
  SKU_PURCHASE_PREVIEW_FETCH: D,
  SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: x,
  SKU_PURCHASE_PREVIEW_FETCH_FAILURE: L,
  SKU_PURCHASE_START: M,
  SKU_PURCHASE_SUCCESS: j,
  SKU_PURCHASE_FAIL: U,
  SKU_PURCHASE_SHOW_CONFIRMATION_STEP: G,
  SKU_PURCHASE_CLEAR_ERROR: B,
  SKU_PURCHASE_UPDATE_IS_GIFT: Z,
  OVERLAY_SET_INPUT_LOCKED: F,
  GIFT_CODE_CREATE: k
})