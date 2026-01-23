/** Chunk was on web.js **/
/** chunk id: 975189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk73153 = require("./73153.js"),
  Chunk775602 = require("./775602.js"),
  Chunk590180 = require("./590180.js"),
  Chunk306710 = require("./306710.js"),
  Chunk524246 = require("./524246.jsx"),
  Chunk14368 = require("./14368.js"),
  Chunk61750 = require("./61750.jsx"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk972607 = require("./972607.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk921925 = require("./921925.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function S(e) {
  let {
    handleClose: t,
    analyticsLocations: n
  } = e, {
    skusById: a,
    selectedSkuId: l,
    application: c,
    paymentError: d,
    purchaseError: f,
    purchasePreviewError: p,
    appliedUserDiscounts: h
  } = (0, m.P5)(), g = (0, o.bG)([u.A], () => u.A.getProduct(l)), O = i.useRef(false);
  s()(null != l, "Expected selectedSkuId"), s()(null != c, "Expected application");
  let A = a[l];
  s()(null != A, "Expected sku");
  let I = null != d || null != f || null != p,
    S = h.length > 0 ? v.intl.formatToPlainString(v.t.VuV3Td, {
      discountOfferAmount: h[0].discount.amount
    }) : true;
  return (i.useEffect(() => {
    null == g || I || O.current || (O.current = true, (0, _.A)({
      product: g,
      overrideTitle: S,
      analyticsLocations: n,
      onCloseCallback: t,
      purchaseType: b.gs.FIAT
    }))
  }, [g, n, t, I, S]), I) ? (0, r.jsx)(E.dZ, {
    children: (0, r.jsx)(y.A, {})
  }) : null
}

function T(e) {
  let {
    isGift: t,
    giftCode: n,
    selectedGiftStyle: a,
    hasSentMessage: s,
    giftRecipient: _,
    giftMessageError: E,
    isSendingMessage: y,
    giftingOrigin: b
  } = (0, h.Pv)(), v = (0, o.bG)([c.A], () => c.A.useReducedMotion), A = i.useRef(null), {
    selectedSkuId: T
  } = (0, m.P5)(), C = (0, o.bG)([u.A], () => u.A.getProduct(T)), {
    confettiColors: N
  } = (0, d.A)(null == C ? true : C.styles);
  return i.useEffect(() => {
    t && null != _ && null != T && (b === O.vQ.USER_PROFILE_WISHLIST || b === O.vQ.DM_CHANNEL_WISHLIST) && l.h.dispatch({
      type: "WISHLIST_GIFT_SENT",
      skuId: T,
      recipientId: _.id
    })
  }, [t, _, T, b]), t ? (0, r.jsxs)("div", {
    ref: A,
    children: [(0, r.jsx)(g.A, {
      giftCode: n,
      onClose: e.handleClose,
      selectedGiftStyle: a,
      hasSentMessage: s,
      giftRecipient: _,
      giftMessageError: E,
      isSendingMessage: y
    }), !e.hideConfetti && !v && (0, r.jsx)(f.A, {
      confettiTarget: A.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, p.rA)(null == C ? true : C.categorySkuId),
      colors: null == N ? true : N.map(e => e.toHexString())
    })]
  }) : (0, r.jsx)(S, I({}, e))
}