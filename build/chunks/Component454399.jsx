/** Chunk was on web.js **/
/** chunk id: 454399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i_: () => I
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk550656 = require("./550656.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk102725 = require("./102725.js"),
  Chunk342134 = require("./342134.js"),
  Chunk966327 = require("./966327.js"),
  Chunk890955 = require("./890955.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let y = Chunk73800.createContext(null);

function O(e) {
  var {
    children: t,
    title: n,
    body: a,
    asset: s,
    targetElementRef: l,
    onAnimationRest: c,
    position: d = "top",
    align: p = "center",
    spacing: m,
    caretConfig: b,
    layerContext: O
  } = e, v = E(e, ["children", "title", "body", "asset", "targetElementRef", "onAnimationRest", "position", "align", "spacing", "caretConfig", "layerContext"]);
  let I = (0, f.c)(l),
    S = i.useId(),
    A = i.useMemo(() => (0, r.jsxs)("div", {
      className: _.richTooltipContent,
      children: [null != s && (0, r.jsx)("div", {
        className: _.assetContainer,
        children: s
      }), (0, r.jsxs)("div", {
        className: _.textContent,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/bold",
          children: n
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: a
        })]
      })]
    }), [s, n, a]),
    {
      isVisible: N,
      isRendered: C,
      triggerProps: R,
      handleExitComplete: P
    } = (0, u.l)(h({
      targetElementRef: I.targetElementRef
    }, v)),
    w = i.useMemo(() => ({
      triggerProps: g(h({}, R), {
        "aria-describedby": S,
        ref: I.triggerRef
      }),
      triggerRef: I.triggerRef,
      targetElementRef: I.targetElementRef,
      tooltipId: S,
      isVisible: N,
      isRendered: C,
      content: A,
      position: d,
      align: p,
      spacing: m,
      caretConfig: b,
      layerContext: O,
      onAnimationRest: c,
      handleExitComplete: P
    }), [R, I.triggerRef, I.targetElementRef, S, N, C, A, d, p, m, b, O, c, P]);
  return (0, r.jsxs)(y.Provider, {
    value: w,
    children: [t, (0, r.jsx)(T, {})]
  })
}

function v(e) {
  let {
    strategy: t = "clone",
    children: n
  } = e, r = i.useContext(y);
  if (null == r) throw Error("RichTooltipTrigger must be used within RichTooltipRoot");
  if ("clone" === t) {
    if (!i.isValidElement(n)) return null;
    let e = n;
    return (0, c.C9)(e, r.triggerProps, r.tooltipId, r.triggerRef)
  }
  let o = g(h({}, r.triggerProps), {
    onFocus: (0, c.tS)(r.triggerProps.onFocus, e => {
      let t = e.target;
      if (null != t) {
        var n;
        let e = (0, c.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : true, r.tooltipId);
        t.setAttribute("aria-describedby", e)
      }
    })
  });
  return (0, c.FX)({
    element: "div",
    children: n,
    triggerHandlers: o,
    triggerRef: r.triggerRef
  })
}

function I(e) {
  var {
    children: t,
    asContainer: n = false
  } = e, o = E(e, ["children", "asContainer"]);
  return n ? (0, r.jsx)(O, g(h({}, o), {
    children: (0, r.jsx)(v, {
      strategy: "wrap",
      children: t
    })
  })) : i.isValidElement(t) ? (0, r.jsx)(O, g(h({}, o), {
    children: (0, r.jsx)(v, {
      strategy: "clone",
      children: t
    })
  })) : null
}

function T() {
  var e;
  let t = Chunk73800.useContext(y);
  if (null == exports) throw Error("RichTooltipContent must be used within RichTooltipRoot");
  let {
    isVisible: n,
    isRendered: o,
    handleExitComplete: u,
    onAnimationRest: f,
    tooltipId: _,
    targetElementRef: p,
    content: h,
    position: m,
    align: g,
    spacing: E,
    caretConfig: b,
    layerContext: O
  } = exports;
  return (0, Chunk342134.Q)({
    shouldShow: require,
    caretPosition: null != (e = null == b ? true : b.position) ? module : (0, Chunk464281.Av)(m),
    onExitComplete: Chunk102725,
    onAnimationRest: Chunk966327
  })((e, t) => t ? (0, r.jsx)(l.pn, {
    isRichTooltip: true,
    children: (0, r.jsx)(s.N, {
      isVisible: n,
      isRendered: o,
      targetElementRef: p,
      id: _,
      content: h,
      position: m,
      align: g,
      spacing: E,
      caretConfig: b,
      layerContext: null != O ? O : a.nz,
      animationStyle: e,
      "data-mana-component": "rich-tooltip"
    })
  }) : null)
}