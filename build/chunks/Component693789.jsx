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
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk799899 = require("./799899.js"),
  Chunk680732 = require("./680732.js"),
  Chunk84735 = require("./84735.js"),
  Chunk922770 = require("./922770.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk494102 = require("./494102.js");

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
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = {
    FILLED: Chunk494102.lookFilled,
    OUTLINED: Chunk494102.lookOutlined,
    LINK: Chunk494102.lookLink,
    BLANK: Chunk494102.lookBlank
  },
  y = {
    BRAND: Chunk494102.colorBrand,
    BRAND_INVERTED: Chunk494102.colorBrandInverted,
    RED: Chunk494102.colorRed,
    GREEN: Chunk494102.colorGreen,
    PRIMARY: Chunk494102.colorPrimary,
    LINK: Chunk494102.colorLink,
    WHITE: Chunk494102.colorWhite,
    TRANSPARENT: Chunk494102.colorTransparent,
    CUSTOM: ""
  },
  O = {
    NONE: "",
    TINY: Chunk494102.sizeTiny,
    SMALL: Chunk494102.sizeSmall,
    MEDIUM: Chunk494102.sizeMedium,
    LARGE: Chunk494102.sizeLarge,
    MIN: Chunk494102.sizeMin,
    MAX: Chunk494102.sizeMax,
    ICON: Chunk494102.sizeIcon
  };

function v(e, t) {
  var n, r, i, a;
  let o = null == e ? true : e.offset;
  return t === b.LINK || t === b.BLANK ? o : null == o ? false : "number" == typeof o ? o + 2 : {
    top: (null != (n = o.top) ? n : 0) - 2,
    right: (null != (r = o.right) ? r : 0) - 2,
    bottom: (null != (i = o.bottom) ? i : 0) - 2,
    left: (null != (a = o.left) ? a : 0) - 2
  }
}

function I() {
  let {
    look: e = b.FILLED,
    color: t = y.BRAND,
    size: n = O.MEDIUM,
    fullWidth: r = false,
    grow: i = true,
    submitting: a = false,
    disabled: s = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  return o()(Chunk494102.button, module, exports, require, {
    [Chunk494102.fullWidth]: Chunk951288,
    [Chunk494102.grow]: Chunk647438,
    [Chunk494102.submitting]: Chunk120356 && !Chunk799899
  })
}

function T(e) {
  var {
    look: t = b.FILLED,
    color: n = y.BRAND,
    size: a = O.MEDIUM,
    fullWidth: s = false,
    grow: _ = true,
    disabled: h = false,
    submitting: E = false,
    type: T = "button",
    style: S,
    wrapperClassName: A,
    className: C,
    innerClassName: N,
    onClick: R,
    onDoubleClick: P,
    onMouseDown: w,
    onMouseUp: D,
    onMouseEnter: x,
    onMouseLeave: L,
    onKeyDown: j,
    children: k,
    rel: M,
    buttonRef: U,
    focusProps: G,
    "aria-label": B,
    submittingStartedLabel: Z,
    submittingFinishedLabel: F
  } = e, V = g(e, ["look", "color", "size", "fullWidth", "grow", "disabled", "submitting", "type", "style", "wrapperClassName", "className", "innerClassName", "onClick", "onDoubleClick", "onMouseDown", "onMouseUp", "onMouseEnter", "onMouseLeave", "onKeyDown", "children", "rel", "buttonRef", "focusProps", "aria-label", "submittingStartedLabel", "submittingFinishedLabel"]);
  let H = h || E,
    Y = H && (null != x || null != L),
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
      onMouseEnter: x,
      onMouseLeave: L,
      onKeyDown: h ? true : j,
      type: T,
      disabled: h,
      style: S,
      rel: M,
      className: o()(C, I({
        look: t,
        color: n,
        size: a,
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
        className: o()(f.contents, N),
        children: k
      })]
    }))
  }));
  return Y ? (0, r.jsxs)("span", {
    className: o()(f.disabledButtonWrapper, A, a, {
      [f.grow]: _,
      [f.fullWidth]: s
    }),
    children: [q, (0, r.jsx)("span", {
      onMouseEnter: x,
      onMouseLeave: L,
      className: f.disabledButtonOverlay
    })]
  }) : q
}
T.Looks = b, T.Colors = y, T.Sizes = O, T.Link = function(e) {
  var {
    look: t = b.FILLED,
    color: n = y.BRAND,
    size: i = O.MEDIUM,
    fullWidth: a = false,
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
    className: o()(u, f.button, t, n, i, {
      [f.fullWidth]: a,
      [f.grow]: l
    }),
    children: (0, r.jsx)("span", {
      className: o()(f.contents, d),
      children: I
    })
  }))
}