/** Chunk was on web.js **/
/** chunk id: 356659, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $O: () => u,
  Bg: () => p,
  D5: () => l,
  Fv: () => c,
  G$: () => d,
  Hp: () => g,
  JO: () => I,
  Kw: () => C,
  MG: () => b,
  OT: () => a,
  Qr: () => O,
  SU: () => R,
  Ut: () => y,
  WM: () => _,
  X9: () => s,
  XH: () => E,
  b0: () => D,
  dJ: () => o,
  f_: () => v,
  i$: () => P,
  jF: () => f,
  ji: () => N,
  jp: () => A,
  nU: () => m,
  qb: () => w,
  rI: () => h,
  wD: () => S,
  yl: () => T,
  zh: () => x
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
  p = 4,
  _ = 2,
  m = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
  h = /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/,
  g = .1,
  E = 0,
  b = 200,
  y = "clips-edit",
  O = "clips-gallery",
  v = 640,
  S = 360,
  I = 100,
  T = e => "Clip - ".concat(new Date(e).toLocaleString()),
  C = 15,
  A = 3e4,
  N = 30,
  P = 10;
Chunk70956.Z.Millis.DAY;
let R = 20,
  w = 1,
  D = 50;
var x = function(e) {
  return e.ALL = ":all", e.APPLICATION = ":application", e.VOICE = ":voice", e.SOUNDBOARD = ":soundboard", e
}({})