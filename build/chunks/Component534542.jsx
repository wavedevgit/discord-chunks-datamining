/** Chunk was on web.js **/
/** chunk id: 534542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => E,
  g: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk520463 = require("./520463.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = {
    DEFAULT: "default",
    INPUT_PLACEHOLDER: "placeholder",
    DESCRIPTION: "description",
    LABEL_BOLD: "labelBold",
    LABEL_SELECTED: "labelSelected",
    LABEL_DESCRIPTOR: "labelDescriptor",
    ERROR: "error",
    SUCCESS: "success"
  },
  h = "modeDefault",
  m = "modeDisabled",
  g = "modeSelectable";

function E(e) {
  var {
    type: t = p.DEFAULT,
    className: n,
    disabled: i,
    selectable: l,
    children: u,
    style: _
  } = e, E = f(e, ["type", "className", "disabled", "selectable", "children", "style"]);
  let b = h;
  return i ? b = m : l && (b = g), (0, r.jsx)(a.Text, d(c({
    variant: "text-sm/normal",
    className: o()(s[t], n, s[b]),
    style: _
  }, E), {
    children: u
  }))
}
E.Types = p