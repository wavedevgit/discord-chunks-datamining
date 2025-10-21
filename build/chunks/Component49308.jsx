/** Chunk was on web.js **/
/** chunk id: 49308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
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
    purchasePreviewError: _,
    appliedUserDiscounts: h
  } = (0, m.JL)(), g = (0, s.e7)([u.Z], () => u.Z.getProduct(l)), O = i.useRef(false);
  o()(null != l, "Expected selectedSkuId"), o()(null != c, "Expected application");
  let I = a[l];
  o()(null != I, "Expected sku");
  let T = null != d || null != f || null != _,
    S = h.length > 0 ? v.intl.formatToPlainString(v.t.VuV3Td, {
      discountOfferAmount: h[0].discount.amount
    }) : true;
  return (i.useEffect(() => {
    null == g || T || O.current || (O.current = true, (0, p.Z)({
      product: g,
      overrideTitle: S,
      analyticsLocations: n,
      onCloseCallback: t,
      purchaseType: y.o8.FIAT
    }))
  }, [g, n, t, T, S]), T) ? (0, r.jsx)(E.C3, {
    children: (0, r.jsx)(b.Z, {})
  }) : null
}

function A(e) {
  let {
    isGift: t,
    giftCode: n,
    selectedGiftStyle: a,
    hasSentMessage: o,
    giftRecipient: p,
    giftMessageError: E,
    isSendingMessage: b,
    giftingOrigin: y
  } = (0, h.wD)(), v = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), I = i.useRef(null), {
    selectedSkuId: A
  } = (0, m.JL)(), C = (0, s.e7)([u.Z], () => u.Z.getProduct(A)), {
    confettiColors: N
  } = (0, d.Z)(null == C ? true : C.styles);
  return i.useEffect(() => {
    t && null != p && null != A && (y === O.Wt.USER_PROFILE_WISHLIST || y === O.Wt.DM_CHANNEL_WISHLIST) && l.Z.dispatch({
      type: "WISHLIST_GIFT_SENT",
      skuId: A,
      recipientId: p.id
    })
  }, [t, p, A, y]), t ? (0, r.jsxs)("div", {
    ref: I,
    children: [(0, r.jsx)(g.Z, {
      giftCode: n,
      onClose: e.handleClose,
      selectedGiftStyle: a,
      hasSentMessage: o,
      giftRecipient: p,
      giftMessageError: E,
      isSendingMessage: b
    }), !e.hideConfetti && !v && (0, r.jsx)(f.Z, {
      confettiTarget: I.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, _.vK)(null == C ? true : C.categorySkuId),
      colors: null == N ? true : N.map(e => e.toHexString())
    })]
  }) : (0, r.jsx)(S, T({}, e))
}