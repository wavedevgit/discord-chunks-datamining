/** Chunk was on web.js **/
/** chunk id: 709562, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S,
  l: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk319354 = require("./319354.js"),
  Chunk435371 = require("./435371.js"),
  Chunk614820 = require("./614820.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk241524 = require("./241524.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk461782 = require("./461782.jsx"),
  Chunk447404 = require("./447404.jsx"),
  Chunk722776 = require("./722776.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk35204 = require("./35204.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = I(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function S(e) {
  let {
    label: t,
    onClick: n,
    onKeyDown: i,
    onMouseEnter: a,
    onMouseLeave: d,
    onContextMenu: f,
    className: p,
    wrapperClassName: _,
    iconClassName: m,
    iconColor: g = "currentColor",
    iconComponent: y,
    themeable: b = false,
    disabled: O = false,
    isActive: v = false,
    tooltipPosition: A = "top",
    shouldShowTooltip: I = true,
    forceTooltipOpen: S = false,
    buttonRef: T,
    grow: C,
    "aria-label": N,
    look: w,
    buttonText: R,
    size: P,
    color: D
  } = e, x = (0, c.O)(t);
  return (0, r.jsx)(h.A, {
    children: (0, r.jsx)(l.m_, {
      position: A,
      __unsupportedReactNodeAsText: t,
      ariaHidden: true,
      shouldShow: I,
      forceOpen: S,
      children: (0, r.jsxs)(u.$n, {
        "data-migration-pending": true,
        look: null != w ? w : u.$n.Looks.BLANK,
        size: null != P ? P : u.$n.Sizes.NONE,
        color: D,
        onKeyDown: e => {
          null == i || i(e)
        },
        onMouseDown: e => {
          e.preventDefault()
        },
        onClick: n,
        onMouseEnter: a,
        onMouseLeave: d,
        onContextMenu: null != f ? f : true,
        onFocus: e => {
          null == a || a(e)
        },
        onBlur: d,
        disabled: O,
        innerClassName: s()(E.NL, {
          [E.eq]: null != R
        }),
        className: s()({
          [E.vu]: v
        }, p),
        wrapperClassName: _,
        buttonRef: T,
        grow: C,
        "aria-label": null != N ? N : x,
        children: [(0, r.jsx)(y, {
          size: o.E.md,
          className: s()(m, {
            [E.pd]: null == R,
            [E.IW]: b,
            [E.vu]: v
          }),
          color: g
        }), R]
      })
    })
  })
}
let T = {
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
  C = {
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

function N(e) {
  var t;
  let {
    ref: n,
    color: a,
    caretColor: o,
    isActive: l = false,
    className: c,
    iconClassName: u,
    onPopoutClick: y,
    popoutOpen: O = false,
    popoutDisabled: I = false,
    isTrayButton: N,
    applyStyles: w = false
  } = e, R = A(e, ["ref", "color", "caretColor", "isActive", "className", "iconClassName", "onPopoutClick", "popoutOpen", "popoutDisabled", "isTrayButton", "applyStyles"]), P = (0, m.A)(a, l), D = null != o ? o : P, x = (0, f.A)("(max-width: 456px)"), L = i.useRef(null), j = i.useContext(_.vG);
  i.useEffect(() => {
    null != L.current && (j ? L.current.pause() : L.current.play())
  }, [j]);
  let M = null != (t = R.onContextMenu) ? t : y,
    k = null == y && !N,
    U = null != y && !N,
    G = N && null != y && !x,
    V = (0, r.jsx)(S, v(b({}, R), {
      grow: false,
      onContextMenu: M,
      iconClassName: s()(u, E.LF, k && E.Ns),
      className: s()(x || w ? c : null, l && E.vu, E.wh, C[P], k && E.Sy, G && E.hA)
    }));
  return x ? V : (0, r.jsxs)("div", {
    ref: n,
    className: s()(E.re, O && E.q6, c, U && [E.TD, T[P]]),
    children: [V, null != y ? (0, r.jsx)(h.A, {
      children: (0, r.jsx)(d.DUT, {
        "aria-label": g.intl.string(g.t.PdRCRg),
        onClick: I ? true : y,
        className: s()(E.cd, N && E.Ml, C[D], O && [E.q6, E.vu], I && E.r9),
        children: (0, r.jsx)(p.A, {
          className: s()(E.gG, O && E.ho, I && E.r9)
        })
      })
    }) : null]
  })
}