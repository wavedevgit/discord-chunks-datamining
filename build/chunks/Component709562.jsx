/** Chunk was on web.js **/
/** chunk id: 709562, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I,
  l: () => C
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk319354 = require("./319354.js"),
  Chunk435371 = require("./435371.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk241524 = require("./241524.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk461782 = require("./461782.jsx"),
  Chunk447404 = require("./447404.jsx"),
  Chunk722776 = require("./722776.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk35204 = require("./35204.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = A(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function I(e) {
  let {
    label: t,
    onClick: n,
    onKeyDown: i,
    onMouseEnter: a,
    onMouseLeave: u,
    onContextMenu: d,
    className: f,
    wrapperClassName: p,
    iconClassName: h,
    iconColor: m = "currentColor",
    iconComponent: E,
    themeable: y = false,
    disabled: b = false,
    isActive: O = false,
    tooltipPosition: v = "top",
    shouldShowTooltip: A = true,
    forceTooltipOpen: I = false,
    buttonRef: S,
    grow: T,
    "aria-label": C,
    look: N,
    buttonText: w,
    size: R,
    color: P
  } = e;
  return (0, r.jsx)(_.A, {
    children: (0, r.jsx)(l.m_, {
      position: v,
      __unsupportedReactNodeAsText: t,
      ariaHidden: true,
      shouldShow: A,
      forceOpen: I,
      children: (0, r.jsxs)(c.$n, {
        "data-migration-pending": true,
        look: null != N ? N : c.$n.Looks.BLANK,
        size: null != R ? R : c.$n.Sizes.NONE,
        color: P,
        onKeyDown: e => {
          null == i || i(e)
        },
        onMouseDown: e => {
          e.preventDefault()
        },
        onClick: n,
        onMouseEnter: a,
        onMouseLeave: u,
        onContextMenu: null != d ? d : true,
        onFocus: e => {
          null == a || a(e)
        },
        onBlur: u,
        disabled: b,
        innerClassName: s()(g.NL, {
          [g.eq]: null != w
        }),
        className: s()({
          [g.vu]: O
        }, f),
        wrapperClassName: p,
        buttonRef: S,
        grow: T,
        "aria-label": C,
        children: [(0, r.jsx)(E, {
          size: o.E.md,
          className: s()(h, {
            [g.pd]: null == w,
            [g.IW]: y,
            [g.vu]: O
          }),
          color: m
        }), w]
      })
    })
  })
}
let S = {
    disconnect: Chunk35204.Zf,
    join: Chunk35204.fj,
    red: Chunk35204.wv,
    white: Chunk35204.ON,
    green: Chunk35204.wL,
    yellow: Chunk35204.D9,
    primaryDark: Chunk35204.Zq,
    primaryLight: Chunk35204.Zq,
    activeLight: Chunk35204.H3,
    premiumGradient: Chunk35204.ck
  },
  T = {
    disconnect: Chunk35204.Zf,
    join: Chunk35204.fj,
    red: Chunk35204.Xr,
    white: Chunk35204.ON,
    green: Chunk35204.Vu,
    yellow: Chunk35204.D9,
    primaryDark: Chunk35204.Zq,
    primaryLight: Chunk35204.Zq,
    activeLight: Chunk35204.H3,
    premiumGradient: Chunk35204.ck
  };

function C(e) {
  var t;
  let {
    ref: n,
    color: a,
    caretColor: o,
    isActive: l = false,
    className: c,
    iconClassName: E,
    onPopoutClick: b,
    popoutOpen: A = false,
    popoutDisabled: C = false,
    isTrayButton: N,
    applyStyles: w = false
  } = e, R = v(e, ["ref", "color", "caretColor", "isActive", "className", "iconClassName", "onPopoutClick", "popoutOpen", "popoutDisabled", "isTrayButton", "applyStyles"]), P = (0, h.A)(a, l), D = null != o ? o : P, x = (0, d.A)("(max-width: 456px)"), L = i.useRef(null), j = i.useContext(p.vG);
  i.useEffect(() => {
    null != L.current && (j ? L.current.pause() : L.current.play())
  }, [j]);
  let M = null != (t = R.onContextMenu) ? t : b,
    k = null == b && !N,
    U = null != b && !N,
    G = N && null != b && !x,
    V = (0, r.jsx)(I, O(y({}, R), {
      grow: false,
      onContextMenu: M,
      iconClassName: s()(E, g.LF, k && g.Ns),
      className: s()(x || w ? c : null, l && g.vu, g.wh, T[P], k && g.Sy, G && g.hA)
    }));
  return x ? V : (0, r.jsxs)("div", {
    ref: n,
    className: s()(g.re, A && g.q6, c, U && [g.TD, S[P]]),
    children: [V, null != b ? (0, r.jsx)(_.A, {
      children: (0, r.jsx)(u.DUT, {
        "aria-label": m.intl.string(m.t.PdRCRg),
        onClick: C ? true : b,
        className: s()(g.cd, N && g.Ml, T[D], A && [g.q6, g.vu], C && g.r9),
        children: (0, r.jsx)(f.A, {
          className: s()(g.gG, A && g.ho, C && g.r9)
        })
      })
    }) : null]
  })
}