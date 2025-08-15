/** Chunk was on web.js **/
/** chunk id: 49308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => I
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
  Chunk215023 = require("./215023.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e) {
  let {
    handleClose: t,
    analyticsLocations: n
  } = e, {
    skusById: a,
    selectedSkuId: l,
    application: u,
    paymentError: d,
    purchaseError: f,
    purchasePreviewError: p
  } = (0, h.JL)(), m = (0, s.e7)([c.Z], () => c.Z.getProduct(l)), y = i.useRef(false);
  o()(null != l, "Expected selectedSkuId"), o()(null != u, "Expected application");
  let O = a[l];
  o()(null != O, "Expected sku");
  let v = null != d || null != f || null != p;
  return (i.useEffect(() => {
    null == m || v || y.current || (y.current = true, (0, _.Z)({
      product: m,
      analyticsLocations: n,
      onCloseCallback: t,
      purchaseType: b.o8.FIAT
    }))
  }, [m, n, t, v]), v) ? (0, r.jsx)(g.C3, {
    children: (0, r.jsx)(E.Z, {})
  }) : null
}

function I(e) {
  let {
    isGift: t,
    giftCode: n,
    selectedGiftStyle: a,
    hasSentMessage: o,
    giftRecipient: _,
    giftMessageError: g,
    isSendingMessage: E
  } = (0, p.wD)(), b = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), y = i.useRef(null), {
    selectedSkuId: I
  } = (0, h.JL)(), T = (0, s.e7)([c.Z], () => c.Z.getProduct(I)), {
    confettiColors: S
  } = (0, u.Z)(null == T ? true : T.styles);
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
      sprites: (0, f.vK)(null == T ? true : T.categorySkuId),
      colors: null == S ? true : S.map(e => e.toHexString())
    })]
  }) : (0, r.jsx)(v, O({}, e))
}