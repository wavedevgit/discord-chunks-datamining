/** Chunk was on 8381 **/
/** chunk id: 856084, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk581079 = require("./581079.js"),
  i = null;

function o(t) {
  return "LTR" === t || "RTL" === t
}

function a(t) {
  return o(t) || n(false), "LTR" === t ? "ltr" : "rtl"
}
module.exports = {
  NEUTRAL: "NEUTRAL",
  LTR: "LTR",
  RTL: "RTL",
  isStrong: o,
  getHTMLDir: a,
  getHTMLDirIfDifferent: function(t, e) {
    return o(t) || n(false), o(e) || n(false), t === e ? null : a(t)
  },
  setGlobalDir: function(t) {
    i = t
  },
  initGlobalDir: function() {
    i = "LTR"
  },
  getGlobalDir: function() {
    return i || this.initGlobalDir(), i || Chunk581079(false), i
  }
}