/** Chunk was on web.js **/
/** chunk id: 144771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => E,
  G: () => g
}), require("./856094.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk339695 = require("./339695.jsx"),
  Chunk64027 = require("./64027.jsx"),
  Chunk595824 = require("./595824.jsx"),
  Chunk402453 = require("./402453.jsx"),
  Chunk325380 = require("./325380.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    leading: t,
    actions: n = [],
    actionsFullWidth: i = false,
    leadingLayout: l = "default"
  } = e;
  if (null == t && n.length < 1) return null;
  let c = ["primary", "critical-primary", "expressive"],
    d = n.findLastIndex(e => null != e.variant && c.includes(e.variant));
  return (0, r.jsxs)("footer", {
    className: a()(u.actionBar, u.section, {
      [u.actionBarLayoutChatInput]: "chat-input" === l
    }),
    children: [null != t && (0, r.jsx)("div", {
      className: u.actionBarLeading,
      children: t
    }), (0, r.jsx)("div", {
      className: a()(u.actionBarTrailing, {
        [u.actionBarTrailingFullWidth]: i
      }),
      children: (0, r.jsx)(s.h, {
        fullWidth: i,
        children: null == n ? true : n.map((e, t) => {
          var n;
          return (0, r.jsx)(o.z, f({
            autoFocus: null != (n = e.autoFocus) ? n : d === t
          }, e), t)
        })
      })
    })]
  })
}

function E(e) {
  var {
    label: t
  } = e, n = m(e, ["label"]);
  let {
    i18n: i
  } = (0, c.ZF)();
  return (0, r.jsx)(l.X, _(f({}, n), {
    label: null != t ? t : i.MODAL_DONT_SHOW_AGAIN,
    labelType: "secondary"
  }))
}