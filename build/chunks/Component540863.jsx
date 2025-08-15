/** Chunk was on web.js **/
/** chunk id: 540863, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk512983 = require("./512983.jsx"),
  Chunk154948 = require("./154948.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = Chunk73800.forwardRef(function(e, t) {
  var n, {
      children: l,
      disabled: u = false,
      className: _,
      titleClassName: p,
      tag: h = "h5",
      required: m = false,
      style: g,
      title: E,
      error: b,
      titleId: y
    } = e,
    O = f(e, ["children", "disabled", "className", "titleClassName", "tag", "required", "style", "title", "error", "titleId"]);
  let v = i.useId(),
    I = i.useId(),
    T = null != y ? y : v,
    S = null != b ? null != (n = O.errorId) ? n : I : true,
    [A, N] = i.useState(true),
    [C, R] = i.useState(true),
    P = true !== C;
  return (0, r.jsx)("div", {
    ref: t,
    className: null != _ ? _ : true,
    style: null != g ? g : true,
    children: (0, r.jsx)(a.ol, {
      titleId: T,
      errorId: S,
      error: null != b ? b : true,
      isFocused: A,
      setIsFocused: N,
      hasValue: C,
      setHasValue: R,
      children: (0, r.jsxs)("div", {
        className: P ? s.fieldWrapper : true,
        children: [null != E || null != b ? (0, r.jsx)(o.v, d(c({
          tag: h,
          disabled: u,
          required: m,
          error: b,
          className: p,
          id: T,
          errorId: S
        }, O), {
          children: E
        })) : null, l]
      })
    })
  })
})