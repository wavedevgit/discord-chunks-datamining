/** Chunk was on web.js **/
/** chunk id: 862482, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $n: () => A,
  WS: () => O,
  XD: () => E,
  lO: () => b,
  pR: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk758879 = require("./758879.js"),
  Chunk158954 = require("./158954.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk134112 = require("./134112.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let g = {
    FILLED: Chunk134112.WL,
    OUTLINED: Chunk134112.uu,
    LINK: Chunk134112.M_,
    BLANK: Chunk134112.Ev
  },
  E = {
    BRAND: Chunk134112.x8,
    BRAND_INVERTED: Chunk134112.Qn,
    RED: Chunk134112.D,
    GREEN: Chunk134112.RH,
    PRIMARY: Chunk134112.cG,
    LINK: Chunk134112.I5,
    WHITE: Chunk134112.bD,
    TRANSPARENT: Chunk134112.Ey,
    CUSTOM: ""
  },
  b = {
    NONE: "",
    TINY: Chunk134112.Ei,
    SMALL: Chunk134112.g4,
    MEDIUM: Chunk134112.$g,
    LARGE: Chunk134112.Pu,
    MIN: Chunk134112.CM,
    MAX: Chunk134112.Gn,
    ICON: Chunk134112.Rk
  };

function y(e, t) {
  var n, r, i, a;
  let s = null == e ? true : e.offset;
  return t === g.LINK || t === g.BLANK ? s : null == s ? false : "number" == typeof s ? s + 2 : {
    top: (null != (n = s.top) ? n : 0) - 2,
    right: (null != (r = s.right) ? r : 0) - 2,
    bottom: (null != (i = s.bottom) ? i : 0) - 2,
    left: (null != (a = s.left) ? a : 0) - 2
  }
}

function O() {
  let {
    look: e = g.FILLED,
    color: t = E.BRAND,
    size: n = b.MEDIUM,
    fullWidth: r = false,
    grow: i = true,
    submitting: a = false,
    disabled: o = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  return s()(u.x6, e, t, n, {
    [u.Ij]: r,
    [u.wS]: i,
    [u.B2]: a && !o
  })
}

function A(e) {
  let {
    look: t = g.FILLED,
    color: n = E.BRAND,
    size: a = b.MEDIUM,
    fullWidth: o = false,
    grow: d = true,
    disabled: p = false,
    submitting: m = false,
    type: A = "button",
    style: v,
    wrapperClassName: S,
    className: I,
    innerClassName: T,
    onClick: C,
    onDoubleClick: N,
    onMouseDown: R,
    onMouseUp: w,
    onMouseEnter: P,
    onMouseLeave: D,
    onKeyDown: x,
    children: L,
    rel: j,
    buttonRef: M,
    focusProps: k,
    "aria-label": U,
    submittingStartedLabel: G,
    submittingFinishedLabel: V
  } = e, F = h(e, ["look", "color", "size", "fullWidth", "grow", "disabled", "submitting", "type", "style", "wrapperClassName", "className", "innerClassName", "onClick", "onDoubleClick", "onMouseDown", "onMouseUp", "onMouseEnter", "onMouseLeave", "onKeyDown", "children", "rel", "buttonRef", "focusProps", "aria-label", "submittingStartedLabel", "submittingFinishedLabel"]), B = p || m, H = B && (null != P || null != D), Y = H ? null : S, W = y(k, t), K = i.useRef(false);
  i.useEffect(() => {
    true === m && (K.current = true, l.ORC.announce(null != G ? G : c.intl.string(c.t.pfChQr))), false === m && true === K.current && l.ORC.announce(null != V ? V : c.intl.string(c.t.SVParY))
  }, [m, G, V]);
  let z = (0, r.jsx)(l.vN3, _(f({}, k), {
    offset: W,
    children: (0, r.jsxs)("button", _(f({}, B ? null : F), {
      "aria-label": U,
      "aria-busy": !!m || true,
      ref: M,
      onClick: B ? e => e.preventDefault() : C,
      onDoubleClick: B ? e => e.preventDefault() : N,
      onMouseUp: p ? true : w,
      onMouseDown: p ? true : R,
      onMouseEnter: P,
      onMouseLeave: D,
      onKeyDown: p ? true : x,
      type: A,
      disabled: p,
      style: v,
      rel: j,
      className: s()(I, O({
        look: t,
        color: n,
        size: a,
        fullWidth: o,
        grow: d,
        submitting: m,
        disabled: p
      }), Y),
      children: [m && !p ? (0, r.jsx)(l.y$y, {
        type: l.y$y.Type.PULSING_ELLIPSIS,
        className: u.u1,
        itemClassName: u.$N
      }) : null, (0, r.jsx)("div", {
        className: s()(u.PG, T),
        children: L
      })]
    }))
  }));
  return H ? (0, r.jsxs)("span", {
    className: s()(u.Yr, S, a, {
      [u.wS]: d,
      [u.Ij]: o
    }),
    children: [z, (0, r.jsx)("span", {
      onMouseEnter: P,
      onMouseLeave: D,
      className: u.p5
    })]
  }) : z
}
A.Looks = g, A.Colors = E, A.Sizes = b, A.Link = function(e) {
  let {
    look: t = g.FILLED,
    color: n = E.BRAND,
    size: i = b.MEDIUM,
    fullWidth: a = false,
    grow: l = true,
    style: c,
    className: d,
    innerClassName: p,
    to: m,
    onClick: y,
    onMouseDown: O,
    onMouseUp: A,
    children: v,
    rel: S
  } = e, I = h(e, ["look", "color", "size", "fullWidth", "grow", "style", "className", "innerClassName", "to", "onClick", "onMouseDown", "onMouseUp", "children", "rel"]);
  return (0, r.jsx)(o.N_, _(f({}, I), {
    to: m,
    onClick: y,
    onMouseUp: A,
    onMouseDown: O,
    style: c,
    rel: S,
    className: s()(d, u.x6, t, n, i, {
      [u.Ij]: a,
      [u.wS]: l
    }),
    children: (0, r.jsx)("span", {
      className: s()(u.PG, p),
      children: v
    })
  }))
}