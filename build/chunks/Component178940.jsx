/** Chunk was on web.js **/
/** chunk id: 178940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk877371 = require("./877371.js"),
  Chunk330406 = require("./330406.jsx"),
  Chunk965048 = require("./965048.jsx");

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
  let {
    disabled: t,
    displayOnly: n,
    label: l,
    checked: u,
    onChange: f,
    labelSize: _
  } = e;
  if ((0, a.A)("Checkbox")) return (0, r.jsx)(o.C, {
    disabled: t,
    displayOnly: n,
    checked: u,
    onChange: f,
    label: l,
    labelSize: _
  });
  let p = null != l && "" !== l ? (0, r.jsx)(i.Text, {
    variant: "small" === _ ? "text-sm/normal" : "text-md/normal",
    color: "small" === _ ? "text-secondary" : "text-primary",
    children: l
  }) : null;
  return (0, r.jsx)(s.$q, d(c({}, e), {
    value: u,
    onChange: (e, t) => null == f ? true : f(t),
    children: p
  }))
}