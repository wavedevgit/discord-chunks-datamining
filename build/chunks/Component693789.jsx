/** Chunk was on web.js **/
/** chunk id: 693789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ph: () => b,
  Tt: () => E,
  iL: () => g,
  nY: () => O,
  zx: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk319498 = require("./319498.js"),
  Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk973013 = require("./973013.js");

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

function m(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = {
    FILLED: Chunk973013.lookFilled,
    OUTLINED: Chunk973013.lookOutlined,
    LINK: Chunk973013.lookLink,
    BLANK: Chunk973013.lookBlank
  },
  E = {
    BRAND: Chunk973013.colorBrand,
    BRAND_INVERTED: Chunk973013.colorBrandInverted,
    RED: Chunk973013.colorRed,
    GREEN: Chunk973013.colorGreen,
    PRIMARY: Chunk973013.colorPrimary,
    LINK: Chunk973013.colorLink,
    WHITE: Chunk973013.colorWhite,
    TRANSPARENT: Chunk973013.colorTransparent,
    CUSTOM: ""
  },
  b = {
    NONE: "",
    TINY: Chunk973013.sizeTiny,
    SMALL: Chunk973013.sizeSmall,
    MEDIUM: Chunk973013.sizeMedium,
    LARGE: Chunk973013.sizeLarge,
    MIN: Chunk973013.sizeMin,
    MAX: Chunk973013.sizeMax,
    ICON: Chunk973013.sizeIcon
  };

function y(e, t) {
  var n, r, i, a;
  let o = null == e ? true : e.offset;
  return t === g.LINK || t === g.BLANK ? o : null == o ? false : "number" == typeof o ? o + 2 : {
    top: (null != (n = o.top) ? n : 0) - 2,
    right: (null != (r = o.right) ? r : 0) - 2,
    bottom: (null != (i = o.bottom) ? i : 0) - 2,
    left: (null != (a = o.left) ? a : 0) - 2
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
    disabled: s = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  return o()(Chunk973013.button, module, exports, require, {
    [Chunk973013.fullWidth]: Chunk54381,
    [Chunk973013.grow]: Chunk473749,
    [Chunk973013.submitting]: Chunk120356 && !Chunk319498
  })
}

function v(e) {
  var {
    look: t = g.FILLED,
    color: n = E.BRAND,
    size: a = b.MEDIUM,
    fullWidth: s = false,
    grow: d = true,
    disabled: p = false,
    submitting: h = false,
    type: v = "button",
    style: S,
    wrapperClassName: I,
    className: T,
    innerClassName: C,
    onClick: A,
    onDoubleClick: N,
    onMouseDown: P,
    onMouseUp: R,
    onMouseEnter: D,
    onMouseLeave: w,
    onKeyDown: x,
    children: L,
    rel: j,
    buttonRef: M,
    focusProps: k,
    "aria-label": U,
    submittingStartedLabel: G,
    submittingFinishedLabel: Z
  } = e, B = m(e, ["look", "color", "size", "fullWidth", "grow", "disabled", "submitting", "type", "style", "wrapperClassName", "className", "innerClassName", "onClick", "onDoubleClick", "onMouseDown", "onMouseUp", "onMouseEnter", "onMouseLeave", "onKeyDown", "children", "rel", "buttonRef", "focusProps", "aria-label", "submittingStartedLabel", "submittingFinishedLabel"]);
  let F = p || h,
    V = F && (null != D || null != w),
    H = V ? null : I,
    Y = y(k, t),
    W = i.useRef(false);
  i.useEffect(() => {
    true === h && (W.current = true, l.uvj.announce(null != G ? G : c.intl.string(c.t.pfChQr))), false === h && true === W.current && l.uvj.announce(null != Z ? Z : c.intl.string(c.t.SVParY))
  }, [h, G, Z]);
  let K = (0, r.jsx)(l.tEY, _(f({}, k), {
    offset: Y,
    children: (0, r.jsxs)("button", _(f({}, F ? null : B), {
      "aria-label": U,
      "aria-busy": !!h || true,
      ref: M,
      onClick: F ? e => e.preventDefault() : A,
      onDoubleClick: F ? e => e.preventDefault() : N,
      onMouseUp: p ? true : R,
      onMouseDown: p ? true : P,
      onMouseEnter: D,
      onMouseLeave: w,
      onKeyDown: p ? true : x,
      type: v,
      disabled: p,
      style: S,
      rel: j,
      className: o()(T, O({
        look: t,
        color: n,
        size: a,
        fullWidth: s,
        grow: d,
        submitting: h,
        disabled: p
      }), H),
      children: [h && !p ? (0, r.jsx)(l.$jN, {
        type: l.$jN.Type.PULSING_ELLIPSIS,
        className: u.spinner,
        itemClassName: u.spinnerItem
      }) : null, (0, r.jsx)("div", {
        className: o()(u.contents, C),
        children: L
      })]
    }))
  }));
  return V ? (0, r.jsxs)("span", {
    className: o()(u.disabledButtonWrapper, I, a, {
      [u.grow]: d,
      [u.fullWidth]: s
    }),
    children: [K, (0, r.jsx)("span", {
      onMouseEnter: D,
      onMouseLeave: w,
      className: u.disabledButtonOverlay
    })]
  }) : K
}
v.Looks = g, v.Colors = E, v.Sizes = b, v.Link = function(e) {
  var {
    look: t = g.FILLED,
    color: n = E.BRAND,
    size: i = b.MEDIUM,
    fullWidth: a = false,
    grow: l = true,
    style: c,
    className: d,
    innerClassName: p,
    to: h,
    onClick: y,
    onMouseDown: O,
    onMouseUp: v,
    children: S,
    rel: I
  } = e, T = m(e, ["look", "color", "size", "fullWidth", "grow", "style", "className", "innerClassName", "to", "onClick", "onMouseDown", "onMouseUp", "children", "rel"]);
  return (0, r.jsx)(s.rU, _(f({}, T), {
    to: h,
    onClick: y,
    onMouseUp: v,
    onMouseDown: O,
    style: c,
    rel: I,
    className: o()(d, u.button, t, n, i, {
      [u.fullWidth]: a,
      [u.grow]: l
    }),
    children: (0, r.jsx)("span", {
      className: o()(u.contents, p),
      children: S
    })
  }))
}