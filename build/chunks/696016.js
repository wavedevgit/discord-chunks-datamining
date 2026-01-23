/** Chunk was on web.js **/
/** chunk id: 696016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DQ: () => b,
  Fv: () => o,
  GU: () => I,
  LX: () => a,
  Ot: () => c,
  P4: () => l,
  T2: () => w,
  U_: () => E,
  V0: () => _,
  VP: () => T,
  Vi: () => d,
  YM: () => N,
  cM: () => S,
  dV: () => C,
  gC: () => x,
  iJ: () => R,
  kd: () => p,
  l_: () => h,
  mk: () => y,
  nm: () => O,
  nx: () => f,
  on: () => s,
  qh: () => D,
  s3: () => A,
  sc: () => m,
  sz: () => u,
  vZ: () => v,
  wN: () => P,
  zj: () => g
});
var Chunk626584 = require("./626584.js"),
  Chunk927813 = require("./927813.js"),
  a = function(e) {
    return e[e.SECONDS_30 = 30 * i.A.Millis.SECOND] = "SECONDS_30", e[e.MINUTES_1 = i.A.Millis.MINUTE] = "MINUTES_1", e[e.MINUTES_2 = 2 * i.A.Millis.MINUTE] = "MINUTES_2", e
  }({}),
  s = function(e) {
    return e[e.ALL = 0] = "ALL", e[e.FRIENDS = 1] = "FRIENDS", e
  }({}),
  o = function(e) {
    return e.DECOUPLED = "decoupled", e.VIEWER = "viewer", e.STREAMER = "streamer", e.VOICE = "voice", e
  }({}),
  l = function(e) {
    return e[e.Error = 0] = "Error", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled", e
  }({});
let c = "alt+c",
  u = "f12",
  d = 6 * Chunk927813.A.Millis.SECOND,
  f = new Chunk626584.A("Clips"),
  p = 4,
  _ = 2,
  h = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
  m = /(NVIDIA GeForce (RTX (20|30|40|50).*))|(.*Radeon RX (57|58|59|6|7|9).*)/,
  g = .1,
  E = 0,
  y = 200,
  b = "clips-edit",
  O = "clips-gallery",
  v = 640,
  A = 360,
  I = 100,
  S = e => "Clip - ".concat(new Date(e).toLocaleString()),
  T = 15,
  C = 3e4,
  N = 30,
  R = 10;
Chunk927813.A.Millis.DAY;
let w = 20,
  P = 1,
  D = 50;
var x = function(e) {
  return e.ALL = ":all", e.APPLICATION = ":application", e.VOICE = ":voice", e.SOUNDBOARD = ":soundboard", e
}({})