/** Chunk was on web.js **/
/** chunk id: 119226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./314940.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk583434 = require("./583434.js"),
  Chunk216541 = require("./216541.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk479446 = require("./479446.js"),
  Chunk981632 = require("./981632.jsx"),
  Chunk731896 = require("./731896.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk998502 = require("./998502.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk610868 = require("./610868.js"),
  Chunk241822 = require("./241822.js");

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

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function N(e) {
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
    className: O.giftMainAnimationWrapper,
    children: (0, r.jsx)(C, A(T({}, i), {
      avatarDecoration: n,
      src: a,
      className: O.avatar,
      size: o.EFr.SIZE_152,
      "aria-label": y.intl.string(y.t.lqaIxI)
    }))
  })
}

function R(e) {
  var t;
  let {
    skuId: n
  } = e, i = null == (t = (0, p.V)(n)) ? true : t.config;
  return (0, r.jsxs)("div", {
    className: O.profileEffectContainer,
    children: [(0, r.jsx)("img", {
      src: v,
      alt: null == i ? true : i.accessibilityLabel,
      className: O.profileEffectBackground
    }), (0, r.jsx)(h.Z, {
      skuId: n
    })]
  })
}

function P(e) {
  let {
    nameplate: t
  } = e;
  return (0, r.jsx)("div", {
    className: O.nameplateContainer,
    children: (0, r.jsx)(d.Z, {
      nameplate: t,
      className: O.nameplate,
      nameplatePreviewSize: "xlarge",
      isHighlighted: true,
      showPlaceholderUser: true
    })
  })
}
let w = e => {
    let {
      sku: t
    } = e, {
      selectedGiftStyle: n
    } = (0, E.wD)(), {
      product: o
    } = (0, c.T)(null == t ? true : t.id), s = null == o ? true : o.items[0];
    if ((null == o ? true : o.type) === a.Z.BUNDLE) return (0, r.jsx)("div", {
      className: O.bundlePreviewWrapper,
      children: (0, r.jsx)(u.d, {
        product: o,
        isPurchased: false,
        isHighlighted: false
      })
    });
    let l = (0, i.EQ)(s).with({
      type: a.Z.AVATAR_DECORATION
    }, e => (0, r.jsx)(N, {
      avatarDecoration: e
    })).with({
      type: a.Z.PROFILE_EFFECT
    }, e => (0, r.jsx)(R, {
      skuId: e.skuId
    })).with({
      type: a.Z.NAMEPLATE
    }, e => (0, r.jsx)(P, {
      nameplate: e
    })).otherwise(() => null);
    return null != n && null == l ? (0, r.jsx)("div", {
      className: O.giftMainAnimationWrapper,
      children: (0, r.jsx)(_.Z, {
        defaultAnimationState: f.SR.LOOP,
        giftStyle: n,
        shouldAnimate: true,
        className: O.__invalid_giftMainAnimation
      })
    }) : l
  },
  D = e => {
    let {
      sku: t
    } = e;
    return (0, r.jsx)("div", {
      className: O.slayerStorefrontReviewImageWrapper,
      children: (0, r.jsx)(m.A, {
        className: O.slayerStorefrontReviewImage,
        sku: t
      })
    })
  };

function L(e) {
  let {
    sku: t
  } = e;
  return t.productLine === b.POd.COLLECTIBLES ? (0, r.jsx)(w, {
    sku: t
  }) : t.productLine === b.POd.SOCIAL_LAYER_GAME_ITEM ? (0, r.jsx)(D, {
    sku: t
  }) : null
}