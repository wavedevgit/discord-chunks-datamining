/** Chunk was on web.js **/
/** chunk id: 990078, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => g
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk140735 = require("./140735.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk717995 = require("./717995.jsx"),
  Chunk348275 = require("./348275.js"),
  Chunk505679 = require("./505679.js"),
  Chunk747781 = require("./747781.js"),
  Chunk894524 = require("./894524.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    children: t,
    text: n,
    keyboardShortcut: p,
    __unsupportedReactNodeAsText: m,
    asContainer: g = false,
    tag: E = "span",
    position: y = "top",
    align: b = "center",
    spacing: O,
    layerContext: v,
    targetElementRef: A,
    anchorRef: I,
    caretConfig: S,
    positionKey: T,
    ariaHidden: C = false
  } = e, N = h(e, ["children", "text", "keyboardShortcut", "__unsupportedReactNodeAsText", "asContainer", "tag", "position", "align", "spacing", "layerContext", "targetElementRef", "anchorRef", "caretConfig", "positionKey", "ariaHidden"]), [R, w] = i.useState(null);
  i.useLayoutEffect(() => {
    null != I && w(I.current)
  }, [I]);
  let P = i.useCallback(e => {
      null == I && w(e), (0, c.cZ)(A, e)
    }, [A, I]),
    {
      tooltipId: D,
      isVisible: x,
      targetElementRef: L,
      trigger: j
    } = (0, d.D)(_({
      children: t,
      targetElementRef: P,
      asContainer: g,
      containerTag: E,
      ariaHidden: C
    }, N)),
    [M, k] = i.useState(false),
    {
      defaultLayerContext: U
    } = (0, s.G98)(),
    G = i.useMemo(() => null != m ? m : null == n || "" === n ? null : null != p && "" !== p ? (0, r.jsxs)("div", {
      className: f.Cl,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        children: n
      }), (0, r.jsx)(o.e7I, {
        shortcut: p
      })]
    }) : n, [n, p, m]),
    V = null != G && ("string" != typeof G || "" !== G),
    F = x || M;
  i.useEffect(() => {
    x && V ? k(true) : V || k(false)
  }, [x, V]);
  let B = i.useCallback(() => {
      k(false)
    }, []),
    H = (0, u.j)({
      shouldShow: x,
      onExitComplete: B
    });
  if (!V && (x || !M)) return t;
  if (null == t || !g && !i.isValidElement(t)) return null;
  let Y = null != T ? T : (0, c.Xj)(n),
    W = H((e, t) => t ? (0, r.jsx)(l.R, {
      isVisible: x,
      isRendered: F,
      targetElementRef: L,
      targetElement: R,
      anchorRef: I,
      id: D,
      content: G,
      position: y,
      align: b,
      spacing: O,
      caretConfig: S,
      layerContext: null != v ? v : U,
      animationStyle: e,
      positionKey: Y
    }) : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [j, C || null == G || "" === G ? null : (0, r.jsx)(a.A, {
      id: D,
      children: G
    }), W]
  })
}