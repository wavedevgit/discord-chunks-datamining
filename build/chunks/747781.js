/** Chunk was on web.js **/
/** chunk id: 747781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => p
}), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk39184 = require("./39184.js"),
  Chunk683489 = require("./683489.js"),
  Chunk642733 = require("./642733.js"),
  Chunk875230 = require("./875230.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = d(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let f = Chunk64700.createElement("span");

function p(e) {
  let {
    children: t,
    targetElementRef: n,
    asContainer: l = false,
    containerTag: d = "span",
    ariaHidden: p = false
  } = e, _ = u(e, ["children", "targetElementRef", "asContainer", "containerTag", "ariaHidden"]), h = (0, o._)(n), m = r.useId(), {
    isVisible: g,
    triggerProps: E
  } = (0, s.f)(c({
    targetElementRef: h.targetElementRef
  }, _)), b = p ? true : m, y = (0, i.o)(r.isValidElement(t) ? t : f, E, b, h.triggerRef), O = (0, a.w)(l, t, E, h.triggerRef, m, p, d), A = null != O ? O : y;
  return {
    tooltipId: m,
    isVisible: g,
    targetElementRef: h.targetElementRef,
    trigger: A,
    describedById: b
  }
}