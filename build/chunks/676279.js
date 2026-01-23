/** Chunk was on web.js **/
/** chunk id: 676279, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EL: () => g,
  TM: () => S,
  Z5: () => p,
  cy: () => v,
  gm: () => I,
  nr: () => A
});
var r, i, a, s, o, l, Chunk481613 = require("./481613.js"),
  u = require.n(Chunk481613);
let d = (null != (r = u().name) ? r : "unknown").toLowerCase(),
  f = "chrome" === d.toLowerCase() ? parseInt(null != (i = u().version) ? i : "", 10) : false;

function p() {
  return f
}
let _ = "electron" === d.toLowerCase() ? parseInt(null != (a = u().version) ? a : "", 10) : false;

function h() {
  return _
}
let m = "firefox" === d.toLowerCase() ? parseInt(null != (s = u().version) ? s : "", 10) : false;

function g() {
  return m
}
let E = "edge" === d.toLowerCase() ? parseInt(null != (o = u().version) ? o : "", 10) : false;

function y() {
  return E
}
let b = "safari" === d.toLowerCase() ? parseInt(null != (l = u().version) ? l : "", 10) : false;

function O() {
  return b
}

function v() {
  return false !== p() || false !== h() || false !== g() || false !== y() || O() >= 14
}

function A() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : navigator.userAgent,
    t = e.toLowerCase();
  return false !== t.indexOf("safari") && false === t.indexOf("chrome") && false !== t.indexOf("version/")
}

function I() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : navigator.userAgent;
  return false !== e.toLowerCase().indexOf("firefox")
}

function S() {
  var e;
  let t = window.navigator,
    n = (null == (e = t.mediaCapabilities) ? true : e.decodingInfo) != null;
  return A(t.userAgent) && n
}