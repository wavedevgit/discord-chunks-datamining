/** Chunk was on web.js **/
/** chunk id: 532657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk454399 = require("./454399.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk556638 = require("./556638.js"),
  Chunk175996 = require("./175996.js");

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

function m(e) {
  var t;
  let {
    text: n,
    tooltipText: a,
    textVariant: d = "text-xs/medium",
    textClassName: p,
    "aria-label": m,
    icon: h,
    canTruncate: g = true,
    hideTooltip: E = false,
    hideText: b = false
  } = e, y = i.useRef(null), [O, v] = i.useState(false), S = {
    variant: d,
    color: "none",
    className: o()(g && u.truncated, p)
  }, I = null != n && null == a && g, T = !E && (null != a || I || b), C = null != (t = null != a ? a : n) ? t : "", A = (null == d ? true : d.startsWith("text-sm")) ? u.textSm : u.textXs, N = i.useCallback(() => {
    if (I) {
      let {
        current: e
      } = y;
      v(null != e && e.offsetWidth < e.scrollWidth || null != a || b)
    } else v(true)
  }, [I, a, b]), P = i.useCallback(() => {
    v(false)
  }, []);
  return null == h && b ? null : T ? (0, r.jsx)(s.i, {
    body: C,
    asset: h,
    assetSize: 16,
    delay: c.X,
    shouldShow: O,
    asContainer: true,
    children: (0, r.jsxs)("div", {
      className: o()(u.container, u.textWithIconContainer, A),
      "aria-label": m,
      onMouseEnter: N,
      onMouseLeave: P,
      children: [h, !b && (0, r.jsx)(l.Text, _(f({
        ref: y
      }, S), {
        children: n
      }))]
    })
  }) : (0, r.jsxs)("div", {
    className: o()(u.container, u.textWithIconContainer, A),
    children: [h, !b && (0, r.jsx)(l.Text, _(f({}, S), {
      children: n
    }))]
  })
}