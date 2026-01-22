/** Chunk was on web.js **/
/** chunk id: 403362, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QE: () => u,
  S1: () => c,
  Vq: () => l,
  iT: () => s,
  m6: () => a,
  xb: () => o
}), require("./65821.js");
let r = false,
  i = "development" === window.GLOBAL_ENV.PROJECT_ENV;

function a() {
  return r
}

function s() {
  return i
}

function o(e) {
  throw Error("Unhandled value: ".concat(e))
}

function l(e) {
  return null != e
}

function c(e, t) {
  return t.includes(e)
}

function u(e) {
  return null != e[1]
}