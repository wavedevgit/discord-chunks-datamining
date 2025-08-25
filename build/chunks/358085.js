/** Chunk was on web.js **/
/** chunk id: 358085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  PlatformTypes: () => r,
  getNativePlatform: () => b,
  getOS: () => y,
  getPlatform: () => g,
  getPlatformName: () => E,
  isAndroid: () => h,
  isAndroidChrome: () => f,
  isAndroidWeb: () => _,
  isDesktop: () => u,
  isIOS: () => m,
  isLinux: () => c,
  isMac: () => l,
  isMacWeb: () => p,
  isPlatformEmbedded: () => o,
  isWeb: () => d,
  isWindows: () => s
}), require("./35282.js");
var r = function(e) {
  return e.WINDOWS = "WINDOWS", e.OSX = "OSX", e.LINUX = "LINUX", e.WEB = "WEB", e
}({});
let i = window.DiscordNative,
  o = null != i,
  a = null != i ? i.process.platform : "";

function s() {
  return /^win/.test(a)
}

function l() {
  return "darwin" === a
}

function c() {
  return "linux" === a
}

function u() {
  return s() || l() || c()
}

function d() {
  return "WEB" === g()
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
  return "android" === a
}

function m() {
  return "ios" === a
}

function g() {
  return s() ? "WINDOWS" : l() ? "OSX" : c() ? "LINUX" : "WEB"
}

function E() {
  return a
}

function b() {
  switch (a) {
    case "ios":
    case "android":
      return a;
    default:
      return "web"
  }
}

function y() {
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