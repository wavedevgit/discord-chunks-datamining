/** Chunk was on web.js **/
/** chunk id: 28664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => O
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk747127 = require("./747127.js"),
  Chunk550656 = require("./550656.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk102725 = require("./102725.js"),
  Chunk342134 = require("./342134.js"),
  Chunk966327 = require("./966327.js");

function f(e, t, n) {
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
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let E = Chunk73800.createContext(null);

function b(e) {
  var {
    children: t,
    text: n,
    position: a = "top",
    align: o = "center",
    spacing: s,
    layerContext: l,
    onAnimationRest: u,
    targetElementRef: f,
    caretConfig: p,
    className: h,
    style: g,
    color: b,
    tooltipClassName: y,
    tooltipContentClassName: O,
    tooltipPointerClassName: I,
    allowOverflow: T,
    disableTooltipPointerEvents: S,
    clickableOnMobile: A,
    hideOnClick: N
  } = e, C = m(e, ["children", "text", "position", "align", "spacing", "layerContext", "onAnimationRest", "targetElementRef", "caretConfig", "className", "style", "color", "tooltipClassName", "tooltipContentClassName", "tooltipPointerClassName", "allowOverflow", "disableTooltipPointerEvents", "clickableOnMobile", "hideOnClick"]);
  let R = (0, d.c)(f),
    P = i.useId(),
    {
      isVisible: w,
      isRendered: D,
      triggerProps: L,
      handleExitComplete: x
    } = (0, c.l)(_({
      targetElementRef: R.targetElementRef
    }, C)),
    M = i.useMemo(() => ({
      triggerHandlers: L,
      triggerRef: R.triggerRef,
      targetElementRef: R.targetElementRef,
      tooltipId: P,
      isVisible: w,
      isRendered: D,
      text: n,
      position: a,
      align: o,
      spacing: s,
      caretConfig: p,
      layerContext: l,
      onAnimationRest: u,
      handleExitComplete: x
    }), [L, R.triggerRef, R.targetElementRef, P, w, D, n, a, o, s, p, l, u, x]);
  return (0, r.jsxs)(E.Provider, {
    value: M,
    children: [t, (0, r.jsx)(v, {})]
  })
}

function y(e) {
  var t;
  let {
    strategy: n = "clone",
    element: r = "div",
    children: a
  } = e, s = i.useContext(E);
  if (null == s) throw Error("TooltipTrigger must be used within TooltipRoot");
  let {
    triggerHandlers: c,
    triggerRef: u,
    tooltipId: d
  } = s, f = i.isValidElement(a) ? a : null, p = (0, o.Z)(null == f || null == (t = f.props) ? true : t.ref, u);
  if ("clone" === n) return null == f ? null : (0, l.C9)(f, c, d, p);
  let m = h(_({}, c), {
    onFocus: (0, l.tS)(c.onFocus, e => {
      let t = e.target;
      if (null != t) {
        var n;
        let e = (0, l.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : true, d);
        t.setAttribute("aria-describedby", e)
      }
    })
  });
  return (0, l.FX)({
    element: r,
    children: a,
    triggerHandlers: m,
    triggerRef: u
  })
}

function O(e) {
  var {
    children: t,
    asContainer: n = false
  } = e, a = m(e, ["children", "asContainer"]);
  return null == a.text || "" === a.text ? t : n ? (0, r.jsx)(b, h(_({}, a), {
    children: (0, r.jsx)(y, {
      strategy: "wrap",
      element: "div",
      children: t
    })
  })) : i.isValidElement(t) ? (0, r.jsx)(b, h(_({}, a), {
    children: (0, r.jsx)(y, {
      strategy: "clone",
      children: t
    })
  })) : null
}

function v() {
  var e;
  let t = Chunk73800.useContext(E);
  if (null == exports) throw Error("TooltipContent must be used within TooltipRoot");
  let {
    isVisible: n,
    isRendered: o,
    handleExitComplete: c,
    onAnimationRest: d,
    tooltipId: f,
    targetElementRef: _,
    text: p,
    position: h,
    align: m,
    spacing: g,
    caretConfig: b,
    layerContext: y
  } = exports;
  return (0, Chunk342134.Q)({
    shouldShow: require,
    caretPosition: null != (e = null == b ? true : b.position) ? module : (0, Chunk464281.Av)(h),
    onExitComplete: Chunk102725,
    onAnimationRest: Chunk966327
  })((e, t) => t ? (0, r.jsx)(s.N, {
    isVisible: n,
    isRendered: o,
    targetElementRef: _,
    id: f,
    content: p,
    position: h,
    align: m,
    spacing: g,
    caretConfig: b,
    layerContext: null != y ? y : a.nz,
    animationStyle: e,
    "data-mana-component": "tooltip"
  }) : null)
}