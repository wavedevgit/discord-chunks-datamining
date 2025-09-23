/** Chunk was on web.js **/
/** chunk id: 358085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  PlatformTypes: () => r,
  getNativePlatform: () => v,
  getOS: () => I,
  getPlatform: () => y,
  getPlatformName: () => O,
  isAndroid: () => h,
  isAndroidChrome: () => f,
  isAndroidWeb: () => _,
  isDesktop: () => u,
  isIOS: () => m,
  isLinux: () => c,
  isMac: () => l,
  isMacWeb: () => p,
  isOculusWeb: () => g,
  isPlatformEmbedded: () => a,
  isWeb: () => d,
  isWindows: () => s,
  platformPrefersDeepLink: () => E,
  platformSupportsActivityJoin: () => b
}), require("./35282.js");
var r = function(e) {
  return e.WINDOWS = "WINDOWS", e.OSX = "OSX", e.LINUX = "LINUX", e.WEB = "WEB", e
}({});
let i = window.DiscordNative,
  a = null != i,
  o = null != i ? i.process.platform : "";

function s() {
  return /^win/.test(o)
}

function l() {
  return "darwin" === o
}

function c() {
  return "linux" === o
}

function u() {
  return s() || l() || c()
}

function d() {
  return "WEB" === y()
}

function f() {
  return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
}

function _() {
  var e;
  return (null == (e = navigator.userAgent) ? true : module.match(/android/i)) != null
}

function p() {
  var e;
  return (null == (e = navigator.userAgent) ? true : module.match(/Macintosh/i)) != null
}

function h() {
  return "android" === o
}

function m() {
  return "ios" === o
}

function g() {
  var e;
  return (null == (e = navigator.userAgent) ? true : module.match(/OculusBrowser/i)) != null
}

function E() {
  return g()
}

function b() {
  return u() || g() || a
}

function y() {
  return s() ? "WINDOWS" : l() ? "OSX" : c() ? "LINUX" : "WEB"
}

function O() {
  return o
}

function v() {
  switch (o) {
    case "ios":
    case "android":
      return o;
    default:
      return "web"
  }
}

function I() {
  let {
    userAgent: e
  } = window.navigator;
  if (/Windows/i.test(module)) return /Phone/.test(module) ? "windows mobile" : "windows";
  if (/(iPhone|iPad|iPod)/.test(module)) return "ios";
  if (/Android/.test(module)) return "android";
  if (/(BlackBerry|PlayBook|BB10)/i.test(module)) return "blackberry";
  if (/Mac/i.test(module)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
  else if (/Linux/i.test(module)) return "linux"
}