/** Chunk was on web.js **/
/** chunk id: 264418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk454028 = require("./454028.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk562618 = require("./562618.jsx");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  var {
    title: t,
    body: n,
    caretConfig: d = {
      position: "bottom",
      align: "center"
    },
    badge: _,
    asset: m,
    size: g = "md",
    actions: E,
    textLink: b,
    gradientColor: y,
    onRequestClose: O,
    popoverRef: v
  } = e, I = h(e, ["title", "body", "caretConfig", "badge", "asset", "size", "actions", "textLink", "gradientColor", "onRequestClose", "popoverRef"]);
  let T = i.useCallback(() => {
      null == O || O()
    }, [O]),
    S = i.useCallback(() => {
      null == O || O()
    }, [O]);
  return (0, r.jsx)(a.m, p(f({}, I), {
    onRequestClose: T,
    gradientColor: y,
    caretConfig: d,
    children: (0, r.jsxs)("div", {
      ref: v,
      children: [(0, r.jsx)(c.u, {
        onClick: S,
        colorMix: null != y
      }), null != m ? (0, r.jsx)(s.V, {
        asset: m,
        size: g
      }) : null, (0, r.jsx)(u.Y, {
        title: t,
        body: n,
        badge: _,
        textLink: b,
        hasBottomMargin: null != E
      }), null != E && E.length > 0 ? (0, r.jsx)(o.k, {
        actions: E
      }) : null, (0, r.jsx)(l.$, {
        caretConfig: d
      })]
    })
  }))
}