/** Chunk was on web.js **/
/** chunk id: 292366, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk30008 = require("./30008.jsx"),
  Chunk957565 = require("./957565.js"),
  Chunk307600 = require("./307600.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk489414 = require("./489414.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk592392 = require("./592392.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
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

function A(e) {
  switch (e) {
    case d.in.PRIMARY:
    case d.in.PREMIUM:
      return o.$n.Colors.BRAND;
    case d.in.SUCCESS:
      return o.$n.Colors.GREEN;
    case d.in.DESTRUCTIVE:
      return o.$n.Colors.RED;
    default:
      return o.$n.Colors.PRIMARY
  }
}

function I(e) {
  let {
    url: t,
    onSelect: n
  } = e;
  return p.p5 && null != t ? (0, r.jsx)(l.W1t, {
    navId: "component-button",
    onClose: c.Z_,
    "aria-label": g.intl.string(g.t.tvTXy8),
    onSelect: n,
    children: (0, r.jsx)(l.rXV, {
      children: (0, r.jsx)(l.Drp, {
        id: "copy",
        label: g.intl.string(g.t.uHhnfa),
        action: () => (0, p.C)(t)
      })
    })
  }) : null
}

function S(e) {
  let t, {
      label: n,
      style: i,
      disabled: p,
      emoji: g,
      url: y,
      skuId: O
    } = e,
    {
      executeStateUpdate: S,
      visualState: T,
      isDisabled: C
    } = (0, h.At)(e),
    N = (0, f.Q)(O),
    R = null != O && i === d.in.PREMIUM,
    w = R && (null == N ? true : N.disabled),
    P = R ? null == N ? true : N.label : n,
    D = null != g,
    x = null != P && P.length > 0,
    L = i === d.in.LINK && null != y && y.length > 0,
    j = T === m.BB.LOADING || R && null == N;
  return t = L ? () => {
    (0, _.h)({
      href: null != y ? y : "",
      shouldConfirm: true
    })
  } : R ? null != N && false === N.disabled ? N.onClick : s.noop : () => S(), (0, r.jsxs)(o.$n, {
    "data-migration-pending": true,
    color: A(i),
    size: o.$n.Sizes.SMALL,
    disabled: p || T === m.BB.DISABLED || C || w,
    onClick: t,
    onContextMenu: e => {
      L && (0, c.jA)(e, e => (0, r.jsx)(I, v(b({}, e), {
        url: y
      })))
    },
    role: L ? "link" : "button",
    children: [(0, r.jsxs)("div", {
      className: a()(E.Qs, {
        [E.R]: j,
        [E.M2]: R
      }),
      "aria-hidden": j,
      children: [R ? (0, r.jsx)("div", {
        className: E.sV,
        children: (0, r.jsx)(l.U1X, {
          size: "xs",
          color: "white"
        })
      }) : null, D ? (0, r.jsx)(u.A, {
        className: a()({
          [E.MR]: x
        }),
        src: g.src,
        emojiId: g.id,
        emojiName: g.name,
        animated: g.animated
      }) : null, x ? (0, r.jsx)("div", {
        className: E.Pf,
        children: P
      }) : null, L ? (0, r.jsx)(l.tfB, {
        size: "xs",
        color: "currentColor",
        className: E.LE
      }) : null]
    }), j ? (0, r.jsx)("div", {
      className: E.Lq,
      children: (0, r.jsx)(l.nvX, {
        dotRadius: 3.5,
        themed: true
      })
    }) : null]
  })
}