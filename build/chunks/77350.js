/** Chunk was on web.js **/
/** chunk id: 77350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AE: () => N,
  L8: () => E,
  XA: () => w,
  XB: () => R,
  Zj: () => c,
  ge: () => p,
  r1: () => T,
  tT: () => d,
  u: () => u
}), require("./896048.js"), require("./747238.js");
var Chunk723702 = require("./723702.js"),
  Chunk389512 = require("./389512.js"),
  Chunk334278 = require("./334278.js");
let s = (e, t) => {
    if (null == e) returnfalse;
    let [n, r] = e.split(/\?/, 1);
    return t.test(n)
  },
  o = (e, t) => {
    if (null == e) returnfalse;
    let [n, r] = e.split("/");
    return n === t
  },
  l = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i,
  c = e => s(e, l),
  u = e => null != e && l.test(e),
  d = e => o(e, "image"),
  f = /\.(webp|gif|avif)$/i,
  p = e => s(e, f),
  _ = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  h = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
  m = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  g = (0, Chunk723702.isIOS)() ? _ : (0, Chunk723702.isAndroid)() ? h : m,
  E = e => null != e && g.test(e),
  y = /\.(webm)$/i,
  b = /\.(mp4|mov|qt)$/i,
  O = /\.(mp4|webm|mov|qt)$/i,
  v = /\.(mp4|webm|mov|qt)$/i,
  A = /\.(riv)$/i,
  I = (0, Chunk723702.isIOS)() ? b : (0, Chunk723702.isAndroid)() ? O : v,
  S = e => (0, a.D)() && i.A.getConfig({
    location: "isWebPlayerVideoUrl"
  }).enabled && s(e, y),
  T = e => s(e, I) || S(e),
  C = e => null != e && (0, a.D)() && i.A.getConfig({
    location: "isWebPlayerVideoFile"
  }).enabled && y.test(e),
  N = e => null != e && (I.test(e) || C(e)),
  w = e => null != e && A.test(e),
  R = e => o(e, "video")