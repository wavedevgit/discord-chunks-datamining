/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  A5: () => L,
  Bg: () => p,
  D5: () => l,
  D_: () => c,
  EF: () => f,
  G$: () => u,
  HW: () => E,
  Hp: () => g,
  JO: () => T,
  Kw: () => A,
  MG: () => b,
  OT: () => o,
  Qr: () => O,
  Ut: () => y,
  WM: () => _,
  X9: () => s,
  XH: () => v,
  _U: () => D,
  dJ: () => a,
  f_: () => S,
  i$: () => P,
  jF: () => d,
  ji: () => R,
  jp: () => C,
  mg: () => m,
  nU: () => h,
  wD: () => I,
  xd: () => x,
  xx: () => w,
  yl: () => N
});
var r = n(710845),
  i = n(70956),
  o = function(e) {
    return e[e.SECONDS_30 = 30 * i.Z.Millis.SECOND] = "SECONDS_30", e[e.MINUTES_1 = i.Z.Millis.MINUTE] = "MINUTES_1", e[e.MINUTES_2 = 2 * i.Z.Millis.MINUTE] = "MINUTES_2", e
  }({}),
  a = function(e) {
    return e[e.ALL = 0] = "ALL", e[e.FRIENDS = 1] = "FRIENDS", e
  }({}),
  s = function(e) {
    return e.DECOUPLED = "decoupled", e.VIEWER = "viewer", e.STREAMER = "streamer", e
  }({}),
  l = function(e) {
    return e[e.Error = 0] = "Error", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled", e
  }({});
let c = "alt+c",
  u = 6 * i.Z.Millis.SECOND,
  d = new r.Z("Clips"),
  f = e => "Discord_Clip_".concat(e, ".mp4"),
  p = 3,
  _ = 1,
  h = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
  m = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
  g = .1,
  E = 25,
  v = 0,
  b = 200,
  y = "clips-edit",
  O = "clips-gallery",
  S = 640,
  I = 360,
  T = 100,
  N = e => "Clip - ".concat(new Date(e).toLocaleString()),
  A = 15,
  C = 3e4,
  R = 30,
  P = 10,
  w = 14 * i.Z.Millis.DAY,
  D = 5,
  x = 5,
  L = 1