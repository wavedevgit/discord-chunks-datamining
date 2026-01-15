/** Chunk was on web.js **/
/** chunk id: 762328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => v,
  TA: () => b,
  a_: () => O,
  pS: () => y
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
  Chunk282144 = require("./282144.js");

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
  E = 100,
  b = "data-popover-layer";

function y(e) {
  var t;
  let n, {
      ownerDocument: l = document,
      open: p,
      onOpenChange: h,
      id: y,
      className: O,
      reference: v,
      overrideTargetRect: S,
      placement: I = "bottom",
      spacing: T = 8,
      autoFlip: C = true,
      crossAccessFlip: A = true,
      autoShift: N = true,
      strategy: P = "fixed",
      portal: w = true,
      blockPointerEvents: R = false,
      children: D,
      renderLayer: x,
      viewportPadding: L = g,
      maxHeight: j,
      trigger: M = "click",
      hoverDelay: k = E
    } = e,
    U = i.useRef(null),
    G = i.useMemo(() => {
      let e = [(0, a.cv)(T)];
      return C && e.push((0, a.RR)({
        crossAxis: A,
        padding: L,
        boundary: l.body
      })), N && e.push((0, a.uY)({
        padding: L,
        limiter: (0, a.dr)(),
        boundary: l.body
      })), e.push((0, a.Cp)({
        strategy: "referenceHidden"
      })), null != j && e.push((0, a.dp)({
        padding: L,
        apply(e) {
          let {
            availableHeight: t,
            elements: n
          } = e, r = Math.min(j, t);
          n.floating.style.setProperty("--custom-floating-layer-max-height", "".concat(r, "px"))
        }
      })), e
    }, [T, C, N, L, A, l, j]);
  null != S ? n = {
    reference: {
      getBoundingClientRect: () => S
    }
  } : null != v && (n = {
    reference: v
  });
  let {
    refs: Z,
    floatingStyles: F,
    placement: B,
    middlewareData: V,
    update: H,
    context: Y
  } = (0, o.YF)({
    placement: I,
    open: p,
    onOpenChange: h,
    strategy: P,
    middleware: G,
    whileElementsMounted: s.Me,
    elements: n
  }), W = (0, o.bQ)(Y), K = (0, o.XI)(Y, {
    restMs: k,
    delay: {
      open: k,
      close: 0
    },
    enabled: "hover" === M,
    handleClose: (0, o.xp)({
      blockPointerEvents: true
    })
  }), {
    getReferenceProps: z,
    getFloatingProps: q
  } = (0, o.NI)([W, K]), Q = (null == (t = V.hide) ? true : t.referenceHidden) ? "hidden" : "visible", X = w ? d.UU : i.Fragment;
  return (0, r.jsxs)(r.Fragment, {
    children: [D({
      ref: Z.setReference,
      props: z()
    }), p && (0, r.jsxs)(X, {
      ownerDocument: l,
      children: [R ? (0, r.jsx)(o.y0, {}) : null, (0, r.jsx)("div", m(_({
        id: y,
        className: c()(O, f.layer),
        [b]: true,
        style: m(_({}, F), {
          visibility: Q
        }),
        ref: Z.setFloating
      }, q()), {
        children: (0, r.jsx)(u.Jc, {
          containerRef: U,
          children: x({
            placement: B,
            update: H,
            hidden: "hidden" === Q,
            shift: V.shift
          })
        })
      }))]
    })]
  })
}

function O(e, t) {
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

function v(e) {
  let t = e.split("-")[0];
  switch (t) {
    case "top":
    case "bottom":
    case "left":
    case "right":
      return t;
    default:
      return "top"
  }
}