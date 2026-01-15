/** Chunk was on web.js **/
/** chunk id: 280880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk343747 = require("./343747.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk349971 = require("./349971.js"),
  Chunk441419 = require("./441419.js");

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e) {
  var {
    guild: t,
    focused: n,
    onSelectItem: i
  } = e, p = g(e, ["guild", "focused", "onSelectItem"]);
  let {
    canCreateExpressions: h
  } = (0, l.XJ)(t);
  return (0, r.jsx)(o.u, {
    text: u.intl.string(u.t["fHo+z1"]),
    shouldShow: !h,
    children: (0, r.jsx)("li", {
      className: d.soundButtonWrapper,
      children: (0, r.jsxs)(s.kL8, m(_({}, p), {
        "aria-label": u.intl.formatToPlainString(u.t.c1qVYh, {
          guildName: t.name
        }),
        className: a()(f.soundAddButton, {
          [f.focused]: n,
          [f.disabled]: !h
        }),
        onClick: () => null != i ? i() : (0, c.Z)(t.id),
        children: [(0, r.jsx)(s.qJs, {
          size: "sm",
          color: "currentColor"
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: h ? "currentColor" : "text-muted",
          children: u.intl.string(u.t["8Fu/S7"])
        })]
      }))
    })
  })
}