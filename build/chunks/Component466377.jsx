/** Chunk was on web.js **/
/** chunk id: 466377, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cg: () => P,
  Y0: () => x,
  YA: () => G,
  fM: () => D,
  hz: () => M,
  mz: () => k,
  ol: () => U,
  xB: () => L
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk938288 = require("./938288.js"),
  Chunk990547 = require("./990547.js"),
  Chunk748780 = require("./748780.js"),
  Chunk197723 = require("./197723.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk143450 = require("./143450.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk507274 = require("./507274.jsx"),
  Chunk742746 = require("./742746.js"),
  Chunk147479 = require("./147479.js"),
  Chunk481060 = require("./481060.js"),
  Chunk793903 = require("./793903.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk602091 = require("./602091.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818033 = require("./818033.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var P = function(e) {
  return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e.DYNAMIC = "dynamic", e
}({});
let w = Object.freeze({
  small: Chunk818033.small,
  medium: Chunk818033.medium,
  large: Chunk818033.large,
  dynamic: null
});
var D = function(e) {
  return e.DEFAULT = "default", e.SUBTLE = "subtle", e
}({});

function x(e) {
  var t, {
      transitionState: n,
      children: a,
      size: u = "small",
      role: _ = "dialog",
      className: h,
      fullscreenOnMobile: m = true,
      hideShadow: g = false,
      onAnimationEnd: b = O.dG,
      returnRef: v,
      animation: T = "default",
      parentComponent: A
    } = e,
    R = N(e, ["transitionState", "children", "size", "role", "className", "fullscreenOnMobile", "hideShadow", "onAnimationEnd", "returnRef", "animation", "parentComponent"]);
  let P = n === y.Dv.ENTERING || n === y.Dv.ENTERED;
  i.useContext(E.Z)({
    type: l.ImpressionTypes.PAGE,
    name: l.ImpressionNames.MODAL_ROOT_LEGACY,
    properties: {
      variant: A
    }
  });
  let {
    reducedMotion: D
  } = i.useContext(d.Sfi), x = (0, f.q)({
    opacity: +!!P,
    transform: P || D.enabled || "subtle" === T ? "scale(1)" : "scale(0.7)",
    config: {
      duration: 200,
      easing: c.Z.Easing.out(c.Z.Easing.quad),
      clamp: true
    },
    onRest: b
  }, "animate-always"), L = i.useRef(null), j = null != R["aria-label"], M = null != R["aria-labelledby"], k = i.useId(), U = null != (t = R["aria-labelledby"]) ? t : k, G = i.useMemo(() => ({
    headerId: U,
    headerIdIsManaged: M
  }), [U, M]);
  return (0, r.jsx)(y.zM.Provider, {
    value: G,
    children: (0, r.jsx)(p.V, C(S({
      className: I.focusLock,
      role: _,
      returnRef: v,
      impressionType: l.ImpressionTypes.MODAL,
      "aria-labelledby": j ? true : G.headerId
    }, R), {
      children: (0, r.jsx)(s.animated.div, {
        className: o()(h, I.root, w[u], {
          [I.fullscreenOnMobile]: m,
          [I.rootWithShadow]: !g
        }),
        ref: L,
        style: x,
        children: (0, r.jsx)(d.JcV, {
          containerRef: L,
          children: a
        })
      })
    }))
  })
}

function L(e) {
  var t, n, a, s, l;
  let {
    headerId: c,
    headerIdIsManaged: u
  } = i.useContext(y.zM);
  return (0, r.jsx)(b.Z, {
    grow: 0,
    shrink: 0,
    direction: null != (t = e.direction) ? t : b.Z.Direction.HORIZONTAL,
    justify: null != (n = e.justify) ? n : b.Z.Justify.START,
    align: null != (a = e.align) ? a : b.Z.Align.CENTER,
    wrap: null != (s = e.wrap) ? s : b.Z.Wrap.NO_WRAP,
    className: o()(I.header, e.className, {
      [I.separator]: null == (l = e.separator) || l
    }),
    id: u ? true : c,
    children: e.children
  })
}

function j(e) {
  switch (null != e ? e : "thin") {
    case "auto":
      return m.yW;
    case "none":
      return m.xV;
    default:
      return m.h2
  }
}

function M(e) {
  let {
    className: t,
    children: n,
    scrollerRef: i,
    scrollbarType: a
  } = e, s = N(e, ["className", "children", "scrollerRef", "scrollbarType"]), l = j(a);
  return (0, r.jsx)(l, C(S({
    className: o()(I.content, t),
    ref: i
  }, s), {
    children: (0, r.jsx)(g.y5t, {
      children: n
    })
  }))
}

function k(e) {
  var t, n, i, a, s;
  return (0, r.jsx)(b.Z, {
    grow: 0,
    shrink: 0,
    direction: null != (t = e.direction) ? t : b.Z.Direction.HORIZONTAL_REVERSE,
    justify: null != (n = e.justify) ? n : b.Z.Justify.START,
    align: null != (i = e.align) ? i : b.Z.Align.STRETCH,
    wrap: null != (a = e.wrap) ? a : b.Z.Wrap.NO_WRAP,
    className: o()(I.footer, e.className, {
      [I.footerSeparator]: null == (s = e.separator) || s
    }),
    children: (0, r.jsx)(g.y5t, {
      children: e.children
    })
  })
}

function U(e) {
  return (0, r.jsx)(_.zx, {
    focusProps: e.focusProps,
    "aria-label": v.intl.string(v.t.cpT0Cg),
    look: _.zx.Looks.BLANK,
    size: _.zx.Sizes.NONE,
    onClick: e.onClick,
    innerClassName: o()(e.innerClassName, {
      [I.closeWithCircleBackground]: e.withCircleBackground
    }),
    className: o()(e.className, {
      [I.hideOnFullscreen]: e.hideOnFullscreen,
      [I.close]: !e.withCircleBackground
    }),
    children: (0, r.jsx)(u.D, {
      size: "md",
      color: "currentColor",
      className: o()(e.innerClassName, I.closeIcon)
    })
  })
}

function G(e) {
  var {
    className: t,
    scrollerRef: n
  } = e, i = N(e, ["className", "scrollerRef"]);
  return (0, r.jsx)(h.Tv, S({
    className: t,
    ref: n
  }, i))
}