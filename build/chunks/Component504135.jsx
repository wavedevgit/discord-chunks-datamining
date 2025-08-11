/** Chunk was on web.js **/
/** chunk id: 504135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk1561 = require("./1561.jsx"),
  Chunk761224 = require("./761224.js"),
  Chunk670596 = require("./670596.js"),
  Chunk743236 = require("./743236.js"),
  Chunk525220 = require("./525220.js"),
  Chunk481060 = require("./481060.js"),
  Chunk939350 = require("./939350.js"),
  Chunk906944 = require("./906944.js");

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
    icon: o,
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
    onClose: N,
    onFocus: C,
    className: R,
    focusedClassName: P,
    subMenuIconClassName: w,
    dontCloseOnActionIfHoldingShiftKey: D,
    dontCloseOnAction: L,
    iconProps: x,
    sparkle: M
  } = e, {
    onSelect: k,
    onInteraction: j
  } = i.useContext(c.p), U = i.useRef(null), G = i.useCallback(e => {
    var t;
    if (null == j || j({
        type: c.U.DEFAULT
      }), null == A) returnfalse;
    e.shiftKey && D || L || N(), e.persist(), null == k || k(), (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => A(e))
  }, [A, N, k, D, L, j]);
  return i.useEffect(() => {
    T && ((0, u.F)(U), null == C || C())
  }, [T, C]), (0, r.jsxs)(s.P, E(m({
    innerRef: U,
    className: a()(p.item, p.labelContainer, _._[t], R, {
      [p.disabled]: I,
      [p.focused]: T,
      [null != P ? P : ""]: T
    }),
    onClick: I ? true : G,
    "aria-disabled": I
  }, S), {
    "data-menu-item": "true",
    children: [null != h && (0, r.jsx)("div", {
      className: a()(p.iconContainerLeft, {
        [p.iconContainerLarge]: "lg" === g
      }),
      children: (0, r.jsx)(h, E(m({
        color: "currentColor"
      }, x), {
        className: a()(p.icon, null == x ? true : x.className)
      }))
    }), (0, r.jsxs)("div", {
      className: p.label,
      children: [(0, l.I)(n, e), null != y && (0, r.jsx)(f.Text, {
        variant: "text-xs/normal",
        className: a()(p.subtext, {
          [p.subtextLineClamp]: null != O
        }),
        lineClamp: O,
        children: y
      })]
    }), null != b && (0, r.jsx)("div", {
      className: p.hintContainer,
      children: (0, l.I)(b, e)
    }), (0, d.Y)(o) ? o : null != o && (0, r.jsx)("div", {
      className: p.iconContainer,
      children: (0, r.jsx)(o, E(m({
        color: "currentColor"
      }, x), {
        className: a()(p.icon, null == x ? true : x.className)
      }))
    }), v && (0, r.jsxs)("div", {
      className: p.iconContainer,
      children: [(0, r.jsx)(f.Fbu, {
        size: "md",
        color: "currentColor",
        className: a()(p.caret, w)
      }), M && (0, r.jsx)(f.K1N, {
        className: p.sparkles
      })]
    })]
  }))
}