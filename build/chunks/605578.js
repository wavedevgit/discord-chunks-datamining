/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  k: () => d
});
var r = n(200651),
  i = n(192379),
  o = n(1561),
  a = n(736271);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let d = i.forwardRef(function(e, t) {
  let {
    tag: n = "div",
    children: s,
    className: c,
    style: d,
    focusProps: f,
    onClick: p,
    onDoubleClick: _,
    onContextMenu: h,
    onKeyDown: m,
    onFocus: g,
    onBlur: E,
    onMouseOver: v,
    onMouseDown: b,
    onMouseLeave: y,
    buttonProps: O,
    "aria-label": S
  } = e, I = i.useRef(null);
  return i.useImperativeHandle(t, () => I.current), (0, r.jsxs)(n, {
    ref: I,
    className: c,
    style: d,
    onClick: p,
    onMouseOver: v,
    onMouseLeave: y,
    onDoubleClick: _,
    onContextMenu: h,
    children: [(0, r.jsx)(o.P, u(l({}, O), {
      focusProps: l({
        ringTarget: I
      }, f),
      className: a.focusTarget,
      "aria-label": S,
      onClick: e => {
        e.stopPropagation(), null == p || p(e)
      },
      onKeyDown: m,
      onFocus: g,
      onBlur: E,
      onMouseDown: b
    })), s]
  })
})