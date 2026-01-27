/** Chunk was on web.js **/
/** chunk id: 324580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FZ: () => A,
  I9: () => E,
  Iq: () => d,
  J8: () => h,
  O3: () => b,
  OR: () => y,
  R0: () => m,
  Us: () => f,
  VX: () => g,
  WV: () => O,
  ig: () => c,
  o: () => _,
  tO: () => S,
  v: () => u,
  wz: () => v
}), require("./896048.js");
var Chunk927813 = require("./927813.js"),
  Chunk985018 = require("./985018.jsx");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = 0,
  u = 13,
  d = false,
  f = false,
  p = false;
var _ = function(e) {
    return e.FEATURED = "featured", e.GAMING = "gaming", e.MUSIC = "music", e.ENTERTAINMENT = "entertainment", e.TECH = "tech", e.EDUCATION = "education", e.HUBS = "hubs", e
  }({}),
  h = function(e) {
    return e.UNKNOWN = "unknown", e.GUILDS_BAR = "guilds_bar", e.RTC_PANEL = "rtc_panel", e.PROFILE = "profile", e.GAME_LINK = "game_link", e.EMBED = "embed", e
  }({});
let m = new Set(["hubs"]),
  g = [],
  E = "q",
  y = "c",
  b = "l",
  O = 10 * Chunk927813.A.Millis.MINUTE;
var v = function(e) {
  return e[e.Clans = p] = "Clans", e[e.Hub = f] = "Hub", e[e.Communities = d] = "Communities", e[e.Activity = 1] = "Activity", e[e.Music = 2] = "Music", e[e.Television = 3] = "Television", e[e.Science = 5] = "Science", e[e.Education = 6] = "Education", e
}({});
let A = [1, 2, 3, 5, 6],
  I = ["en-GB"];

function S() {
  return (0, i.getLanguages)().filter(e => !I.includes(e.code)).map(e => "en-US" === e.code ? l(o({}, e), {
    name: i.intl.string(i.t.LQLMGP)
  }) : e)
}