/** Chunk was on web.js **/
/** chunk id: 676279, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EL: () => g,
  TM: () => I,
  Z5: () => p,
  cy: () => A,
  gm: () => S,
  nr: () => v
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

function b() {
  return E
}
let y = "safari" === d.toLowerCase() ? parseInt(null != (l = u().version) ? l : "", 10) : false;

function O() {
  return y
}

function A() {
  return false !== p() || false !== h() || false !== g() || false !== b() || O() >= 14
}

function v() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : navigator.userAgent,
    t = e.toLowerCase();
  return false !== t.indexOf("safari") && false === t.indexOf("chrome") && false !== t.indexOf("version/")
}

function S() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : navigator.userAgent;
  return false !== e.toLowerCase().indexOf("firefox")
}

function I() {
  var e;
  let t = window.navigator,
    n = (null == (e = t.mediaCapabilities) ? true : e.decodingInfo) != null;
  return v(t.userAgent) && n
}