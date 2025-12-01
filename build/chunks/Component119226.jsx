/** Chunk was on web.js **/
/** chunk id: 119226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./314940.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk583434 = require("./583434.js"),
  Chunk216541 = require("./216541.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk479446 = require("./479446.js"),
  Chunk981632 = require("./981632.jsx"),
  Chunk731896 = require("./731896.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk998502 = require("./998502.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk610868 = require("./610868.js"),
  Chunk241822 = require("./241822.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function C(e) {
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
    className: y.giftMainAnimationWrapper,
    children: (0, r.jsx)(A, T(S({}, i), {
      avatarDecoration: n,
      src: a,
      className: y.avatar,
      size: o.EFr.SIZE_152,
      "aria-label": b.intl.string(b.t.lqaIxI)
    }))
  })
}

function N(e) {
  var t;
  let {
    skuId: n
  } = e, i = null == (t = (0, _.V)(n)) ? true : t.config;
  return (0, r.jsxs)("div", {
    className: y.profileEffectContainer,
    children: [(0, r.jsx)("img", {
      src: O,
      alt: null == i ? true : i.accessibilityLabel,
      className: y.profileEffectBackground
    }), (0, r.jsx)(m.Z, {
      skuId: n
    })]
  })
}

function P(e) {
  let {
    nameplate: t
  } = e;
  return (0, r.jsx)("div", {
    className: y.nameplateContainer,
    children: (0, r.jsx)(d.Z, {
      nameplate: t,
      className: y.nameplate,
      nameplatePreviewSize: "xlarge",
      isHighlighted: true,
      showPlaceholderUser: true
    })
  })
}
let R = e => {
  let {
    sku: t
  } = e, {
    selectedGiftStyle: n
  } = (0, g.wD)(), {
    product: o
  } = (0, c.T)(null == t ? true : t.id), s = null == o ? true : o.items[0];
  if ((null == o ? true : o.type) === a.Z.BUNDLE) return (0, r.jsx)("div", {
    className: y.bundlePreviewWrapper,
    children: (0, r.jsx)(u.d, {
      product: o,
      isPurchased: false,
      isHighlighted: false
    })
  });
  let l = (0, i.EQ)(s).with({
    type: a.Z.AVATAR_DECORATION
  }, e => (0, r.jsx)(C, {
    avatarDecoration: e
  })).with({
    type: a.Z.PROFILE_EFFECT
  }, e => (0, r.jsx)(N, {
    skuId: e.skuId
  })).with({
    type: a.Z.NAMEPLATE
  }, e => (0, r.jsx)(P, {
    nameplate: e
  })).otherwise(() => null);
  return null != n && null == l ? (0, r.jsx)("div", {
    className: y.giftMainAnimationWrapper,
    children: (0, r.jsx)(p.Z, {
      defaultAnimationState: f.SR.LOOP,
      giftStyle: n,
      shouldAnimate: true,
      className: y.__invalid_giftMainAnimation
    })
  }) : l
};

function w(e) {
  let {
    sku: t
  } = e;
  return t.productLine === E.POd.COLLECTIBLES ? (0, r.jsx)(R, {
    sku: t
  }) : null
}