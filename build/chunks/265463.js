/** Chunk was on 46875 **/
/** chunk id: 265463, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  fo: () => s,
  uW: () => i,
  vr: () => o,
  z0: () => c
}), require("./733351.js");
var Chunk753738 = require("./753738.js"),
  Chunk985018 = require("./985018.jsx");

function a(e, t) {
  return {
    type: e,
    message: null != t ? t : null
  }
}

function i() {
  return a(0, r.intl.string(r.t["71wuR0"]))
}

function s() {
  return a(0, r.intl.string(r.t["w/BT3G"]))
}

function c(e, t) {
  return a(1, (0, l.cw)(e, null == t ? true : t.id))
}

function o(e, t) {
  var n;
  return null == e || 0 === e.type && null != t.content && t.content.trim().length > 0 || 2 === e.type && null != t.tags && t.tags.length > 0 ? null : null != (n = e.message) ? n : null
}