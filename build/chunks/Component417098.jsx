/** Chunk was on web.js **/
/** chunk id: 417098, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $T: () => T,
  Hv: () => E,
  PM: () => S,
  Z_: () => A,
  eC: () => I,
  zr: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk1624 = require("./1624.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = g(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let E = Object.freeze({
  DEFAULT: Chunk1624.Lx,
  NEUTRAL: Chunk1624.NT,
  BRAND: Chunk1624.x8,
  WARNING: Chunk1624.SO,
  DANGER: Chunk1624.HW,
  INFO: Chunk1624.io,
  STREAMER_MODE: Chunk1624.kL,
  CUSTOM: Chunk1624.P4,
  SPOTIFY: Chunk1624.AU,
  PLAYSTATION: Chunk1624._9,
  PREMIUM_TIER_0: Chunk1624.zw,
  PREMIUM_TIER_1: Chunk1624.G_,
  PREMIUM_TIER_2: Chunk1624.NS
});

function y(e) {
  let {
    children: t,
    className: n,
    minor: i = false
  } = e, s = m(e, ["children", "className", "minor"]);
  return (0, r.jsx)(o.vN3, {
    children: (0, r.jsx)("button", h(p({
      className: a()(d.x6, n, {
        [d.oy]: i
      })
    }, s), {
      children: t
    }))
  })
}

function b(e) {
  null != e && l.default.track(c.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
    notice_type: e
  })
}

function O(e) {
  null != e && l.default.track(c.HAw.APP_NOTICE_CLOSED, {
    notice_type: e
  })
}

function v(e, t) {
  l.default.track(c.HAw.APP_NOTICE_ANCHOR_CLICKED, {
    notice_type: e,
    href: t
  })
}

function A(e) {
  let {
    children: t,
    noticeType: n
  } = e, i = m(e, ["children", "noticeType"]);
  return (0, r.jsx)(y, h(p({}, i), {
    onClick: e => {
      null != i.onClick && i.onClick(e), b(n)
    },
    children: t
  }))
}

function I(e) {
  let {
    children: t,
    href: n,
    noticeType: i
  } = e, a = m(e, ["children", "href", "noticeType"]);
  return (0, r.jsx)(o.MzZ, h(p({}, a), {
    className: d.x6,
    href: n,
    onClick: e => {
      var t;
      null == (t = a.onClick) || t.call(a, e), v(i, n)
    },
    children: t
  }))
}

function S(e) {
  let {
    onClick: t,
    noticeType: n,
    className: i
  } = e;
  return (0, r.jsx)(o.DUT, {
    focusProps: {
      offset: 6
    },
    className: a()(d.b, i),
    onClick: () => {
      t(), O(n)
    },
    "aria-label": u.intl.string(u.t.WAI6xu),
    children: (0, r.jsx)(o.PGe, {
      size: "sm",
      color: "currentColor",
      className: d.ut
    })
  })
}

function T(e) {
  let {
    color: t = E.DEFAULT,
    className: n,
    style: i,
    ref: o,
    children: l
  } = e;
  return (0, r.jsx)("div", {
    ref: o,
    className: a()(d.lm, {
      [d.Fr]: s.Fr
    }, n, t),
    style: null != i ? i : true,
    children: l
  })
}