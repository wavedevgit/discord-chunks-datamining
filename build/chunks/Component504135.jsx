/** Chunk was on web.js **/
/** chunk id: 504135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => b
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
  Chunk106683 = require("./106683.jsx"),
  Chunk939350 = require("./939350.js"),
  Chunk564546 = require("./564546.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
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
    iconLeft: m,
    iconLeftSize: g = "md",
    hint: b,
    subtext: y,
    subtextLineClamp: O,
    hasSubmenu: v,
    disabled: S,
    isFocused: I,
    menuItemProps: T,
    action: C,
    onClose: A,
    onFocus: N,
    className: P,
    focusedClassName: R,
    subMenuIconClassName: w,
    dontCloseOnActionIfHoldingShiftKey: D,
    dontCloseOnAction: x,
    iconProps: L
  } = e, {
    onSelect: j,
    onInteraction: M
  } = i.useContext(c.p), k = i.useRef(null), U = i.useCallback(e => {
    var t;
    if (null == M || M({
        type: c.U.DEFAULT
      }), null == C) returnfalse;
    e.shiftKey && D || x || A(), e.persist(), null == j || j(), (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => C(e))
  }, [C, A, j, D, x, M]);
  return i.useEffect(() => {
    I && ((0, u.F)(k), null == N || N())
  }, [I, N]), (0, r.jsxs)(s.P3F, E(h({
    innerRef: k,
    className: o()(_.item, _.labelContainer, p._e[t], P, {
      [_.disabled]: S,
      [_.focused]: I,
      [null != R ? R : ""]: I
    }),
    onClick: S ? true : U,
    "aria-disabled": S
  }, T), {
    "data-menu-item": "true",
    children: [null != m && (0, r.jsx)("div", {
      className: o()(_.iconContainerLeft, {
        [_.iconContainerLarge]: "lg" === g
      }),
      children: (0, r.jsx)(m, E(h({
        color: "currentColor"
      }, L), {
        className: o()(_.icon, null == L ? true : L.className)
      }))
    }), (0, r.jsxs)("div", {
      className: _.label,
      children: [(0, r.jsx)(f.i, {
        children: (0, l.I)(n, e)
      }), null != y && (0, r.jsx)(s.xvT, {
        variant: "text-xs/normal",
        className: o()(_.subtext, {
          [_.subtextLineClamp]: null != O
        }),
        lineClamp: O,
        children: y
      })]
    }), null != b && (0, r.jsx)("div", {
      className: _.hintContainer,
      children: (0, l.I)(b, e)
    }), (0, d.Y)(a) ? a : null != a && (0, r.jsx)("div", {
      className: _.iconContainer,
      children: (0, r.jsx)(a, E(h({
        color: "currentColor"
      }, L), {
        className: o()(_.icon, null == L ? true : L.className)
      }))
    }), v && (0, r.jsx)("div", {
      className: _.iconContainer,
      children: (0, r.jsx)(s.Fbu, {
        size: "md",
        color: "currentColor",
        className: o()(_.caret, w)
      })
    })]
  }))
}