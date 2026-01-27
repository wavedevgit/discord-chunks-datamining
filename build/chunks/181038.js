/** Chunk was on 38939 **/
/** chunk id: 181038, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk797686 = require("./797686.js"),
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
    return i || this.initGlobalDir(), i || n(false), i
  }
}