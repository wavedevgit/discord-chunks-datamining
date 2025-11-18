/** Chunk was on web.js **/
/** chunk id: 225779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DM: () => E,
  Ey: () => b,
  No: () => I,
  Ry: () => S,
  qX: () => A,
  u3: () => T
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk438944 = require("./438944.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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

function p(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let E = Object.freeze({
  DEFAULT: Chunk438944.colorDefault,
  NEUTRAL: Chunk438944.colorNeutral,
  BRAND: Chunk438944.colorBrand,
  WARNING: Chunk438944.colorWarning,
  DANGER: Chunk438944.colorDanger,
  INFO: Chunk438944.colorInfo,
  STREAMER_MODE: Chunk438944.colorStreamerMode,
  CUSTOM: Chunk438944.colorCustom,
  SPOTIFY: Chunk438944.colorSpotify,
  PLAYSTATION: Chunk438944.colorPlayStation,
  PREMIUM_TIER_0: Chunk438944.colorPremiumTier0,
  PREMIUM_TIER_1: Chunk438944.colorPremiumTier1,
  PREMIUM_TIER_2: Chunk438944.colorPremiumTier2
});

function b(e) {
  var {
    children: t,
    className: n,
    minor: i = false
  } = e, o = m(e, ["children", "className", "minor"]);
  return (0, r.jsx)(s.tEY, {
    children: (0, r.jsx)("button", h(_({
      className: a()(d.button, n, {
        [d.buttonMinor]: i
      })
    }, o), {
      children: t
    }))
  })
}

function y(e) {
  null != e && l.default.track(c.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
    notice_type: e
  })
}

function O(e) {
  null != e && l.default.track(c.rMx.APP_NOTICE_CLOSED, {
    notice_type: e
  })
}

function v(e, t) {
  l.default.track(c.rMx.APP_NOTICE_ANCHOR_CLICKED, {
    notice_type: e,
    href: t
  })
}

function I(e) {
  var {
    children: t,
    noticeType: n
  } = e, i = m(e, ["children", "noticeType"]);
  return (0, r.jsx)(b, h(_({}, i), {
    onClick: e => {
      null != i.onClick && i.onClick(e), y(n)
    },
    children: t
  }))
}

function T(e) {
  var {
    children: t,
    href: n,
    noticeType: i
  } = e, a = m(e, ["children", "href", "noticeType"]);
  return (0, r.jsx)(s.Anchor, h(_({}, a), {
    className: d.button,
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
  return (0, r.jsx)(s.P3F, {
    focusProps: {
      offset: 6
    },
    className: a()(d.closeButton, i),
    onClick: () => {
      t(), O(n)
    },
    "aria-label": u.intl.string(u.t.WAI6xu),
    children: (0, r.jsx)(s.Dio, {
      size: "sm",
      color: "currentColor",
      className: d.closeIcon
    })
  })
}

function A(e) {
  let {
    color: t = E.DEFAULT,
    className: n,
    style: i,
    ref: s,
    children: l
  } = e;
  return (0, r.jsx)("div", {
    ref: s,
    className: a()(d.notice, {
      [d.isMobile]: o.tq
    }, n, t),
    style: null != i ? i : true,
    children: l
  })
}