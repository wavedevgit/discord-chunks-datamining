/** Chunk was on web.js **/
/** chunk id: 762328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  TA: () => E,
  a_: () => y,
  pS: () => b
}), require("./539854.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk998976 = require("./998976.js"),
  Chunk980824 = require("./980824.jsx"),
  Chunk615673 = require("./615673.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk155127 = require("./155127.js"),
  Chunk966044 = require("./966044.jsx"),
  Chunk464239 = require("./464239.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = 8,
  E = "data-popover-layer";

function b(e) {
  var t;
  let n, {
      open: l,
      onOpenChange: _,
      id: h,
      className: b,
      overrideTargetRect: y,
      placement: O = "bottom",
      spacing: v = 8,
      autoFlip: I = true,
      autoShift: T = true,
      strategy: S = "fixed",
      portal: A = true,
      blockPointerEvents: C = false,
      children: N,
      renderLayer: R,
      viewportPadding: P = g,
      trigger: D = "click"
    } = e,
    w = i.useRef(null),
    L = i.useMemo(() => {
      let e = [(0, a.cv)(v)];
      return I && e.push((0, a.RR)({
        padding: P,
        boundary: window.document.body
      })), T && e.push((0, a.uY)({
        padding: P,
        limiter: (0, a.dr)(),
        boundary: window.document.body
      })), e.push((0, a.Cp)({
        strategy: "referenceHidden"
      })), e
    }, [v, I, T, P]);
  null != y && (n = {
    reference: {
      getBoundingClientRect: () => y
    }
  });
  let {
    refs: x,
    floatingStyles: M,
    placement: k,
    middlewareData: j,
    update: U,
    context: G
  } = (0, o.YF)({
    placement: O,
    open: l,
    onOpenChange: _,
    strategy: S,
    middleware: L,
    whileElementsMounted: s.Me,
    elements: n
  }), B = (0, o.bQ)(G), Z = (0, o.XI)(G, {
    enabled: "hover" === D,
    handleClose: (0, o.xp)({
      blockPointerEvents: true
    })
  }), {
    getReferenceProps: F,
    getFloatingProps: V
  } = (0, o.NI)([B, Z]), H = (null == (t = j.hide) ? true : t.referenceHidden) ? "hidden" : "visible", W = A ? d.UU : i.Fragment;
  return (0, r.jsxs)(r.Fragment, {
    children: [N({
      ref: x.setReference,
      props: F()
    }), l && (0, r.jsxs)(W, {
      children: [C ? (0, r.jsx)(o.y0, {}) : null, (0, r.jsx)("div", m(p({
        id: h,
        className: c()(b, f.layer),
        [E]: true,
        style: m(p({}, M), {
          visibility: H
        }),
        ref: x.setFloating
      }, V()), {
        children: (0, r.jsx)(u.Jc, {
          containerRef: w,
          children: R({
            placement: k,
            update: U,
            hidden: "hidden" === H
          })
        })
      }))]
    })]
  })
}

function y(e, t) {
  switch (e) {
    case "center":
    case "window_center":
    default:
      return "top";
    case "top":
    case "bottom":
      if ("left" === t) return "".concat(e, "-start");
      if ("right" === t) return "".concat(e, "-end");
      return e;
    case "left":
    case "right":
      if ("top" === t) return "".concat(e, "-start");
      if ("bottom" === t) return "".concat(e, "-end");
      return e
  }
}