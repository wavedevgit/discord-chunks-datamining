/** Chunk was on web.js **/
/** chunk id: 595824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => f,
  h: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk402453 = require("./402453.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk982125 = require("./982125.jsx"),
  Chunk910989 = require("./910989.jsx");

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

function f(e) {
  return (0, i.A)("Checkbox") ? (0, r.jsx)(o.C, c({}, e)) : (0, r.jsx)(_, c({}, e))
}

function _(e) {
  let {
    label: t,
    checked: n,
    onChange: i,
    labelType: o = "primary"
  } = e, l = null != t && "" !== t ? (0, r.jsx)(a.x, {
    variant: "text-md/medium",
    color: "primary" === o ? "text-primary" : "text-secondary",
    children: t
  }) : null;
  return (0, r.jsx)(s.$q, d(c({}, e), {
    value: n,
    onChange: (e, t) => null == i ? true : i(t),
    children: l
  }))
}