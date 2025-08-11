/** Chunk was on web.js **/
/** chunk id: 526167, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G6: () => y,
  hY: () => m,
  og: () => b,
  rO: () => O,
  vu: () => f
});
var r, i, o, a, s, Chunk525654 = require("./525654.js"),
  c = require.n(Chunk525654);
let u = (null != (r = c().name) ? r : "unknown").toLowerCase(),
  d = "chrome" === u.toLowerCase() ? parseInt(null != (i = c().version) ? i : "", 10) : false;

function f() {
  return d
}
let _ = "electron" === u.toLowerCase() ? parseInt(null != (o = c().version) ? o : "", 10) : false;

function p() {
  return _
}
let h = "firefox" === u.toLowerCase() ? parseInt(null != (a = c().version) ? a : "", 10) : false;

function m() {
  return h
}
let g = "edge" === u.toLowerCase() ? parseInt(null != (s = c().version) ? s : "", 10) : false;

function E() {
  return g
}

function b() {
  return false !== f() || false !== p() || false !== m() || false !== E()
}

function y() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : navigator.userAgent,
    t = module.toLowerCase();
  return false !== exports.indexOf("safari") && false === exports.indexOf("chrome") && false !== exports.indexOf("version/")
}

function O() {
  var e;
  let t = window.navigator,
    n = (null == (e = exports.mediaCapabilities) ? true : module.decodingInfo) != null;
  return y(exports.userAgent) && require
}