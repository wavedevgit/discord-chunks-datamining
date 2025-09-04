/** Chunk was on web.js **/
/** chunk id: 504135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk1561 = require("./1561.jsx"),
  Chunk761224 = require("./761224.js"),
  Chunk670596 = require("./670596.js"),
  Chunk743236 = require("./743236.js"),
  Chunk525220 = require("./525220.js"),
  Chunk481060 = require("./481060.js"),
  Chunk939350 = require("./939350.js"),
  Chunk334405 = require("./334405.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    color: t = "default",
    label: n,
    icon: a,
    iconLeft: h,
    iconLeftSize: g = "md",
    hint: b,
    subtext: y,
    subtextLineClamp: O,
    hasSubmenu: v,
    disabled: I,
    isFocused: T,
    menuItemProps: S,
    action: A,
    onClose: C,
    onFocus: N,
    className: R,
    focusedClassName: P,
    subMenuIconClassName: w,
    dontCloseOnActionIfHoldingShiftKey: D,
    dontCloseOnAction: x,
    iconProps: L,
    sparkle: j
  } = e, {
    onSelect: k,
    onInteraction: M
  } = i.useContext(c.p), U = i.useRef(null), G = i.useCallback(e => {
    var t;
    if (null == M || M({
        type: c.U.DEFAULT
      }), null == A) returnfalse;
    e.shiftKey && D || x || C(), e.persist(), null == k || k(), (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => A(e))
  }, [A, C, k, D, x, M]);
  return i.useEffect(() => {
    T && ((0, u.F)(U), null == N || N())
  }, [T, N]), (0, r.jsxs)(s.P, E(m({
    innerRef: U,
    className: o()(p.item, p.labelContainer, _._[t], R, {
      [p.disabled]: I,
      [p.focused]: T,
      [null != P ? P : ""]: T
    }),
    onClick: I ? true : G,
    "aria-disabled": I
  }, S), {
    "data-menu-item": "true",
    children: [null != h && (0, r.jsx)("div", {
      className: o()(p.iconContainerLeft, {
        [p.iconContainerLarge]: "lg" === g
      }),
      children: (0, r.jsx)(h, E(m({
        color: "currentColor"
      }, L), {
        className: o()(p.icon, null == L ? true : L.className)
      }))
    }), (0, r.jsxs)("div", {
      className: p.label,
      children: [(0, l.I)(n, e), null != y && (0, r.jsx)(f.Text, {
        variant: "text-xs/normal",
        className: o()(p.subtext, {
          [p.subtextLineClamp]: null != O
        }),
        lineClamp: O,
        children: y
      })]
    }), null != b && (0, r.jsx)("div", {
      className: p.hintContainer,
      children: (0, l.I)(b, e)
    }), (0, d.Y)(a) ? a : null != a && (0, r.jsx)("div", {
      className: p.iconContainer,
      children: (0, r.jsx)(a, E(m({
        color: "currentColor"
      }, L), {
        className: o()(p.icon, null == L ? true : L.className)
      }))
    }), v && (0, r.jsxs)("div", {
      className: p.iconContainer,
      children: [(0, r.jsx)(f.Fbu, {
        size: "md",
        color: "currentColor",
        className: o()(p.caret, w)
      }), j && (0, r.jsx)(f.K1N, {
        className: p.sparkles
      })]
    })]
  }))
}