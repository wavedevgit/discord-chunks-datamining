/** Chunk was on web.js **/
/** chunk id: 409794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk777207 = require("./777207.jsx"),
  Chunk200269 = require("./200269.jsx"),
  Chunk414630 = require("./414630.js");

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
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let _ = Chunk473749.forwardRef(function(e, t) {
  var {
    variant: n,
    className: i
  } = e, a = f(e, ["variant", "className"]);
  let u = (0, l.x)(),
    p = "h".concat(Math.min(u, 6));
  return (0, r.jsx)(s.x, d({
    ref: t,
    variant: n,
    tag: p,
    className: o()(c.defaultColor, i)
  }, u > 6 ? {
    "data-excessive-heading-level": u
  } : {}, a))
})