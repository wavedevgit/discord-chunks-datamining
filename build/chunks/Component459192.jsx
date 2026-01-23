/** Chunk was on web.js **/
/** chunk id: 459192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => O
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk140735 = require("./140735.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk717995 = require("./717995.jsx"),
  Chunk112317 = require("./112317.jsx"),
  Chunk348275 = require("./348275.js"),
  Chunk505679 = require("./505679.js"),
  Chunk747781 = require("./747781.js"),
  Chunk999630 = require("./999630.js");

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

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function O(e) {
  let {
    children: t,
    title: n,
    body: a,
    asset: g,
    assetSize: b = 48,
    asContainer: O = false,
    element: v = "span",
    position: A = "top",
    align: I = "center",
    spacing: S,
    caretConfig: T,
    layerContext: C,
    targetElementRef: N,
    anchorRef: R,
    positionKey: w,
    ariaHidden: P = false
  } = e, D = y(e, ["children", "title", "body", "asset", "assetSize", "asContainer", "element", "position", "align", "spacing", "caretConfig", "layerContext", "targetElementRef", "anchorRef", "positionKey", "ariaHidden"]), [x, L] = i.useState(null);
  i.useLayoutEffect(() => {
    null != R && L(R.current)
  }, [R]);
  let j = i.useCallback(e => {
      null == R && L(e), (0, p.cZ)(N, e)
    }, [N, R]),
    {
      tooltipId: M,
      isVisible: k,
      targetElementRef: U,
      trigger: G
    } = (0, h.D)(E({
      children: t,
      targetElementRef: j,
      asContainer: O,
      containerTag: v,
      ariaHidden: P
    }, D)),
    V = null != n && ("string" != typeof n || "" !== n),
    F = null != g && !i.isValidElement(g),
    B = i.useMemo(() => (0, r.jsxs)("div", {
      className: s()(m.jk, {
        [m.eb]: null == g
      }),
      children: [null != g && (0, r.jsx)("div", {
        className: m.s,
        style: {
          width: b
        },
        children: F ? (0, r.jsx)(l.vYh, E({}, g)) : g
      }), (0, r.jsxs)("div", {
        className: m.P_,
        children: [V && (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: n
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: V ? "text-subtle" : "text-default",
          children: a
        })]
      })]
    }), [g, b, n, a, V, F]),
    H = null != w ? w : "".concat((0, p.Xj)(null != n ? n : ""), "|").concat((0, p.Xj)(a)),
    Y = (0, _.j)({
      shouldShow: k
    });
  if (!O && !i.isValidElement(t)) return null;
  let W = Y((e, t) => t ? (0, r.jsx)(f.Bc, {
    isRichTooltip: true,
    children: (0, r.jsx)(d.R, {
      isVisible: k,
      isRendered: true,
      targetElementRef: U,
      targetElement: x,
      anchorRef: R,
      id: M,
      content: B,
      position: A,
      align: I,
      spacing: S,
      caretConfig: T,
      layerContext: null != C ? C : u.uY,
      animationStyle: e,
      positionKey: H,
      "data-mana-component": "rich-tooltip"
    })
  }) : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [G, P || null == B ? null : (0, r.jsx)(o.A, {
      id: M,
      children: B
    }), W]
  })
}