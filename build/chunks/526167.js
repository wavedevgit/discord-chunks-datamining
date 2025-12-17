/** Chunk was on web.js **/
/** chunk id: 526167, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G6: () => S,
  hY: () => g,
  og: () => v,
  rO: () => T,
  vU: () => I,
  vu: () => p
});
var r, i, a, o, s, l, Chunk525654 = require("./525654.js"),
  u = require.n(Chunk525654);
let d = (null != (r = u().name) ? r : "unknown").toLowerCase(),
  f = "chrome" === d.toLowerCase() ? parseInt(null != (i = u().version) ? i : "", 10) : false;

function p() {
  return f
}
let _ = "electron" === d.toLowerCase() ? parseInt(null != (a = u().version) ? a : "", 10) : false;

function m() {
  return _
}
let h = "firefox" === d.toLowerCase() ? parseInt(null != (o = u().version) ? o : "", 10) : false;

function g() {
  return h
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
  return false !== p() || false !== m() || false !== g() || false !== b() || O() >= 14
}

function S() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : navigator.userAgent,
    t = module.toLowerCase();
  return false !== exports.indexOf("safari") && false === exports.indexOf("chrome") && false !== exports.indexOf("version/")
}

function I() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : navigator.userAgent;
  return false !== module.toLowerCase().indexOf("firefox")
}

function T() {
  var e;
  let t = window.navigator,
    n = (null == (e = exports.mediaCapabilities) ? true : module.decodingInfo) != null;
  return S(exports.userAgent) && require
}