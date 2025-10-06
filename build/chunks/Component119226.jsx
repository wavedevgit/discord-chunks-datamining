/** Chunk was on web.js **/
/** chunk id: 119226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./314940.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk583434 = require("./583434.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk479446 = require("./479446.js"),
  Chunk981632 = require("./981632.jsx"),
  Chunk731896 = require("./731896.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk998502 = require("./998502.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk552044 = require("./552044.js"),
  Chunk241822 = require("./241822.js");

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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function S(e) {
  let {
    avatarDecoration: t
  } = e, {
    avatarDecorationSrc: n,
    eventHandlers: i,
    avatarPlaceholderSrc: a
  } = (0, l.Z)({
    avatarDecorationOverride: t,
    size: (0, s.y9)(o.EFr.SIZE_152)
  });
  return (0, r.jsx)("div", {
    className: E.giftMainAnimationWrapper,
    children: (0, r.jsx)(T, I(O({}, i), {
      avatarDecoration: n,
      src: a,
      className: E.avatar,
      size: o.EFr.SIZE_152,
      "aria-label": g.intl.string(g.t.lqaIxM)
    }))
  })
}

function A(e) {
  var t;
  let {
    skuId: n
  } = e, i = null == (t = (0, _.V)(n)) ? true : t.config;
  return (0, r.jsxs)("div", {
    className: E.profileEffectContainer,
    children: [(0, r.jsx)("img", {
      src: b,
      alt: null == i ? true : i.accessibilityLabel,
      className: E.profileEffectBackground
    }), (0, r.jsx)(p.Z, {
      skuId: n
    })]
  })
}

function C(e) {
  let {
    nameplate: t
  } = e;
  return (0, r.jsx)("div", {
    className: E.nameplateContainer,
    children: (0, r.jsx)(u.Z, {
      nameplate: t,
      className: E.nameplate,
      nameplatePreviewSize: "xlarge",
      isHighlighted: true,
      showPlaceholderUser: true
    })
  })
}

function N(e) {
  let {
    sku: t
  } = e, {
    selectedGiftStyle: n
  } = (0, m.wD)(), {
    product: o
  } = (0, c.T)(null == t ? true : t.id), s = null == o ? true : o.items[0], l = (0, i.EQ)(s).with({
    type: a.Z.AVATAR_DECORATION
  }, e => (0, r.jsx)(S, {
    avatarDecoration: e
  })).with({
    type: a.Z.PROFILE_EFFECT
  }, e => (0, r.jsx)(A, {
    skuId: e.skuId
  })).with({
    type: a.Z.NAMEPLATE
  }, e => (0, r.jsx)(C, {
    nameplate: e
  })).otherwise(() => null);
  return null != n && null == l ? (0, r.jsx)("div", {
    className: E.giftMainAnimationWrapper,
    children: (0, r.jsx)(f.Z, {
      defaultAnimationState: d.SR.LOOP,
      giftStyle: n,
      shouldAnimate: true,
      className: E.__invalid_giftMainAnimation
    })
  }) : l
}