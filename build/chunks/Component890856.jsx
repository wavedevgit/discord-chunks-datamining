/** Chunk was on web.js **/
/** chunk id: 890856, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk939249 = require("./939249.jsx"),
  Chunk250614 = require("./250614.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = e => {
  let {
    tag: t = "div",
    children: n,
    className: s,
    style: c,
    focusProps: d,
    onClick: f,
    onMouseEnter: p,
    onDoubleClick: _,
    onContextMenu: h,
    onKeyDown: m,
    onFocus: g,
    onBlur: E,
    onMouseOver: y,
    onMouseDown: b,
    onMouseLeave: O,
    buttonProps: v,
    "aria-label": A,
    "aria-describedby": I,
    ref: S,
    buttonRef: T
  } = e, C = i.useRef(null), N = null != S ? S : C;
  return (0, r.jsxs)(t, {
    ref: N,
    className: s,
    style: c,
    onClick: f,
    onMouseEnter: p,
    onMouseOver: y,
    onMouseLeave: O,
    onDoubleClick: _,
    onMouseDown: b,
    onContextMenu: h,
    children: [(0, r.jsx)(a.D, u(l({}, v), {
      innerRef: T,
      focusProps: l({
        ringTarget: N
      }, d),
      className: o.K,
      "aria-label": A,
      "aria-describedby": I,
      onClick: e => {
        e.stopPropagation(), null == f || f(e)
      },
      onKeyDown: m,
      onFocus: g,
      onBlur: E,
      onMouseDown: b
    })), n]
  })
}