/** Chunk was on web.js **/
/** chunk id: 798566, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  BV: () => k,
  Fy: () => M,
  Pf: () => T,
  Pg: () => D,
  R0: () => O,
  sv: () => U
}), require("./747238.js"), require("./812715.js"), require("./591487.js"), require("./727858.js");
var a, Chunk214958 = require("./214958.js"),
  o = require.n(Chunk214958);
require("./689953.js");
var Chunk70298 = require("./70298.js"),
  Chunk175259 = require("./175259.js"),
  Chunk506774 = require("./506774.js"),
  Chunk362474 = require("./362474.js"),
  Chunk71931 = require("./71931.js"),
  Chunk368849 = require("./368849.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = "deviceProperties",
  y = "referralProperties",
  b = window.DiscordNative;
if (null != b) {
  let e, t = b.remoteApp.getVersion(),
    n = b.process.platform,
    i = b.os.release,
    s = b.os.arch,
    u = b.os.appArch,
    d = b.remoteApp.getReleaseChannel(),
    p = (0, Chunk175259.c)();
  switch (require) {
    case "win32":
      e = "Windows";
      break;
    case "darwin":
      e = "Mac OS X";
      break;
    case "linux":
      e = "Linux";
      break;
    default:
      e = require
  }
  if (r = {
      os: module,
      browser: "Discord Client",
      release_channel: Chunk362474 || "unknown",
      client_version: exports,
      os_version: i,
      os_arch: Chunk214958,
      app_arch: Chunk506774,
      system_locale: Chunk368849,
      has_client_mods: (0, Chunk70298.b)(),
      client_launch_id: Chunk71931.C
    }, (null == (a = o().name) ? true : a.toLocaleLowerCase()) === "electron" && (r.browser_user_agent = o().ua || "", r.browser_version = o().version || ""), "linux" === require) {
    let e = b.crashReporter.getMetadata();
    r.window_manager = module.wm, r.distro = module.distro, r.runtime_environment = module.runtime_environment, r.display_server = module.display_server
  } else "darwin" === require ? r.os_sdk_version = null == i ? true : i.split(".")[0] : "win32" === require && (r.os_sdk_version = null == i ? true : i.split(".")[2])
}

function O() {
  let {
    userAgent: e
  } = window.navigator;
  if (/Windows/i.test(e)) return /Phone/.test(e) ? "Windows Mobile" : "Windows";
  if (/(iPhone|iPad|iPod)/.test(e)) return "iOS";
  if (/Android/.test(e)) return "Android";
  if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
  if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "iOS" : "Mac OS X";
  else if (/Linux/i.test(e)) return "Linux";
  else return ""
}

function v(e, t) {
  if (null == e) return "";
  t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  let n = new RegExp("[\\?&]".concat(t, "=([^&#]*)")).exec(e);
  return null === n || "string" != typeof n[1] && n[1].length ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ")
}

function A() {
  let e = document.referrer;
  return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null
}

function I() {
  let e = {},
    t = document.referrer,
    n = A(),
    r = "yahoo" !== n ? "q" : "p";
  if (null != n) {
    e.search_engine = n;
    let i = v(t, r);
    i.length > 0 && (e.mp_keyword = i)
  }
  return e
}

function S() {
  let {
    userAgent: e,
    vendor: t = ""
  } = window.navigator, {
    opera: n
  } = window;
  if (n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
  if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
  if (/FBIOS/.test(e)) return "Facebook Mobile";
  if (/CriOS/.test(e)) return "Chrome iOS";
  if (/Apple/.test(t)) return /Mobile/.test(e) || null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "Mobile Safari" : "Safari";
  else if (/Android/.test(e)) return /Chrome/.test(e) ? "Android Chrome" : "Android Mobile";
  else if (/Edge/.test(e)) return "Edge";
  else if (/Chrome/.test(e)) return "Chrome";
  else if (/Konqueror/.test(e)) return "Konqueror";
  else if (/Firefox/.test(e)) return "Firefox";
  else if (/MSIE|Trident\//.test(e)) return "Internet Explorer";
  else if (/Gecko/.test(e)) return "Mozilla";
  else return ""
}

function T() {
  let {
    userAgent: e
  } = window.navigator;
  if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
  if (/Windows Phone/i.test(e)) return "Windows Phone";
  if (/Android/.test(e)) return "Android";
  if (/iPhone/.test(e)) return "iPhone";
  if (/iPad/.test(e)) return "iPad";
  else return ""
}

function C() {
  let e = document.referrer.split("/");
  return e.length >= 3 ? e[2] : ""
}

function N() {
  try {
    if (__OVERLAY__) return "OVERLAY"
  } catch (e) {}
  return null
}

function w() {
  let e = {};
  return e.os = O(), e.browser = S(), e.device = T(), e.system_locale = (0, c.c)(), e.has_client_mods = (0, l.b)(), e
}

function R() {
  var e, t;
  return g(h({}, {
    browser_user_agent: window.navigator.userAgent || "",
    browser_version: o().version || ""
  }), {
    os_version: null != (e = null === o() || true === o() || null == (t = o().os) ? true : t.version) ? e : ""
  })
}
let P = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");

function D(e) {
  let t = {};
  return P.forEach(n => {
    let r = v(e, n);
    r.length > 0 && (t[n] = r)
  }), t
}

function x() {
  let e = {};
  return e.referrer = document.referrer, e.referring_domain = C(), e = h({}, e, D(window.location.href), I())
}

function L(e, t) {
  let n = {};
  return Object.keys(e).map(r => n["".concat(r).concat(t)] = e[r]), n
}

function j() {
  let e = u.w.get(E);
  null == e && (e = w(), u.w.set(E, e));
  let t = u.w.get(y);
  null == t && (t = x(), u.w.set(y, t));
  let n = d.u.get(y);
  return null == n && (n = L(x(), "_current"), d.u.set(y, n)), h({}, e, R(), t, n)
}
if (null == r) try {
  r = j()
} catch (e) {
  r = {}
}

function M(e) {
  r = h({}, r, e), i = (0, p.q)(r)
}

function k() {
  return r
}

function U() {
  return i
}
M(function() {
  var e, t;
  let n = {},
    r = window.GLOBAL_ENV.RELEASE_CHANNEL;
  r && (null == n.release_channel || "" === n.release_channel) && (n.release_channel = r.split("-")[0]);
  let i = parseInt("488872", 10);
  isNaN(i) || (n.client_build_number = i);
  let a = null == b || null == (e = (t = b.remoteApp).getBuildNumber) ? true : e.call(t);
  return isNaN(a) || (n.native_build_number = a), n.client_event_source = N(), n.has_client_mods = (0, l.b)(), n.client_launch_id = f.C, n
}())