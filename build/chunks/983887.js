/** Chunk was on web.js **/
/** chunk id: 983887, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => p
}), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk602188 = require("./602188.js"),
  Chunk98736 = require("./98736.js"),
  Chunk531430 = require("./531430.js"),
  Chunk966327 = require("./966327.js");

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
  if (null == e) return {};
  var n, r, i = d(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let f = Chunk473749.createElement("span");

function p(e) {
  var {
    children: t,
    targetElementRef: n,
    asContainer: l = false,
    containerTag: d = "span",
    ariaHidden: p = false
  } = e, _ = u(e, ["children", "targetElementRef", "asContainer", "containerTag", "ariaHidden"]);
  let m = (0, s.c)(n),
    h = r.useId(),
    {
      isVisible: g,
      triggerProps: E
    } = (0, o.B)(c({
      targetElementRef: m.targetElementRef
    }, _)),
    b = p ? true : h,
    y = (0, i.X)(r.isValidElement(t) ? t : f, E, b, m.triggerRef),
    O = (0, a.j)(l, t, E, m.triggerRef, h, p, d),
    v = null != O ? O : y;
  return {
    tooltipId: h,
    isVisible: g,
    targetElementRef: m.targetElementRef,
    trigger: v,
    describedById: b
  }
}