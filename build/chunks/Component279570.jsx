/** Chunk was on web.js **/
/** chunk id: 279570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk84735 = require("./84735.js"),
  Chunk780605 = require("./780605.jsx"),
  Chunk214785 = require("./214785.js"),
  Chunk974257 = require("./974257.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  var {
    role: t = "button",
    type: n = "button",
    size: o = "md",
    variant: d = "secondary",
    icon: _,
    iconOpticalOffsetMargin: m = 0,
    focusProps: g,
    pressed: E = false,
    "aria-label": b,
    buttonRef: y,
    disabled: O,
    className: v,
    style: I
  } = e, T = h(e, ["role", "type", "size", "variant", "icon", "iconOpticalOffsetMargin", "focusProps", "pressed", "aria-label", "buttonRef", "disabled", "className", "style"]);
  let S = i.useRef(null),
    A = null != y ? y : S,
    C = (0, r.jsx)(l.E, {
      icon: _,
      iconOpticalOffsetMargin: m,
      iconPosition: "start",
      size: o,
      ref: A,
      disabled: O
    });
  return (0, r.jsx)(s.t, p(f({}, g), {
    children: (0, r.jsx)("button", p(f({
      role: t,
      type: n,
      "aria-pressed": E,
      className: a()(c.button, u.button, c[o], u[d], {
        [u.pressed]: E
      }),
      "aria-label": b,
      disabled: O,
      ref: A
    }, T), {
      children: (0, r.jsx)("div", {
        className: c.buttonChildrenWrapper,
        children: C
      })
    }))
  }))
}