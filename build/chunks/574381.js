/** Chunk was on web.js **/
/** chunk id: 574381, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Aq: () => f,
  Av: () => a,
  Ct: () => p,
  HZ: () => d,
  Ls: () => y,
  R0: () => A,
  Sn: () => _,
  cX: () => l,
  fg: () => r,
  j9: () => c,
  m0: () => h,
  q4: () => g,
  r_: () => v,
  t1: () => O,
  tn: () => E,
  uF: () => o,
  un: () => m,
  uo: () => b,
  xl: () => u
}), require("./747238.js");
var r = function(e) {
  return e.WINDOWS = "WINDOWS", e.OSX = "OSX", e.LINUX = "LINUX", e.WEB = "WEB", e
}({});
let i = window.DiscordNative,
  a = null != i,
  s = null != i ? i.process.platform : "";

function o() {
  return /^win/.test(s)
}

function l() {
  return "darwin" === s
}

function c() {
  return "linux" === s
}

function u() {
  return o() || l() || c()
}

function d() {
  return "WEB" === b()
}

function f() {
  return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
}

function p() {
  var e;
  return (null == (e = navigator.userAgent) ? true : e.match(/android/i)) != null
}

function _() {
  var e;
  return (null == (e = navigator.userAgent) ? true : e.match(/Macintosh/i)) != null
}

function h() {
  return "android" === s
}

function m() {
  return "ios" === s
}

function g() {
  var e;
  return (null == (e = navigator.userAgent) ? true : e.match(/OculusBrowser/i)) != null
}

function E() {
  return g()
}

function y() {
  return u() || g() || a
}

function b() {
  return o() ? "WINDOWS" : l() ? "OSX" : c() ? "LINUX" : "WEB"
}

function O() {
  return s
}

function v() {
  switch (s) {
    case "ios":
    case "android":
      return s;
    default:
      return "web"
  }
}

function A() {
  let {
    userAgent: e
  } = window.navigator;
  if (/Windows/i.test(e)) return /Phone/.test(e) ? "windows mobile" : "windows";
  if (/(iPhone|iPad|iPod)/.test(e)) return "ios";
  if (/Android/.test(e)) return "android";
  if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "blackberry";
  if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
  else if (/Linux/i.test(e)) return "linux"
}