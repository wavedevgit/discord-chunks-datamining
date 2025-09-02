/** Chunk was on web.js **/
/** chunk id: 356659, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bg: () => _,
  D5: () => l,
  D_: () => c,
  EF: () => f,
  G$: () => u,
  HW: () => E,
  Hp: () => g,
  JO: () => T,
  Kw: () => C,
  MG: () => y,
  OT: () => a,
  Qr: () => v,
  Ut: () => O,
  WM: () => p,
  X9: () => s,
  XH: () => b,
  dJ: () => o,
  f_: () => I,
  i$: () => P,
  jF: () => d,
  ji: () => R,
  jp: () => N,
  mg: () => m,
  nU: () => h,
  wD: () => S,
  yl: () => A
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
    return e.DECOUPLED = "decoupled", e.VIEWER = "viewer", e.STREAMER = "streamer", e
  }({}),
  l = function(e) {
    return e[e.Error = 0] = "Error", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled", e
  }({});
let c = "alt+c",
  u = 6 * Chunk70956.Z.Millis.SECOND,
  d = new Chunk710845.Z("Clips"),
  f = e => "Discord_Clip_".concat(e, ".mp4"),
  _ = 3,
  p = 2,
  h = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
  m = /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/,
  g = .1,
  E = 25,
  b = 0,
  y = 200,
  O = "clips-edit",
  v = "clips-gallery",
  I = 640,
  S = 360,
  T = 100,
  A = e => "Clip - ".concat(new Date(e).toLocaleString()),
  C = 15,
  N = 3e4,
  R = 30,
  P = 10;
Chunk70956.Z.Millis.DAY