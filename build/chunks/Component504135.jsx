/** Chunk was on web.js **/
/** chunk id: 504135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk761224 = require("./761224.js"),
  Chunk670596 = require("./670596.js"),
  Chunk743236 = require("./743236.js"),
  Chunk525220 = require("./525220.js"),
  Chunk939350 = require("./939350.js"),
  Chunk334405 = require("./334405.js");

function _(e, t, n) {
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    color: t = "default",
    label: n,
    icon: a,
    iconLeft: _,
    iconLeftSize: h = "md",
    hint: E,
    subtext: b,
    subtextLineClamp: y,
    hasSubmenu: O,
    disabled: v,
    isFocused: S,
    menuItemProps: I,
    action: T,
    onClose: A,
    onFocus: C,
    className: N,
    focusedClassName: P,
    subMenuIconClassName: R,
    dontCloseOnActionIfHoldingShiftKey: D,
    dontCloseOnAction: w,
    iconProps: x
  } = e, {
    onSelect: L,
    onInteraction: j
  } = i.useContext(c.p), M = i.useRef(null), k = i.useCallback(e => {
    var t;
    if (null == j || j({
        type: c.U.DEFAULT
      }), null == T) returnfalse;
    e.shiftKey && D || w || A(), e.persist(), null == L || L(), (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => T(e))
  }, [T, A, L, D, w, j]);
  return i.useEffect(() => {
    S && ((0, u.F)(M), null == C || C())
  }, [S, C]), (0, r.jsxs)(s.P3F, g(m({
    innerRef: M,
    className: o()(p.item, p.labelContainer, f._e[t], N, {
      [p.disabled]: v,
      [p.focused]: S,
      [null != P ? P : ""]: S
    }),
    onClick: v ? true : k,
    "aria-disabled": v
  }, I), {
    "data-menu-item": "true",
    children: [null != _ && (0, r.jsx)("div", {
      className: o()(p.iconContainerLeft, {
        [p.iconContainerLarge]: "lg" === h
      }),
      children: (0, r.jsx)(_, g(m({
        color: "currentColor"
      }, x), {
        className: o()(p.icon, null == x ? true : x.className)
      }))
    }), (0, r.jsxs)("div", {
      className: p.label,
      children: [(0, l.I)(n, e), null != b && (0, r.jsx)(s.xvT, {
        variant: "text-xs/normal",
        className: o()(p.subtext, {
          [p.subtextLineClamp]: null != y
        }),
        lineClamp: y,
        children: b
      })]
    }), null != E && (0, r.jsx)("div", {
      className: p.hintContainer,
      children: (0, l.I)(E, e)
    }), (0, d.Y)(a) ? a : null != a && (0, r.jsx)("div", {
      className: p.iconContainer,
      children: (0, r.jsx)(a, g(m({
        color: "currentColor"
      }, x), {
        className: o()(p.icon, null == x ? true : x.className)
      }))
    }), O && (0, r.jsx)("div", {
      className: p.iconContainer,
      children: (0, r.jsx)(s.Fbu, {
        size: "md",
        color: "currentColor",
        className: o()(p.caret, R)
      })
    })]
  }))
}