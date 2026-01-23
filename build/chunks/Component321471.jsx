/** Chunk was on web.js **/
/** chunk id: 321471, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk504345 = require("./504345.jsx"),
  Chunk742158 = require("./742158.jsx"),
  Chunk463807 = require("./463807.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = p(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let _ = Chunk64700.forwardRef(function(e, t) {
  let [n, ...l] = [e, t], {
    children: u,
    disabled: p = false,
    className: _,
    titleClassName: h,
    tag: m = "h5",
    required: g = false,
    style: E,
    title: y,
    error: b,
    titleId: O
  } = n, v = f(n, ["children", "disabled", "className", "titleClassName", "tag", "required", "style", "title", "error", "titleId"]), [A] = l, I = i.useId(), S = i.useId(), T = null != O ? O : I, C = null != b ? S : true, [N, w] = i.useState(true), [R, P] = i.useState(true), D = true !== R;
  return (0, r.jsx)("div", {
    ref: A,
    className: null != _ ? _ : true,
    style: null != E ? E : true,
    children: (0, r.jsx)(a.hN, {
      "data-migration-pending": true,
      titleId: T,
      errorId: C,
      error: null != b ? b : true,
      isFocused: N,
      setIsFocused: w,
      hasValue: R,
      setHasValue: P,
      children: (0, r.jsxs)("div", {
        className: D ? o.G : true,
        children: [null != y || null != b ? (0, r.jsx)(s.z, d(c({
          "data-migration-pending": true,
          tag: m,
          disabled: p,
          required: g,
          error: b,
          className: h,
          id: T,
          errorId: C
        }, v), {
          children: y
        })) : null, u]
      })
    })
  })
})