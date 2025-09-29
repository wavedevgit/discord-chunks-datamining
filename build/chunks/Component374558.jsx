/** Chunk was on web.js **/
/** chunk id: 374558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M0: () => E,
  YX: () => m,
  tT: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk981729 = require("./981729.jsx"),
  Chunk390756 = require("./390756.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
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
let m = {
    TERTIARY: Chunk390756.tertiary,
    SECONDARY: Chunk390756.secondary,
    PRIMARY: Chunk390756.primary
  },
  g = {
    SIZE_24: Chunk390756.size24,
    SIZE_32: Chunk390756.size32,
    SIZE_36: Chunk390756.size36
  },
  E = Chunk647438.forwardRef(function(e, t) {
    let {
      className: n,
      tooltip: i,
      color: a,
      size: u = g.SIZE_32,
      icon: f,
      onMouseDown: h,
      onClick: m,
      disabled: E,
      focusProps: b
    } = e;
    return (0, r.jsx)(l.u, {
      text: i,
      shouldShow: !E,
      children: e => {
        var {
          onClick: l
        } = e, g = p(e, ["onClick"]);
        return (0, r.jsx)(s.P3F, _(d({}, g), {
          innerRef: t,
          "aria-label": i,
          "aria-disabled": E,
          className: o()(n, c.button, a, u, {
            [c.disabled]: E
          }),
          onMouseDown: h,
          onClick: e => {
            null == l || l(), m(e)
          },
          focusProps: b,
          children: f
        }))
      }
    })
  })