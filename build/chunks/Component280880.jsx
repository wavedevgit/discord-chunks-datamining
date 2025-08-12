/** Chunk was on web.js **/
/** chunk id: 280880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk343747 = require("./343747.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk980028 = require("./980028.js"),
  Chunk116890 = require("./116890.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function E(e) {
  var {
    guild: t,
    focused: n,
    onSelectItem: i
  } = e, f = m(e, ["guild", "focused", "onSelectItem"]);
  let {
    canCreateExpressions: p
  } = (0, s.XJ)(t);
  return (0, r.jsx)(a.ua7, {
    text: c.intl.string(c.t["fHo+z8"]),
    shouldShow: !p,
    children: e => (0, r.jsx)("li", h(_({
      className: u.soundButtonWrapper
    }, e), {
      children: (0, r.jsxs)(a.kL8, h(_({}, f), {
        "aria-label": c.intl.formatToPlainString(c.t.c1qVYm, {
          guildName: t.name
        }),
        className: o()(d.soundAddButton, {
          [d.focused]: n,
          [d.disabled]: !p
        }),
        onClick: () => null != i ? i() : (0, l.Z)(t.id),
        children: [(0, r.jsx)(a.qJs, {
          size: "sm",
          color: "currentColor"
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: p ? "currentColor" : "text-muted",
          children: c.intl.string(c.t["8Fu/S0"])
        })]
      }))
    }))
  })
}