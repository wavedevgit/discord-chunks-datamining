/** Chunk was on web.js **/
/** chunk id: 840720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk305347 = require("./305347.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk798446 = require("./798446.js");

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

function m(e) {
  let {
    className: t,
    guildTag: n,
    guildBadge: a,
    guildId: f,
    guildName: p,
    guildIcon: m,
    guildIconSize: g
  } = e, E = i.useRef(null), [b, y] = i.useState(false);
  return i.useEffect(() => {
    let e = E.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && y(e.offsetWidth < e.scrollWidth)
  }, []), (0, r.jsxs)("div", {
    className: o()(d.container, t),
    children: [(0, r.jsxs)("div", {
      className: d.guildPrefixContainer,
      children: [(0, r.jsx)(l.Ft, {
        guildId: f,
        guildName: p,
        guildIcon: m,
        iconSize: g,
        className: d.guildPrefixIcon,
        animate: false
      }), (0, r.jsx)("div", {
        className: d.details,
        children: (0, r.jsx)(s.ua7, {
          text: p,
          color: s.ua7.Colors.PRIMARY,
          shouldShow: b,
          children: e => (0, r.jsx)("span", h(_({
            ref: E
          }, e), {
            className: d.guildName,
            children: p
          }))
        })
      })]
    }), (0, r.jsx)("div", {
      className: d.tagContainer,
      children: (0, r.jsx)(c.m0, {
        guildId: f,
        className: d.tag,
        guildTag: n,
        guildBadge: a,
        badgeSize: u.Gg.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/semibold",
        badgeClassName: d.badge
      })
    })]
  })
}