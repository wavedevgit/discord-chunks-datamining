/** Chunk was on web.js **/
/** chunk id: 935462, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $m: () => L,
  Dc: () => j,
  EO: () => R,
  WM: () => w,
  jl: () => x,
  rI: () => C,
  rQ: () => P,
  s_: () => M
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
  Chunk110259 = require("./110259.js"),
  Chunk615300 = require("./615300.js"),
  Chunk789645 = require("./789645.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk862482 = require("./862482.jsx"),
  Chunk305866 = require("./305866.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk989395 = require("./989395.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk231723 = require("./231723.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk997168 = require("./997168.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
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

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = T(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
var C = function(e) {
  return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e.DYNAMIC = "dynamic", e
}({});
let N = Object.freeze({
  small: Chunk997168.EX,
  medium: Chunk997168.Y,
  large: Chunk997168.as,
  dynamic: null
});
var w = function(e) {
  return e.DEFAULT = "default", e.SUBTLE = "subtle", e
}({});

function R(e) {
  var t;
  let {
    transitionState: n,
    children: a,
    size: u = "small",
    role: f = "dialog",
    className: _,
    fullscreenOnMobile: m = true,
    hideShadow: y = false,
    onAnimationEnd: O = E.tE,
    returnRef: A,
    animation: T = "default",
    parentComponent: C
  } = e, w = S(e, ["transitionState", "children", "size", "role", "className", "fullscreenOnMobile", "hideShadow", "onAnimationEnd", "returnRef", "animation", "parentComponent"]), R = n === g.ip.ENTERING || n === g.ip.ENTERED;
  i.useContext(h.A)({
    type: l.ImpressionTypes.PAGE,
    name: l.ImpressionNames.MODAL_ROOT_LEGACY,
    properties: {
      variant: C
    }
  });
  let {
    reducedMotion: P
  } = i.useContext(d.CZY), D = (0, d.zhh)({
    opacity: +!!R,
    transform: R || P.enabled || "subtle" === T ? "scale(1)" : "scale(0.7)",
    config: {
      duration: 200,
      easing: c.A.Easing.out(c.A.Easing.quad),
      clamp: true
    },
    onRest: O
  }, "animate-always"), L = i.useRef(null), x = null != w["aria-label"], M = null != w["aria-labelledby"], j = i.useId(), k = null != (t = w["aria-labelledby"]) ? t : j, U = i.useMemo(() => ({
    headerId: k,
    headerIdIsManaged: M
  }), [k, M]);
  return (0, r.jsx)(g.CP.Provider, {
    value: U,
    children: (0, r.jsx)(p.l, I(v({
      className: b.Gg,
      role: f,
      returnRef: A,
      impressionType: l.ImpressionTypes.MODAL,
      "aria-labelledby": x ? true : U.headerId
    }, w), {
      children: (0, r.jsx)(s.animated.div, {
        className: o()(_, b.zr, N[u], {
          [b.z]: m,
          [b.vl]: !y
        }),
        ref: L,
        style: D,
        children: (0, r.jsx)(d.xpW, {
          containerRef: L,
          children: a
        })
      })
    }))
  })
}

function P(e) {
  var t, n, a, s, l;
  let {
    headerId: c,
    headerIdIsManaged: u
  } = i.useContext(g.CP);
  return (0, r.jsx)(m.A, {
    grow: 0,
    shrink: 0,
    direction: null != (t = e.direction) ? t : m.A.Direction.HORIZONTAL,
    justify: null != (n = e.justify) ? n : m.A.Justify.START,
    align: null != (a = e.align) ? a : m.A.Align.CENTER,
    wrap: null != (s = e.wrap) ? s : m.A.Wrap.NO_WRAP,
    className: o()(b.wx, e.className, {
      [b.me]: null == (l = e.separator) || l
    }),
    id: u ? true : c,
    children: e.children
  })
}

function D(e) {
  switch (null != e ? e : "thin") {
    case "auto":
      return d.GtU;
    case "none":
      return d.zCo;
    default:
      return d.ChK
  }
}

function L(e) {
  let {
    className: t,
    children: n,
    scrollerRef: i,
    scrollbarType: a
  } = e, s = S(e, ["className", "children", "scrollerRef", "scrollbarType"]), l = D(a);
  return (0, r.jsx)(l, I(v({
    "data-migration-pending": true,
    className: o()(b.Qs, t),
    ref: i
  }, s), {
    children: (0, r.jsx)(_.Fmo, {
      children: n
    })
  }))
}

function x(e) {
  var t, n, i, a, s;
  return (0, r.jsx)(m.A, {
    grow: 0,
    shrink: 0,
    direction: null != (t = e.direction) ? t : m.A.Direction.HORIZONTAL_REVERSE,
    justify: null != (n = e.justify) ? n : m.A.Justify.START,
    align: null != (i = e.align) ? i : m.A.Align.STRETCH,
    wrap: null != (a = e.wrap) ? a : m.A.Wrap.NO_WRAP,
    className: o()(b.qr, e.className, {
      [b.h0]: null == (s = e.separator) || s
    }),
    children: (0, r.jsx)(_.Fmo, {
      children: e.children
    })
  })
}

function M(e) {
  return (0, r.jsx)(f.$n, {
    "data-migration-pending": true,
    focusProps: e.focusProps,
    "aria-label": y.intl.string(y.t.cpT0Cq),
    look: f.$n.Looks.BLANK,
    size: f.$n.Sizes.NONE,
    onClick: e.onClick,
    innerClassName: o()(e.innerClassName, {
      [b.Xk]: e.withCircleBackground
    }),
    className: o()(e.className, {
      [b.zB]: e.hideOnFullscreen,
      [b.VN]: !e.withCircleBackground
    }),
    children: (0, r.jsx)(u.P, {
      size: "md",
      color: "currentColor",
      className: o()(e.innerClassName, b.ut)
    })
  })
}

function j(e) {
  let {
    className: t,
    scrollerRef: n
  } = e, i = S(e, ["className", "scrollerRef"]);
  return (0, r.jsx)(d.OZj, v({
    className: t,
    ref: n
  }, i))
}