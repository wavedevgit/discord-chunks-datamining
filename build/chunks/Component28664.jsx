/** Chunk was on web.js **/
/** chunk id: 28664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => g
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk635041 = require("./635041.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550656 = require("./550656.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk342134 = require("./342134.js"),
  Chunk983887 = require("./983887.js"),
  Chunk847310 = require("./847310.js");

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
  var {
    children: t,
    text: n,
    keyboardShortcut: p,
    __unsupportedReactNodeAsText: h,
    asContainer: g = false,
    tag: E = "span",
    position: b = "top",
    align: y = "center",
    spacing: O,
    layerContext: v,
    targetElementRef: S,
    anchorRef: I,
    caretConfig: T,
    positionKey: C,
    ariaHidden: A = false
  } = e, N = m(e, ["children", "text", "keyboardShortcut", "__unsupportedReactNodeAsText", "asContainer", "tag", "position", "align", "spacing", "layerContext", "targetElementRef", "anchorRef", "caretConfig", "positionKey", "ariaHidden"]);
  let {
    tooltipId: P,
    isVisible: R,
    targetElementRef: w,
    trigger: D
  } = (0, d.Q)(_({
    children: t,
    targetElementRef: S,
    asContainer: g,
    containerTag: E,
    ariaHidden: A
  }, N)), x = (0, u.Q)({
    shouldShow: R
  }), {
    defaultLayerContext: L
  } = (0, o.ZFG)(), j = i.useMemo(() => null != h ? h : null == n || "" === n ? null : null != p && "" !== p ? (0, r.jsxs)("div", {
    className: f.tooltipWithShortcut,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      children: n
    }), (0, r.jsx)(s.M2$, {
      shortcut: p
    })]
  }) : n, [n, p, h]);
  if (null == j || "string" == typeof j && "" === j) return t;
  if (null == t || !g && !i.isValidElement(t)) return null;
  let M = null != C ? C : (0, c.Sw)(n),
    k = x((e, t) => t ? (0, r.jsx)(l.N, {
      isVisible: R,
      isRendered: true,
      targetElementRef: w,
      anchorRef: I,
      id: P,
      content: j,
      position: b,
      align: y,
      spacing: O,
      caretConfig: T,
      layerContext: null != v ? v : L,
      animationStyle: e,
      positionKey: M
    }) : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [D, A || null == j || "" === j ? null : (0, r.jsx)(a.n, {
      id: P,
      children: j
    }), k]
  })
}