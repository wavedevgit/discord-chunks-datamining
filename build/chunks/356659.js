/** Chunk was on web.js **/
/** chunk id: 356659, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $O: () => u,
  Bg: () => _,
  D5: () => l,
  Fv: () => c,
  G$: () => d,
  Hp: () => g,
  JO: () => T,
  Kw: () => A,
  MG: () => b,
  OT: () => a,
  Qr: () => O,
  SU: () => P,
  Ut: () => y,
  WM: () => p,
  X9: () => s,
  XH: () => E,
  b0: () => w,
  dJ: () => o,
  f_: () => v,
  i$: () => R,
  jF: () => f,
  ji: () => N,
  jp: () => C,
  nU: () => h,
  qb: () => D,
  rI: () => m,
  wD: () => I,
  yl: () => S,
  zh: () => L
});
var Chunk710845 = require("./710845.js"),
  Chunk70956 = require("./70956.js"),
  a = function(e) {
    return e[e.SECONDS_30 = 30 * i.Z.Millis.SECOND] = "SECONDS_30", e[e.MINUTES_1 = i.Z.Millis.MINUTE] = "MINUTES_1", e[e.MINUTES_2 = 2 * i.Z.Millis.MINUTE] = "MINUTES_2", e
  }({}),
  o = function(e) {
    return e[e.ALL = 0] = "ALL", e[e.FRIENDS = 1] = "FRIENDS", e
  }({}),
  s = function(e) {
    return e.DECOUPLED = "decoupled", e.VIEWER = "viewer", e.STREAMER = "streamer", e.VOICE = "voice", e
  }({}),
  l = function(e) {
    return e[e.Error = 0] = "Error", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled", e
  }({});
let c = "alt+c",
  u = "f12",
  d = 6 * Chunk70956.Z.Millis.SECOND,
  f = new Chunk710845.Z("Clips"),
  _ = 4,
  p = 2,
  h = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
  m = /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/,
  g = .1,
  E = 0,
  b = 200,
  y = "clips-edit",
  O = "clips-gallery",
  v = 640,
  I = 360,
  T = 100,
  S = e => "Clip - ".concat(new Date(e).toLocaleString()),
  A = 15,
  C = 3e4,
  N = 30,
  R = 10;
Chunk70956.Z.Millis.DAY;
let P = 20,
  D = 1,
  w = 50;
var L = function(e) {
  return e.ALL = ":all", e.APPLICATION = ":application", e.VOICE = ":voice", e.SOUNDBOARD = ":soundboard", e
}({})