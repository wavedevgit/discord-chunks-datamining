/** Chunk was on web.js **/
/** chunk id: 181038, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk797686 = require("./797686.js"),
  i = "LTR",
  a = "RTL",
  s = null;

function o(e) {
  return e === i || e === a
}

function l(e) {
  return o(e) || r(false), e === i ? "ltr" : "rtl"
}

function c(e, t) {
  return o(e) || r(false), o(t) || r(false), e === t ? null : l(e)
}

function u(e) {
  s = e
}

function d() {
  u(i)
}
module.exports = {
  NEUTRAL: "NEUTRAL",
  LTR: i,
  RTL: a,
  isStrong: o,
  getHTMLDir: l,
  getHTMLDirIfDifferent: c,
  setGlobalDir: u,
  initGlobalDir: d,
  getGlobalDir: function() {
    return s || this.initGlobalDir(), s || r(false), s
  }
}