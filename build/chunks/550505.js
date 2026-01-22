/** Chunk was on web.js **/
/** chunk id: 550505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kg: () => s,
  L2: () => f,
  bJ: () => i,
  mE: () => u,
  tH: () => d,
  vq: () => c,
  xH: () => l
});
let r = Object.prototype.toString;

function i(e) {
  switch (r.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      returntrue;
    default:
      return d(e, Error)
  }
}

function a(e, t) {
  return r.call(e) === `[object ${t}]`
}

function s(e) {
  return a(e, "String")
}

function o(e) {
  return a(e, "Object")
}

function l(e) {
  return "u" > typeof Event && d(e, Event)
}

function c(e) {
  return "u" > typeof Element && d(e, Element)
}

function u(e) {
  return o(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
}

function d(e, t) {
  try {
    return e instanceof t
  } catch (e) {
    returnfalse
  }
}

function f(e) {
  return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue))
}