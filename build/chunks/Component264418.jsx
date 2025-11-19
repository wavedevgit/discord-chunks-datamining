/** Chunk was on web.js **/
/** chunk id: 264418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => O,
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk945909 = require("./945909.js"),
  Chunk254477 = require("./254477.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e) {
  var t, n, {
      title: a,
      body: h,
      badge: g,
      graphic: y,
      size: O = "md",
      actions: v,
      textLink: I,
      gradientColor: T,
      onRequestClose: S,
      popoverRef: A,
      position: C,
      caretConfig: N,
      scrollBehavior: R
    } = e,
    P = b(e, ["title", "body", "badge", "graphic", "size", "actions", "textLink", "gradientColor", "onRequestClose", "popoverRef", "position", "caretConfig", "scrollBehavior"]);
  let [D, w] = i.useState(null != C ? C : "top"), [L, x] = i.useState({
    position: (0, _.z)(D),
    align: null != (t = null == N ? true : N.align) ? t : "center",
    customOffset: null == N ? true : N.customOffset
  }), M = i.useCallback((e, t) => {
    null == S || S(t)
  }, [S]), k = i.useCallback(() => {
    null == S || S("user:explicit")
  }, [S]), j = i.useCallback(e => {
    w(e), x(t => E(m({}, t), {
      position: (0, _.z)(e)
    }))
  }, []);
  return (0, r.jsx)(l.m, E(m({}, P), {
    position: D,
    onRequestClose: M,
    gradientColor: T,
    onPositionChange: j,
    scrollBehavior: R,
    children: (0, r.jsxs)("div", {
      ref: A,
      "data-mana-component": "popover",
      children: [(0, r.jsx)(d.u, {
        onClick: k,
        variant: null != T ? "color-mix" : true
      }), null != y && (0, r.jsx)("div", {
        className: o()(p.graphic, {
          [p["graphic--".concat(O)]]: null != O
        }),
        children: (0, r.jsx)(s.zsu, E(m({}, y), {
          aspectRatio: null != (n = y.aspectRatio) ? n : "sm" === O ? "2/1" : "16/9"
        }))
      }), (0, r.jsx)(f.Y, {
        title: a,
        body: h,
        badge: g,
        textLink: I
      }), null != v && v.length > 0 ? (0, r.jsx)(c.k, {
        actions: v
      }) : null, (0, r.jsx)(u.$, {
        caretConfig: L
      })]
    })
  }))
}
let v = O