/** Chunk was on web.js **/
/** chunk id: 454399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i_: () => I
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk550656 = require("./550656.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk102725 = require("./102725.js"),
  Chunk342134 = require("./342134.js"),
  Chunk966327 = require("./966327.js"),
  Chunk638787 = require("./638787.js");

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
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let y = Chunk647438.createContext(null);

function O(e) {
  var {
    children: t,
    title: n,
    body: o,
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
        children: [(0, r.jsx)(a.Text, {
          variant: "text-sm/bold",
          children: n
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          children: o
        })]
      })]
    }), [s, n, o]),
    {
      isVisible: C,
      isRendered: N,
      triggerProps: R,
      handleExitComplete: P,
      onTooltipMouseEnter: w,
      onTooltipMouseLeave: D
    } = (0, u.l)(h({
      targetElementRef: I.targetElementRef
    }, v)),
    x = i.useMemo(() => ({
      triggerProps: g(h({}, R), {
        "aria-describedby": S,
        ref: I.triggerRef
      }),
      triggerRef: I.triggerRef,
      targetElementRef: I.targetElementRef,
      tooltipId: S,
      isVisible: C,
      isRendered: N,
      content: A,
      position: d,
      align: p,
      spacing: m,
      caretConfig: b,
      layerContext: O,
      onAnimationRest: c,
      handleExitComplete: P,
      positionKey: "string" == typeof n && "string" == typeof o ? "".concat(n, "|").concat(o) : true,
      onTooltipMouseEnter: w,
      onTooltipMouseLeave: D
    }), [R, I.triggerRef, I.targetElementRef, S, C, N, A, d, p, m, b, O, c, P, n, o, w, D]);
  return (0, r.jsxs)(y.Provider, {
    value: x,
    children: [t, (0, r.jsx)(T, {})]
  })
}

function v(e) {
  let {
    strategy: t = "clone",
    tag: n = "div",
    children: r
  } = e, a = i.useContext(y);
  if (null == a) throw Error("RichTooltipTrigger must be used within RichTooltipRoot");
  if ("clone" === t) {
    if (!i.isValidElement(r)) return null;
    let e = r;
    return (0, c.C9)(e, a.triggerProps, a.tooltipId, a.triggerRef)
  }
  let o = g(h({}, a.triggerProps), {
    onFocus: (0, c.tS)(a.triggerProps.onFocus, e => {
      let t = e.target;
      if (null != t) {
        var n;
        let e = (0, c.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : true, a.tooltipId);
        t.setAttribute("aria-describedby", e)
      }
    })
  });
  return (0, c.FX)({
    tag: n,
    children: r,
    triggerHandlers: o,
    triggerRef: a.triggerRef
  })
}

function I(e) {
  var {
    children: t,
    asContainer: n = false,
    element: a = "div"
  } = e, o = E(e, ["children", "asContainer", "element"]);
  return n ? (0, r.jsx)(O, g(h({}, o), {
    children: (0, r.jsx)(v, {
      strategy: "wrap",
      tag: a,
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
  let t = Chunk647438.useContext(y);
  if (null == exports) throw Error("RichTooltipContent must be used within RichTooltipRoot");
  let {
    isVisible: n,
    isRendered: a,
    handleExitComplete: u,
    onAnimationRest: f,
    tooltipId: _,
    targetElementRef: p,
    content: h,
    position: m,
    align: g,
    spacing: E,
    caretConfig: b,
    layerContext: O,
    positionKey: v
  } = exports;
  return (0, Chunk342134.Q)({
    shouldShow: require,
    caretPosition: null != (e = null == b ? true : b.position) ? module : (0, Chunk464281.Av)(m),
    onExitComplete: Chunk102725,
    onAnimationRest: Chunk966327
  })((e, i) => i ? (0, r.jsx)(l.pn, {
    isRichTooltip: true,
    children: (0, r.jsx)(s.N, {
      isVisible: n,
      isRendered: a,
      targetElementRef: p,
      id: _,
      content: h,
      position: m,
      align: g,
      spacing: E,
      caretConfig: b,
      layerContext: null != O ? O : o.nz,
      animationStyle: e,
      positionKey: v,
      "data-mana-component": "rich-tooltip",
      onMouseEnter: t.onTooltipMouseEnter,
      onMouseLeave: t.onTooltipMouseLeave
    })
  }) : null)
}