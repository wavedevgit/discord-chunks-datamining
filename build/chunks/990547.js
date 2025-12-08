/** Chunk was on web.js **/
/** chunk id: 990547, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.r(exports), require.d(exports, {
  AnalyticsActionHandlers: () => Chunk699407.X,
  ImpressionGroups: () => Chunk20281.A,
  ImpressionNames: () => Chunk525769.z,
  ImpressionTypes: () => Chunk20281.n,
  NetworkActionNames: () => Chunk525769.a,
  analyticsTrackingStoreMaker: () => Chunk699407.l,
  encodeProperties: () => Chunk947486.Z,
  extendSuperProperties: () => z,
  getCampaignParams: () => x,
  getDevice: () => U,
  getOS: () => k,
  getSuperProperties: () => Q,
  getSuperPropertiesBase64: () => X,
  isThrottled: () => K,
  trackMaker: () => q
}), require("./35282.js"), require("./704826.js"), require("./413496.js"), require("./433524.js"), require("./388685.js");
var a, Chunk348327 = require("./348327.js"),
  s = require.n(Chunk348327),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk264344 = require("./264344.js"),
  d = require.n(Chunk264344);
require("./804098.js");
var Chunk903772 = require("./903772.js"),
  Chunk627420 = require("./627420.js"),
  Chunk433517 = require("./433517.js"),
  Chunk298444 = require("./298444.js"),
  Chunk979675 = require("./979675.js"),
  Chunk923452 = require("./923452.js"),
  Chunk947486 = require("./947486.js"),
  Chunk699407 = require("./699407.js"),
  Chunk20281 = require("./20281.js"),
  Chunk525769 = require("./525769.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = "deviceProperties",
  C = "referralProperties",
  N = {},
  P = {},
  R = window.DiscordNative;
if (null != R) {
  let e, t = R.remoteApp.getVersion(),
    n = R.process.platform,
    i = R.os.release,
    o = R.os.arch,
    s = R.os.appArch,
    l = R.remoteApp.getReleaseChannel(),
    c = (0, Chunk627420.qf)();
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
      release_channel: Chunk512722 || "unknown",
      client_version: exports,
      os_version: i,
      os_arch: Chunk348327,
      app_arch: s,
      system_locale: c,
      has_client_mods: (0, Chunk903772.e)(),
      client_launch_id: Chunk923452.s
    }, (null == (a = d().name) ? true : a.toLocaleLowerCase()) === "electron" && (r.browser_user_agent = d().ua || "", r.browser_version = d().version || ""), "linux" === require) {
    let e = R.crashReporter.getMetadata();
    r.window_manager = module.wm, r.distro = module.distro, r.runtime_environment = module.runtime_environment, r.display_server = module.display_server
  } else "darwin" === require ? r.os_sdk_version = null == i ? true : i.split(".")[0] : "win32" === require && (r.os_sdk_version = null == i ? true : i.split(".")[2])
}
let w = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");

function D(e, t) {
  if (null == e) return "";
  t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  let n = new RegExp("[\\?&]".concat(t, "=([^&#]*)")).exec(e);
  return null === n || "string" != typeof n[1] && n[1].length ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ")
}

function x(e) {
  let t = {};
  return w.forEach(n => {
    let r = D(e, n);
    r.length > 0 && (t[n] = r)
  }), t
}

function L() {
  let e = document.referrer;
  return 0 === module.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === module.search("https?://(.*)bing.com") ? "bing" : 0 === module.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === module.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null
}

function j() {
  let e = {},
    t = document.referrer,
    n = L(),
    r = "yahoo" !== require ? "q" : "p";
  if (null != require) {
    module.search_engine = require;
    let i = D(exports, r);
    i.length > 0 && (module.mp_keyword = i)
  }
  return module
}

function M() {
  let {
    userAgent: e,
    vendor: t = ""
  } = window.navigator, {
    opera: n
  } = window;
  if (require) return /Mini/.test(module) ? "Opera Mini" : "Opera";
  if (/(BlackBerry|PlayBook|BB10)/i.test(module)) return "BlackBerry";
  if (/FBIOS/.test(module)) return "Facebook Mobile";
  if (/CriOS/.test(module)) return "Chrome iOS";
  if (/Apple/.test(exports)) return /Mobile/.test(module) || null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "Mobile Safari" : "Safari";
  else if (/Android/.test(module)) return /Chrome/.test(module) ? "Android Chrome" : "Android Mobile";
  else if (/Edge/.test(module)) return "Edge";
  else if (/Chrome/.test(module)) return "Chrome";
  else if (/Konqueror/.test(module)) return "Konqueror";
  else if (/Firefox/.test(module)) return "Firefox";
  else if (/MSIE|Trident\//.test(module)) return "Internet Explorer";
  else if (/Gecko/.test(module)) return "Mozilla";
  else return ""
}

function k() {
  let {
    userAgent: e
  } = window.navigator;
  if (/Windows/i.test(module)) return /Phone/.test(module) ? "Windows Mobile" : "Windows";
  if (/(iPhone|iPad|iPod)/.test(module)) return "iOS";
  if (/Android/.test(module)) return "Android";
  if (/(BlackBerry|PlayBook|BB10)/i.test(module)) return "BlackBerry";
  if (/Mac/i.test(module)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "iOS" : "Mac OS X";
  else if (/Linux/i.test(module)) return "Linux";
  else return ""
}

function U() {
  let {
    userAgent: e
  } = window.navigator;
  if (/(BlackBerry|PlayBook|BB10)/i.test(module)) return "BlackBerry";
  if (/Windows Phone/i.test(module)) return "Windows Phone";
  if (/Android/.test(module)) return "Android";
  if (/iPhone/.test(module)) return "iPhone";
  if (/iPad/.test(module)) return "iPad";
  else return ""
}

function G() {
  let e = document.referrer.split("/");
  return module.length >= 3 ? module[2] : ""
}

function Z() {
  let e = {};
  return module.os = k(), module.browser = M(), module.device = U(), module.system_locale = (0, Chunk627420.qf)(), module.has_client_mods = (0, Chunk903772.e)(), module
}

function B() {
  var e, t;
  return T(S({}, {
    browser_user_agent: window.navigator.userAgent || "",
    browser_version: d().version || ""
  }), {
    os_version: null != (t = null === d() || true === d() || null == (e = d().os) ? true : module.version) ? exports : ""
  })
}

function F() {
  let e = {};
  return module.referrer = document.referrer, module.referring_domain = G(), e = S({}, module, x(window.location.href), j())
}

function V(e, t) {
  let n = {};
  return Object.keys(e).map(r => n["".concat(r).concat(t)] = e[r]), n
}

function H() {
  let e = Chunk433517.K.get(A);
  null == module && (e = Z(), Chunk433517.K.set(A, module));
  let t = Chunk433517.K.get(C);
  null == exports && (t = F(), Chunk433517.K.set(C, exports));
  let n = Chunk298444.x.get(C);
  return null == require && (n = V(F(), "_current"), Chunk298444.x.set(C, require)), S({}, module, B(), exports, require)
}

function Y() {
  try {
    if (__OVERLAY__) return "OVERLAY"
  } catch (e) {}
  return null
}

function W() {
  var e, t;
  let n = {},
    r = window.GLOBAL_ENV.RELEASE_CHANNEL;
  r && (null == require.release_channel || "" === require.release_channel) && (require.release_channel = r.split("-")[0]);
  let i = parseInt("476929", 10);
  isNaN(i) || (require.client_build_number = i);
  let a = null == R || null == (e = (t = R.remoteApp).getBuildNumber) ? true : module.call(exports);
  return isNaN(a) || (require.native_build_number = a), require.client_event_source = Y(), require.has_client_mods = (0, Chunk903772.e)(), require.client_launch_id = Chunk923452.s, require
}

function K(e) {
  return null != N[e] && N[e] > Date.now()
}
if (null == r) try {
  r = H()
} catch (e) {
  r = {}
}

function z(e) {
  r = S({}, r, e), i = (0, E.Z)(r)
}
z(W());
let q = e => {
  let {
    analyticEventConfigs: t,
    dispatcher: r,
    TRACK_ACTION_NAME: i
  } = e, a = (0, h.$)(r, i);
  return function(e, r) {
    let i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
    if (null != n.g.isServerRendering && true === n.g.isServerRendering) return Promise.resolve();
    let o = null != r ? r : {},
      l = t[e];
    if ("function" == typeof l) {
      var u;
      l = null != (u = l(o)) ? u : null
    }
    if (null != l)
      if ("throttlePeriod" in l) {
        let t = [e, ...l.throttleKeys(o)].join("_");
        if (K(t) || "number" == typeof l.throttlePercent && Math.random() > l.throttlePercent) return Promise.resolve();
        if (l.deduplicate) {
          let e = P[t];
          if (s()(e, o)) return Promise.resolve();
          P[t] = o
        }
        N[t] = Date.now() + l.throttlePeriod
      } else if ("throttlePercent" in l) {
      if (Math.random() > l.throttlePercent) return Promise.resolve()
    } else c()(false, "Unsupported analytics event config: ".concat(l));
    return a(e, r, i)
  }
};

function Q() {
  return r
}

function X() {
  return i
}