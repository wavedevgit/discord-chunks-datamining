/** Chunk was on web.js **/
/** chunk id: 938136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
}), require("./801541.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk889137 = require("./889137.js"),
  Chunk575593 = require("./575593.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954921 = require("./954921.jsx"),
  Chunk278539 = require("./278539.js"),
  Chunk674658 = require("./674658.js"),
  Chunk245068 = require("./245068.jsx"),
  Chunk550111 = require("./550111.jsx"),
  Chunk242874 = require("./242874.js"),
  Chunk75825 = require("./75825.jsx"),
  Chunk262737 = require("./262737.js"),
  Chunk182592 = require("./182592.jsx"),
  Chunk837921 = require("./837921.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk421514 = require("./421514.js"),
  Chunk306499 = require("./306499.js");

function A(e, t, n) {
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
      A(e, t, n[t])
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

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function C(e) {
  let {
    avatarDecoration: t
  } = e, {
    avatarDecorationSrc: n,
    eventHandlers: i,
    avatarPlaceholderSrc: a
  } = (0, l.A)({
    avatarDecorationOverride: t,
    size: (0, o.Te)(s._3J.SIZE_152)
  });
  return (0, r.jsx)("div", {
    className: y.rk,
    children: (0, r.jsx)(T, I(v({}, i), {
      avatarDecoration: n,
      src: a,
      className: y.my,
      size: s._3J.SIZE_152,
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
    className: y.YS,
    children: [(0, r.jsx)("img", {
      src: O,
      alt: null == i ? true : i.accessibilityLabel,
      className: y.Zp
    }), (0, r.jsx)(h.A, {
      skuId: n
    })]
  })
}

function R(e) {
  let {
    nameplate: t
  } = e;
  return (0, r.jsx)("div", {
    className: y.rz,
    children: (0, r.jsx)(d.A, {
      nameplate: t,
      className: y.qF,
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
  } = (0, g.Pv)(), {
    product: s
  } = (0, c.q)(null == t ? true : t.id), o = null == s ? true : s.items[0];
  if ((null == s ? true : s.type) === a.R.BUNDLE) return (0, r.jsx)("div", {
    className: y.ww,
    children: (0, r.jsx)(u.X, {
      product: s,
      isHighlighted: false
    })
  });
  let l = (0, i.YW)(o).with({
    type: a.R.AVATAR_DECORATION
  }, e => (0, r.jsx)(C, {
    avatarDecoration: e
  })).with({
    type: a.R.PROFILE_EFFECT
  }, e => (0, r.jsx)(N, {
    skuId: e.skuId
  })).with({
    type: a.R.NAMEPLATE
  }, e => (0, r.jsx)(R, {
    nameplate: e
  })).otherwise(() => null);
  return null != n && null == l ? (0, r.jsx)("div", {
    className: y.rk,
    children: (0, r.jsx)(p.A, {
      defaultAnimationState: f.oA.LOOP,
      giftStyle: n,
      shouldAnimate: true,
      className: y.__invalid_giftMainAnimation
    })
  }) : l
};

function P(e) {
  let {
    sku: t
  } = e;
  return t.productLine === E.EZt.COLLECTIBLES ? (0, r.jsx)(w, {
    sku: t
  }) : null
}