/** Chunk was on web.js **/
/** chunk id: 693789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ph: () => O,
  Tt: () => y,
  iL: () => b,
  nY: () => I,
  zx: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk688642 = require("./688642.js"),
  Chunk680732 = require("./680732.js"),
  Chunk84735 = require("./84735.js"),
  Chunk922770 = require("./922770.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk982456 = require("./982456.js");

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

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = {
    FILLED: Chunk982456.lookFilled,
    OUTLINED: Chunk982456.lookOutlined,
    LINK: Chunk982456.lookLink,
    BLANK: Chunk982456.lookBlank
  },
  y = {
    BRAND: Chunk982456.colorBrand,
    BRAND_INVERTED: Chunk982456.colorBrandInverted,
    RED: Chunk982456.colorRed,
    GREEN: Chunk982456.colorGreen,
    PRIMARY: Chunk982456.colorPrimary,
    LINK: Chunk982456.colorLink,
    WHITE: Chunk982456.colorWhite,
    TRANSPARENT: Chunk982456.colorTransparent,
    CUSTOM: ""
  },
  O = {
    NONE: "",
    TINY: Chunk982456.sizeTiny,
    SMALL: Chunk982456.sizeSmall,
    MEDIUM: Chunk982456.sizeMedium,
    LARGE: Chunk982456.sizeLarge,
    MIN: Chunk982456.sizeMin,
    MAX: Chunk982456.sizeMax,
    ICON: Chunk982456.sizeIcon
  };

function v(e, t) {
  var n, r, i, o;
  let a = null == e ? true : e.offset;
  return t === b.LINK || t === b.BLANK ? a : null == a ? false : "number" == typeof a ? a + 2 : {
    top: (null != (n = a.top) ? n : 0) - 2,
    right: (null != (r = a.right) ? r : 0) - 2,
    bottom: (null != (i = a.bottom) ? i : 0) - 2,
    left: (null != (o = a.left) ? o : 0) - 2
  }
}

function I() {
  let {
    look: e = b.FILLED,
    color: t = y.BRAND,
    size: n = O.MEDIUM,
    fullWidth: r = false,
    grow: i = true,
    submitting: o = false,
    disabled: s = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  return a()(Chunk982456.button, module, exports, require, {
    [Chunk982456.fullWidth]: Chunk255367,
    [Chunk982456.grow]: Chunk73800,
    [Chunk982456.submitting]: Chunk120356 && !Chunk688642
  })
}

function T(e) {
  var {
    look: t = b.FILLED,
    color: n = y.BRAND,
    size: o = O.MEDIUM,
    fullWidth: s = false,
    grow: _ = true,
    disabled: h = false,
    submitting: E = false,
    type: T = "button",
    style: S,
    wrapperClassName: A,
    className: N,
    innerClassName: C,
    onClick: R,
    onDoubleClick: P,
    onMouseDown: w,
    onMouseUp: D,
    onMouseEnter: L,
    onMouseLeave: x,
    onKeyDown: M,
    children: k,
    rel: j,
    buttonRef: U,
    focusProps: G,
    "aria-label": B,
    submittingStartedLabel: Z,
    submittingFinishedLabel: F
  } = e, V = g(e, ["look", "color", "size", "fullWidth", "grow", "disabled", "submitting", "type", "style", "wrapperClassName", "className", "innerClassName", "onClick", "onDoubleClick", "onMouseDown", "onMouseUp", "onMouseEnter", "onMouseLeave", "onKeyDown", "children", "rel", "buttonRef", "focusProps", "aria-label", "submittingStartedLabel", "submittingFinishedLabel"]);
  let H = h || E,
    Y = H && (null != L || null != x),
    W = Y ? null : A,
    K = v(G, t),
    z = i.useRef(false);
  i.useEffect(() => {
    true === E && (z.current = true, l.u.announce(null != Z ? Z : d.intl.string(d.t.pfChQk))), false === E && true === z.current && l.u.announce(null != F ? F : d.intl.string(d.t.SVPara))
  }, [E, Z, F]);
  let q = (0, r.jsx)(c.t, m(p({}, G), {
    offset: K,
    children: (0, r.jsxs)("button", m(p({}, H ? null : V), {
      "aria-label": B,
      "aria-busy": !!E || true,
      ref: U,
      onClick: H ? e => e.preventDefault() : R,
      onDoubleClick: H ? e => e.preventDefault() : P,
      onMouseUp: h ? true : D,
      onMouseDown: h ? true : w,
      onMouseEnter: L,
      onMouseLeave: x,
      onKeyDown: h ? true : M,
      type: T,
      disabled: h,
      style: S,
      rel: j,
      className: a()(N, I({
        look: t,
        color: n,
        size: o,
        fullWidth: s,
        grow: _,
        submitting: E,
        disabled: h
      }), W),
      children: [E && !h ? (0, r.jsx)(u.$, {
        type: u.$.Type.PULSING_ELLIPSIS,
        className: f.spinner,
        itemClassName: f.spinnerItem
      }) : null, (0, r.jsx)("div", {
        className: a()(f.contents, C),
        children: k
      })]
    }))
  }));
  return Y ? (0, r.jsxs)("span", {
    className: a()(f.disabledButtonWrapper, A, o, {
      [f.grow]: _,
      [f.fullWidth]: s
    }),
    children: [q, (0, r.jsx)("span", {
      onMouseEnter: L,
      onMouseLeave: x,
      className: f.disabledButtonOverlay
    })]
  }) : q
}
T.Looks = b, T.Colors = y, T.Sizes = O, T.Link = function(e) {
  var {
    look: t = b.FILLED,
    color: n = y.BRAND,
    size: i = O.MEDIUM,
    fullWidth: o = false,
    grow: l = true,
    style: c,
    className: u,
    innerClassName: d,
    to: _,
    onClick: h,
    onMouseDown: E,
    onMouseUp: v,
    children: I,
    rel: T
  } = e, S = g(e, ["look", "color", "size", "fullWidth", "grow", "style", "className", "innerClassName", "to", "onClick", "onMouseDown", "onMouseUp", "children", "rel"]);
  return (0, r.jsx)(s.rU, m(p({}, S), {
    to: _,
    onClick: h,
    onMouseUp: v,
    onMouseDown: E,
    style: c,
    rel: T,
    className: a()(u, f.button, t, n, i, {
      [f.fullWidth]: o,
      [f.grow]: l
    }),
    children: (0, r.jsx)("span", {
      className: a()(f.contents, d),
      children: I
    })
  }))
}