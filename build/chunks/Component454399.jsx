/** Chunk was on web.js **/
/** chunk id: 454399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => O
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk635041 = require("./635041.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk550656 = require("./550656.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk342134 = require("./342134.js"),
  Chunk983887 = require("./983887.js"),
  Chunk945845 = require("./945845.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
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
  var {
    children: t,
    title: n,
    body: a,
    asset: g,
    assetSize: y = 48,
    asContainer: O = false,
    element: v = "span",
    position: S = "top",
    align: I = "center",
    spacing: T,
    caretConfig: C,
    layerContext: A,
    targetElementRef: N,
    anchorRef: P,
    positionKey: R,
    ariaHidden: w = false
  } = e, D = b(e, ["children", "title", "body", "asset", "assetSize", "asContainer", "element", "position", "align", "spacing", "caretConfig", "layerContext", "targetElementRef", "anchorRef", "positionKey", "ariaHidden"]);
  let {
    tooltipId: x,
    isVisible: L,
    targetElementRef: j,
    trigger: M
  } = (0, m.Q)(E({
    children: t,
    targetElementRef: N,
    asContainer: O,
    containerTag: v,
    ariaHidden: w
  }, D)), k = null != n && ("string" != typeof n || "" !== n), U = null != g && !i.isValidElement(g), G = i.useMemo(() => (0, r.jsxs)("div", {
    className: o()(h.richTooltipContent, {
      [h.noAsset]: null == g
    }),
    children: [null != g && (0, r.jsx)("div", {
      className: h.assetContainer,
      style: {
        width: y
      },
      children: U ? (0, r.jsx)(l.zsu, E({}, g)) : g
    }), (0, r.jsxs)("div", {
      className: h.textContent,
      children: [k && (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        children: n
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: k ? "text-subtle" : "text-default",
        children: a
      })]
    })]
  }), [g, y, n, a, k, U]), Z = null != R ? R : "".concat((0, p.Sw)(null != n ? n : ""), "|").concat((0, p.Sw)(a)), F = (0, _.Q)({
    shouldShow: L
  });
  if (!O && !i.isValidElement(t)) return null;
  let B = F((e, t) => t ? (0, r.jsx)(f.pn, {
    isRichTooltip: true,
    children: (0, r.jsx)(d.N, {
      isVisible: L,
      isRendered: true,
      targetElementRef: j,
      anchorRef: P,
      id: x,
      content: G,
      position: S,
      align: I,
      spacing: T,
      caretConfig: C,
      layerContext: null != A ? A : u.nz,
      animationStyle: e,
      positionKey: Z,
      "data-mana-component": "rich-tooltip"
    })
  }) : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [M, w || null == G ? null : (0, r.jsx)(s.n, {
      id: x,
      children: G
    }), B]
  })
}