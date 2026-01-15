/** Chunk was on web.js **/
/** chunk id: 28664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => g
}), require("./388685.js"), require("./415506.js");
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
    children: t,
    text: n,
    keyboardShortcut: p,
    __unsupportedReactNodeAsText: m,
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
  } = e, N = h(e, ["children", "text", "keyboardShortcut", "__unsupportedReactNodeAsText", "asContainer", "tag", "position", "align", "spacing", "layerContext", "targetElementRef", "anchorRef", "caretConfig", "positionKey", "ariaHidden"]);
  let [P, w] = i.useState(null);
  i.useLayoutEffect(() => {
    null != I && w(I.current)
  }, [I]);
  let R = i.useCallback(e => {
      null == I && w(e), (0, c.k$)(S, e)
    }, [S, I]),
    {
      tooltipId: D,
      isVisible: x,
      targetElementRef: L,
      trigger: j
    } = (0, d.Q)(_({
      children: t,
      targetElementRef: R,
      asContainer: g,
      containerTag: E,
      ariaHidden: A
    }, N)),
    [M, k] = i.useState(false),
    {
      defaultLayerContext: U
    } = (0, o.ZFG)(),
    G = i.useMemo(() => null != m ? m : null == n || "" === n ? null : null != p && "" !== p ? (0, r.jsxs)("div", {
      className: f.tooltipWithShortcut,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        children: n
      }), (0, r.jsx)(s.M2$, {
        shortcut: p
      })]
    }) : n, [n, p, m]),
    Z = null != G && ("string" != typeof G || "" !== G),
    F = x || M;
  i.useEffect(() => {
    x && Z ? k(true) : Z || k(false)
  }, [x, Z]);
  let B = i.useCallback(() => {
      k(false)
    }, []),
    V = (0, u.Q)({
      shouldShow: x,
      onExitComplete: B
    });
  if (!Z && (x || !M)) return t;
  if (null == t || !g && !i.isValidElement(t)) return null;
  let H = null != C ? C : (0, c.Sw)(n),
    Y = V((e, t) => t ? (0, r.jsx)(l.N, {
      isVisible: x,
      isRendered: F,
      targetElementRef: L,
      targetElement: P,
      anchorRef: I,
      id: D,
      content: G,
      position: b,
      align: y,
      spacing: O,
      caretConfig: T,
      layerContext: null != v ? v : U,
      animationStyle: e,
      positionKey: H
    }) : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [j, A || null == G || "" === G ? null : (0, r.jsx)(a.n, {
      id: D,
      children: G
    }), Y]
  })
}