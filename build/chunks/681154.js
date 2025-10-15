/** Chunk was on 9456 **/
/** chunk id: 681154, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Gx: () => o,
  Op: () => c,
  T4: () => s,
  V_: () => l
}), require("./781311.js");
var Chunk539573 = require("./539573.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t) {
  return {
    type: e,
    message: null != t ? t : null
  }
}

function l() {
  return a(0, Chunk388032.intl.string(Chunk388032.t["71wuR0"]))
}

function s() {
  return a(0, Chunk388032.intl.string(Chunk388032.t["w/BT3G"]))
}

function o(e, t) {
  return a(1, (0, r.$q)(e, null == t ? true : t.id))
}

function c(e, t) {
  var n;
  return null == e || 0 === e.type && null != t.content && t.content.trim().length > 0 || 2 === e.type && null != t.tags && t.tags.length > 0 ? null : null != (n = e.message) ? n : null
}