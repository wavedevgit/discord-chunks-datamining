/** Chunk was on web.js **/
/** chunk id: 49308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk607070 = require("./607070.js"),
  Chunk597688 = require("./597688.js"),
  Chunk624377 = require("./624377.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk179118 = require("./179118.jsx"),
  Chunk27034 = require("./27034.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e) {
  let {
    handleClose: t,
    analyticsLocations: n
  } = e, {
    skusById: a,
    selectedSkuId: l,
    application: u,
    paymentError: d,
    purchaseError: f,
    purchasePreviewError: p,
    appliedUserDiscounts: m
  } = (0, h.JL)(), O = (0, s.e7)([c.Z], () => c.Z.getProduct(l)), v = i.useRef(false);
  o()(null != l, "Expected selectedSkuId"), o()(null != u, "Expected application");
  let I = a[l];
  o()(null != I, "Expected sku");
  let S = null != d || null != f || null != p,
    T = m.length > 0 ? y.intl.formatToPlainString(y.t.VuV3TU, {
      discountOfferAmount: m[0].discount.amount
    }) : true;
  return (i.useEffect(() => {
    null == O || S || v.current || (v.current = true, (0, _.Z)({
      product: O,
      overrideTitle: T,
      analyticsLocations: n,
      onCloseCallback: t,
      purchaseType: b.o8.FIAT
    }))
  }, [O, n, t, S, T]), S) ? (0, r.jsx)(g.C3, {
    children: (0, r.jsx)(E.Z, {})
  }) : null
}

function S(e) {
  let {
    isGift: t,
    giftCode: n,
    selectedGiftStyle: a,
    hasSentMessage: o,
    giftRecipient: _,
    giftMessageError: g,
    isSendingMessage: E
  } = (0, p.wD)(), b = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), y = i.useRef(null), {
    selectedSkuId: O
  } = (0, h.JL)(), S = (0, s.e7)([c.Z], () => c.Z.getProduct(O)), {
    confettiColors: T
  } = (0, u.Z)(null == S ? true : S.styles);
  return t ? (0, r.jsxs)("div", {
    ref: y,
    children: [(0, r.jsx)(m.Z, {
      giftCode: n,
      onClose: e.handleClose,
      selectedGiftStyle: a,
      hasSentMessage: o,
      giftRecipient: _,
      giftMessageError: g,
      isSendingMessage: E
    }), !e.hideConfetti && !b && (0, r.jsx)(d.Z, {
      confettiTarget: y.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, f.vK)(null == S ? true : S.categorySkuId),
      colors: null == T ? true : T.map(e => e.toHexString())
    })]
  }) : (0, r.jsx)(I, v({}, e))
}