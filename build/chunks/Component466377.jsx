/** Chunk was on web.js **/
/** chunk id: 466377, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cg: () => N,
  Y0: () => w,
  YA: () => k,
  fM: () => P,
  hz: () => L,
  mz: () => j,
  ol: () => M,
  xB: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk401393 = require("./401393.js"),
  Chunk990547 = require("./990547.js"),
  Chunk748780 = require("./748780.js"),
  Chunk197723 = require("./197723.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk507274 = require("./507274.jsx"),
  Chunk742746 = require("./742746.js"),
  Chunk481060 = require("./481060.js"),
  Chunk793903 = require("./793903.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk602091 = require("./602091.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818033 = require("./818033.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = C(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var N = function(e) {
  return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e.DYNAMIC = "dynamic", e
}({});
let R = Object.freeze({
  small: Chunk818033.small,
  medium: Chunk818033.medium,
  large: Chunk818033.large,
  dynamic: null
});
var P = function(e) {
  return e.DEFAULT = "default", e.SUBTLE = "subtle", e
}({});

function w(e) {
  var t, {
      transitionState: n,
      children: a,
      size: u = "small",
      role: f = "dialog",
      className: p,
      fullscreenOnMobile: h = true,
      hideShadow: g = false,
      onAnimationEnd: y = b.dG,
      returnRef: v,
      animation: T = "default",
      parentComponent: C
    } = e,
    N = A(e, ["transitionState", "children", "size", "role", "className", "fullscreenOnMobile", "hideShadow", "onAnimationEnd", "returnRef", "animation", "parentComponent"]);
  let P = n === E.Dv.ENTERING || n === E.Dv.ENTERED;
  i.useContext(m.Z)({
    type: l.ImpressionTypes.PAGE,
    name: l.ImpressionNames.MODAL_ROOT_LEGACY,
    properties: {
      variant: C
    }
  });
  let {
    reducedMotion: w
  } = i.useContext(d.Sfi), D = (0, d.q_F)({
    opacity: +!!P,
    transform: P || w.enabled || "subtle" === T ? "scale(1)" : "scale(0.7)",
    config: {
      duration: 200,
      easing: c.Z.Easing.out(c.Z.Easing.quad),
      clamp: true
    },
    onRest: y
  }, "animate-always"), x = i.useRef(null), L = null != N["aria-label"], j = null != N["aria-labelledby"], M = i.useId(), k = null != (t = N["aria-labelledby"]) ? t : M, U = i.useMemo(() => ({
    headerId: k,
    headerIdIsManaged: j
  }), [k, j]);
  return (0, r.jsx)(E.zM.Provider, {
    value: U,
    children: (0, r.jsx)(_.V, S(I({
      className: O.focusLock,
      role: f,
      returnRef: v,
      impressionType: l.ImpressionTypes.MODAL,
      "aria-labelledby": L ? true : U.headerId
    }, N), {
      children: (0, r.jsx)(s.animated.div, {
        className: o()(p, O.root, R[u], {
          [O.fullscreenOnMobile]: h,
          [O.rootWithShadow]: !g
        }),
        ref: x,
        style: D,
        children: (0, r.jsx)(d.JcV, {
          containerRef: x,
          children: a
        })
      })
    }))
  })
}

function D(e) {
  var t, n, a, s, l;
  let {
    headerId: c,
    headerIdIsManaged: u
  } = i.useContext(E.zM);
  return (0, r.jsx)(g.Z, {
    grow: 0,
    shrink: 0,
    direction: null != (t = e.direction) ? t : g.Z.Direction.HORIZONTAL,
    justify: null != (n = e.justify) ? n : g.Z.Justify.START,
    align: null != (a = e.align) ? a : g.Z.Align.CENTER,
    wrap: null != (s = e.wrap) ? s : g.Z.Wrap.NO_WRAP,
    className: o()(O.header, e.className, {
      [O.separator]: null == (l = e.separator) || l
    }),
    id: u ? true : c,
    children: e.children
  })
}

function x(e) {
  switch (null != e ? e : "thin") {
    case "auto":
      return d.yWw;
    case "none":
      return d.xVE;
    default:
      return d.h21
  }
}

function L(e) {
  let {
    className: t,
    children: n,
    scrollerRef: i,
    scrollbarType: a
  } = e, s = A(e, ["className", "children", "scrollerRef", "scrollbarType"]), l = x(a);
  return (0, r.jsx)(l, S(I({
    className: o()(O.content, t),
    ref: i
  }, s), {
    children: (0, r.jsx)(h.y5t, {
      children: n
    })
  }))
}

function j(e) {
  var t, n, i, a, s;
  return (0, r.jsx)(g.Z, {
    grow: 0,
    shrink: 0,
    direction: null != (t = e.direction) ? t : g.Z.Direction.HORIZONTAL_REVERSE,
    justify: null != (n = e.justify) ? n : g.Z.Justify.START,
    align: null != (i = e.align) ? i : g.Z.Align.STRETCH,
    wrap: null != (a = e.wrap) ? a : g.Z.Wrap.NO_WRAP,
    className: o()(O.footer, e.className, {
      [O.footerSeparator]: null == (s = e.separator) || s
    }),
    children: (0, r.jsx)(h.y5t, {
      children: e.children
    })
  })
}

function M(e) {
  return (0, r.jsx)(f.zx, {
    focusProps: e.focusProps,
    "aria-label": y.intl.string(y.t.cpT0Cg),
    look: f.zx.Looks.BLANK,
    size: f.zx.Sizes.NONE,
    onClick: e.onClick,
    innerClassName: o()(e.innerClassName, {
      [O.closeWithCircleBackground]: e.withCircleBackground
    }),
    className: o()(e.className, {
      [O.hideOnFullscreen]: e.hideOnFullscreen,
      [O.close]: !e.withCircleBackground
    }),
    children: (0, r.jsx)(u.D, {
      size: "md",
      color: "currentColor",
      className: o()(e.innerClassName, O.closeIcon)
    })
  })
}

function k(e) {
  var {
    className: t,
    scrollerRef: n
  } = e, i = A(e, ["className", "scrollerRef"]);
  return (0, r.jsx)(p.Tv, I({
    className: t,
    ref: n
  }, i))
}