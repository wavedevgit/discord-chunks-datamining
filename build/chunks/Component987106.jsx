/** Chunk was on web.js **/
/** chunk id: 987106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk744969 = require("./744969.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk49012 = require("./49012.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk280501 = require("./280501.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk392061 = require("./392061.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  switch (e) {
    case d.ZJ.PRIMARY:
    case d.ZJ.PREMIUM:
      return s.zx.Colors.BRAND;
    case d.ZJ.SUCCESS:
      return s.zx.Colors.GREEN;
    case d.ZJ.DESTRUCTIVE:
      return s.zx.Colors.RED;
    default:
      return s.zx.Colors.PRIMARY
  }
}

function T(e) {
  let {
    url: t,
    onSelect: n
  } = e;
  return _.wS && null != t ? (0, r.jsx)(l.v2r, {
    navId: "component-button",
    onClose: c.Zy,
    "aria-label": g.intl.string(g.t.tvTXy8),
    onSelect: n,
    children: (0, r.jsx)(l.kSQ, {
      children: (0, r.jsx)(l.sNh, {
        id: "copy",
        label: g.intl.string(g.t.uHhnfa),
        action: () => (0, _.JG)(t)
      })
    })
  }) : null
}

function S(e) {
  let t, {
      label: n,
      style: i,
      disabled: _,
      emoji: g,
      url: b,
      skuId: O
    } = e,
    {
      executeStateUpdate: S,
      visualState: A,
      isDisabled: C
    } = (0, h.Ee)(e),
    N = (0, f.s)(O),
    R = null != O && i === d.ZJ.PREMIUM,
    P = R && (null == N ? true : N.disabled),
    D = R ? null == N ? true : N.label : n,
    w = null != g,
    x = null != D && D.length > 0,
    L = i === d.ZJ.LINK && null != b && b.length > 0,
    M = A === m.gH.LOADING || R && null == N;
  return t = L ? () => {
    (0, p.q)({
      href: null != b ? b : "",
      shouldConfirm: true
    })
  } : R ? null != N && false === N.disabled ? N.onClick : o.noop : () => S(), (0, r.jsxs)(s.zx, {
    "data-migration-pending": true,
    color: I(i),
    size: s.zx.Sizes.SMALL,
    disabled: _ || A === m.gH.DISABLED || C || P,
    onClick: t,
    onContextMenu: e => {
      L && (0, c.vq)(e, e => (0, r.jsx)(T, v(y({}, e), {
        url: b
      })))
    },
    role: L ? "link" : "button",
    children: [(0, r.jsxs)("div", {
      className: a()(E.content, {
        [E.hidden]: M,
        [E.premium]: R
      }),
      "aria-hidden": M,
      children: [R ? (0, r.jsx)("div", {
        className: E.shopIcon,
        children: (0, r.jsx)(l.EOn, {
          size: "xs",
          color: "white"
        })
      }) : null, w ? (0, r.jsx)(u.Z, {
        className: a()({
          [E.textEmoji]: x
        }),
        src: g.src,
        emojiId: g.id,
        emojiName: g.name,
        animated: g.animated
      }) : null, x ? (0, r.jsx)("div", {
        className: E.label,
        children: D
      }) : null, L ? (0, r.jsx)(l.rgF, {
        size: "xs",
        color: "currentColor",
        className: E.launchIcon
      }) : null]
    }), M ? (0, r.jsx)("div", {
      className: E.loading,
      children: (0, r.jsx)(l.bbz, {
        dotRadius: 3.5,
        themed: true
      })
    }) : null]
  })
}