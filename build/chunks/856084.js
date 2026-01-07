/** Chunk was on web.js **/
/** chunk id: 856084, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk581079 = require("./581079.js"),
  i = "LTR",
  a = "RTL",
  o = null;

function s(e) {
  return e === i || e === a
}

function l(e) {
  return s(e) || r(false), e === i ? "ltr" : "rtl"
}

function c(e, t) {
  return s(e) || r(false), s(t) || r(false), e === t ? null : l(e)
}

function u(e) {
  o = e
}

function d() {
  u(i)
}
module.exports = {
  NEUTRAL: "NEUTRAL",
  LTR: i,
  RTL: a,
  isStrong: s,
  getHTMLDir: l,
  getHTMLDirIfDifferent: c,
  setGlobalDir: u,
  initGlobalDir: d,
  getGlobalDir: function() {
    return o || this.initGlobalDir(), o || r(false), o
  }
}