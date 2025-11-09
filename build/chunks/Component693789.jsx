/** Chunk was on web.js **/
/** chunk id: 693789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Button: () => v,
  Ph: () => b,
  Tt: () => E,
  iL: () => g,
  nY: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk799899 = require("./799899.js"),
  Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk494102 = require("./494102.js");

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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = {
    FILLED: Chunk494102.lookFilled,
    OUTLINED: Chunk494102.lookOutlined,
    LINK: Chunk494102.lookLink,
    BLANK: Chunk494102.lookBlank
  },
  E = {
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
  b = {
    NONE: "",
    TINY: Chunk494102.sizeTiny,
    SMALL: Chunk494102.sizeSmall,
    MEDIUM: Chunk494102.sizeMedium,
    LARGE: Chunk494102.sizeLarge,
    MIN: Chunk494102.sizeMin,
    MAX: Chunk494102.sizeMax,
    ICON: Chunk494102.sizeIcon
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
  return o()(Chunk494102.button, module, exports, require, {
    [Chunk494102.fullWidth]: Chunk951288,
    [Chunk494102.grow]: Chunk647438,
    [Chunk494102.submitting]: Chunk120356 && !Chunk799899
  })
}

function v(e) {
  var {
    look: t = g.FILLED,
    color: n = E.BRAND,
    size: a = b.MEDIUM,
    fullWidth: s = false,
    grow: d = true,
    disabled: _ = false,
    submitting: m = false,
    type: v = "button",
    style: I,
    wrapperClassName: S,
    className: T,
    innerClassName: A,
    onClick: C,
    onDoubleClick: N,
    onMouseDown: R,
    onMouseUp: P,
    onMouseEnter: w,
    onMouseLeave: D,
    onKeyDown: x,
    children: L,
    rel: M,
    buttonRef: j,
    focusProps: k,
    "aria-label": U,
    submittingStartedLabel: G,
    submittingFinishedLabel: B
  } = e, Z = h(e, ["look", "color", "size", "fullWidth", "grow", "disabled", "submitting", "type", "style", "wrapperClassName", "className", "innerClassName", "onClick", "onDoubleClick", "onMouseDown", "onMouseUp", "onMouseEnter", "onMouseLeave", "onKeyDown", "children", "rel", "buttonRef", "focusProps", "aria-label", "submittingStartedLabel", "submittingFinishedLabel"]);
  let F = _ || m,
    V = F && (null != w || null != D),
    H = V ? null : S,
    Y = y(k, t),
    W = i.useRef(false);
  i.useEffect(() => {
    true === m && (W.current = true, l.uvj.announce(null != G ? G : c.intl.string(c.t.pfChQr))), false === m && true === W.current && l.uvj.announce(null != B ? B : c.intl.string(c.t.SVParY))
  }, [m, G, B]);
  let K = (0, r.jsx)(l.tEY, p(f({}, k), {
    offset: Y,
    children: (0, r.jsxs)("button", p(f({}, F ? null : Z), {
      "aria-label": U,
      "aria-busy": !!m || true,
      ref: j,
      onClick: F ? e => e.preventDefault() : C,
      onDoubleClick: F ? e => e.preventDefault() : N,
      onMouseUp: _ ? true : P,
      onMouseDown: _ ? true : R,
      onMouseEnter: w,
      onMouseLeave: D,
      onKeyDown: _ ? true : x,
      type: v,
      disabled: _,
      style: I,
      rel: M,
      className: o()(T, O({
        look: t,
        color: n,
        size: a,
        fullWidth: s,
        grow: d,
        submitting: m,
        disabled: _
      }), H),
      children: [m && !_ ? (0, r.jsx)(l.$jN, {
        type: l.$jN.Type.PULSING_ELLIPSIS,
        className: u.spinner,
        itemClassName: u.spinnerItem
      }) : null, (0, r.jsx)("div", {
        className: o()(u.contents, A),
        children: L
      })]
    }))
  }));
  return V ? (0, r.jsxs)("span", {
    className: o()(u.disabledButtonWrapper, S, a, {
      [u.grow]: d,
      [u.fullWidth]: s
    }),
    children: [K, (0, r.jsx)("span", {
      onMouseEnter: w,
      onMouseLeave: D,
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
    innerClassName: _,
    to: m,
    onClick: y,
    onMouseDown: O,
    onMouseUp: v,
    children: I,
    rel: S
  } = e, T = h(e, ["look", "color", "size", "fullWidth", "grow", "style", "className", "innerClassName", "to", "onClick", "onMouseDown", "onMouseUp", "children", "rel"]);
  return (0, r.jsx)(s.rU, p(f({}, T), {
    to: m,
    onClick: y,
    onMouseUp: v,
    onMouseDown: O,
    style: c,
    rel: S,
    className: o()(d, u.button, t, n, i, {
      [u.fullWidth]: a,
      [u.grow]: l
    }),
    children: (0, r.jsx)("span", {
      className: o()(u.contents, _),
      children: I
    })
  }))
}