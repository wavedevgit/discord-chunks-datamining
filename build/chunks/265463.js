/** Chunk was on 46875 **/
/** chunk id: 265463, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  fo: () => s,
  uW: () => a,
  vr: () => c,
  z0: () => o
}), require("./733351.js");
var Chunk753738 = require("./753738.js"),
  Chunk985018 = require("./985018.jsx");

function i(e, t) {
  return {
    type: e,
    message: null != t ? t : null
  }
}

function a() {
  return i(0, l.intl.string(l.t["71wuR0"]))
}

function s() {
  return i(0, l.intl.string(l.t["w/BT3G"]))
}

function o(e, t) {
  return i(1, (0, r.cw)(e, null == t ? true : t.id))
}

function c(e, t) {
  var n;
  return null == e || 0 === e.type && null != t.content && t.content.trim().length > 0 || 2 === e.type && null != t.tags && t.tags.length > 0 ? null : null != (n = e.message) ? n : null
}