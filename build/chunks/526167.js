/** Chunk was on web.js **/
/** chunk id: 526167, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G6: () => I,
  hY: () => g,
  og: () => v,
  rO: () => T,
  vu: () => _
});
var r, i, a, o, s, l, Chunk525654 = require("./525654.js"),
  u = require.n(Chunk525654);
let d = (null != (r = u().name) ? r : "unknown").toLowerCase(),
  f = "chrome" === d.toLowerCase() ? parseInt(null != (i = u().version) ? i : "", 10) : false;

function _() {
  return f
}
let p = "electron" === d.toLowerCase() ? parseInt(null != (a = u().version) ? a : "", 10) : false;

function h() {
  return p
}
let m = "firefox" === d.toLowerCase() ? parseInt(null != (o = u().version) ? o : "", 10) : false;

function g() {
  return m
}
let E = "edge" === d.toLowerCase() ? parseInt(null != (s = u().version) ? s : "", 10) : false;

function b() {
  return E
}
let y = "safari" === d.toLowerCase() ? parseInt(null != (l = u().version) ? l : "", 10) : false;

function O() {
  return y
}

function v() {
  return false !== _() || false !== h() || false !== g() || false !== b() || O() >= 14
}

function I() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : navigator.userAgent,
    t = module.toLowerCase();
  return false !== exports.indexOf("safari") && false === exports.indexOf("chrome") && false !== exports.indexOf("version/")
}

function T() {
  var e;
  let t = window.navigator,
    n = (null == (e = exports.mediaCapabilities) ? true : module.decodingInfo) != null;
  return I(exports.userAgent) && require
}