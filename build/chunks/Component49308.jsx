/** Chunk was on web.js **/
/** chunk id: 49308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk597688 = require("./597688.js"),
  Chunk624377 = require("./624377.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk179118 = require("./179118.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function S(e, t, n) {
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
      S(e, t, n[t])
    })
  }
  return e
}

function T(e) {
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
    appliedUserDiscounts: m
  } = (0, h.JL)(), g = (0, s.e7)([u.Z], () => u.Z.getProduct(l)), O = i.useRef(false);
  o()(null != l, "Expected selectedSkuId"), o()(null != c, "Expected application");
  let S = a[l];
  o()(null != S, "Expected sku");
  let I = null != d || null != f || null != p,
    T = m.length > 0 ? v.intl.formatToPlainString(v.t.VuV3Td, {
      discountOfferAmount: m[0].discount.amount
    }) : true;
  return (i.useEffect(() => {
    null == g || I || O.current || (O.current = true, (0, _.Z)({
      product: g,
      overrideTitle: T,
      analyticsLocations: n,
      onCloseCallback: t,
      purchaseType: y.o8.FIAT
    }))
  }, [g, n, t, I, T]), I) ? (0, r.jsx)(E.C3, {
    children: (0, r.jsx)(b.Z, {})
  }) : null
}

function C(e) {
  let {
    isGift: t,
    giftCode: n,
    selectedGiftStyle: a,
    hasSentMessage: o,
    giftRecipient: _,
    giftMessageError: E,
    isSendingMessage: b,
    giftingOrigin: y
  } = (0, m.wD)(), v = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), S = i.useRef(null), {
    selectedSkuId: C
  } = (0, h.JL)(), A = (0, s.e7)([u.Z], () => u.Z.getProduct(C)), {
    confettiColors: N
  } = (0, d.Z)(null == A ? true : A.styles);
  return i.useEffect(() => {
    t && null != _ && null != C && (y === O.Wt.USER_PROFILE_WISHLIST || y === O.Wt.DM_CHANNEL_WISHLIST) && l.Z.dispatch({
      type: "WISHLIST_GIFT_SENT",
      skuId: C,
      recipientId: _.id
    })
  }, [t, _, C, y]), t ? (0, r.jsxs)("div", {
    ref: S,
    children: [(0, r.jsx)(g.Z, {
      giftCode: n,
      onClose: e.handleClose,
      selectedGiftStyle: a,
      hasSentMessage: o,
      giftRecipient: _,
      giftMessageError: E,
      isSendingMessage: b
    }), !e.hideConfetti && !v && (0, r.jsx)(f.Z, {
      confettiTarget: S.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, p.vK)(null == A ? true : A.categorySkuId),
      colors: null == N ? true : N.map(e => e.toHexString())
    })]
  }) : (0, r.jsx)(T, I({}, e))
}