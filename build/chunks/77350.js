/** Chunk was on web.js **/
/** chunk id: 77350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AE: () => N,
  L8: () => E,
  XA: () => R,
  XB: () => w,
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
  b = /\.(webm)$/i,
  y = /\.(mp4|mov|qt)$/i,
  O = /\.(mp4|webm|mov|qt)$/i,
  A = /\.(mp4|webm|mov|qt)$/i,
  v = /\.(riv)$/i,
  S = (0, Chunk723702.isIOS)() ? y : (0, Chunk723702.isAndroid)() ? O : A,
  I = e => (0, a.D)() && i.A.getConfig({
    location: "isWebPlayerVideoUrl"
  }).enabled && s(e, b),
  T = e => s(e, S) || I(e),
  C = e => null != e && (0, a.D)() && i.A.getConfig({
    location: "isWebPlayerVideoFile"
  }).enabled && b.test(e),
  N = e => null != e && (S.test(e) || C(e)),
  R = e => null != e && v.test(e),
  w = e => o(e, "video")