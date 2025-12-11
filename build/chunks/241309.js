/** Chunk was on 41700 **/
/** chunk id: 241309, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Gx: () => o,
  Op: () => c,
  T4: () => s,
  V_: () => a
}), require("./781311.js");
var Chunk539573 = require("./539573.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t) {
  return {
    type: e,
    message: null != t ? t : null
  }
}

function a() {
  return l(0, Chunk388032.intl.string(Chunk388032.t.uXA573))
}

function s() {
  return l(0, Chunk388032.intl.string(Chunk388032.t.kesTVT))
}

function o(e, t) {
  return l(1, (0, r.$q)(e, null == t ? true : t.id))
}

function c(e, t) {
  var n;
  return null == e || 0 === e.type && null != t.content && t.content.trim().length > 0 ? null : null != (n = e.message) ? n : null
}