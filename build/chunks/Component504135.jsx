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

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    color: t = "default",
    label: n,
    icon: a,
    iconLeft: p,
    iconLeftSize: m = "md",
    hint: E,
    subtext: b,
    subtextLineClamp: y,
    hasSubmenu: O,
    disabled: v,
    isFocused: I,
    menuItemProps: T,
    action: S,
    onClose: A,
    onFocus: C,
    className: N,
    focusedClassName: R,
    subMenuIconClassName: P,
    dontCloseOnActionIfHoldingShiftKey: D,
    dontCloseOnAction: w,
    iconProps: L
  } = e, {
    onSelect: x,
    onInteraction: M
  } = i.useContext(c.p), k = i.useRef(null), j = i.useCallback(e => {
    var t;
    if (null == M || M({
        type: c.U.DEFAULT
      }), null == S) returnfalse;
    e.shiftKey && D || w || A(), e.persist(), null == x || x(), (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => S(e))
  }, [S, A, x, D, w, M]);
  return i.useEffect(() => {
    I && ((0, u.F)(k), null == C || C())
  }, [I, C]), (0, r.jsxs)(s.P3F, g(h({
    innerRef: k,
    className: o()(_.item, _.labelContainer, f._[t], N, {
      [_.disabled]: v,
      [_.focused]: I,
      [null != R ? R : ""]: I
    }),
    onClick: v ? true : j,
    "aria-disabled": v
  }, T), {
    "data-menu-item": "true",
    children: [null != p && (0, r.jsx)("div", {
      className: o()(_.iconContainerLeft, {
        [_.iconContainerLarge]: "lg" === m
      }),
      children: (0, r.jsx)(p, g(h({
        color: "currentColor"
      }, L), {
        className: o()(_.icon, null == L ? true : L.className)
      }))
    }), (0, r.jsxs)("div", {
      className: _.label,
      children: [(0, l.I)(n, e), null != b && (0, r.jsx)(s.xvT, {
        variant: "text-xs/normal",
        className: o()(_.subtext, {
          [_.subtextLineClamp]: null != y
        }),
        lineClamp: y,
        children: b
      })]
    }), null != E && (0, r.jsx)("div", {
      className: _.hintContainer,
      children: (0, l.I)(E, e)
    }), (0, d.Y)(a) ? a : null != a && (0, r.jsx)("div", {
      className: _.iconContainer,
      children: (0, r.jsx)(a, g(h({
        color: "currentColor"
      }, L), {
        className: o()(_.icon, null == L ? true : L.className)
      }))
    }), O && (0, r.jsx)("div", {
      className: _.iconContainer,
      children: (0, r.jsx)(s.Fbu, {
        size: "md",
        color: "currentColor",
        className: o()(_.caret, P)
      })
    })]
  }))
}