/** Chunk was on web.js **/
/** chunk id: 77350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AE: () => S,
  XA: () => T,
  XB: () => C,
  ge: () => f,
  r1: () => A,
  tT: () => u,
  u: () => c
}), require("./896048.js"), require("./747238.js");
var Chunk723702 = require("./723702.js"),
  Chunk389512 = require("./389512.js"),
  Chunk334278 = require("./334278.js");
let o = (e, t) => {
    if (null == e) returnfalse;
    let [n, r] = e.split(/\?/, 1);
    return t.test(n)
  },
  s = (e, t) => {
    if (null == e) returnfalse;
    let [n, r] = e.split("/");
    return n === t
  },
  l = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i,
  c = e => null != e && l.test(e),
  u = e => s(e, "image"),
  d = /\.(webp|gif|avif)$/i,
  f = e => o(e, d),
  p = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  _ = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
  h = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  m = ((0, Chunk723702.isIOS)() || (0, Chunk723702.isAndroid)(), /\.(webm)$/i),
  g = /\.(mp4|mov|qt)$/i,
  E = /\.(mp4|webm|mov|qt)$/i,
  y = /\.(mp4|webm|mov|qt)$/i,
  b = /\.(riv)$/i,
  O = (0, Chunk723702.isIOS)() ? g : (0, Chunk723702.isAndroid)() ? E : y,
  v = e => (0, a.D)() && i.A.getConfig({
    location: "isWebPlayerVideoUrl"
  }).enabled && o(e, m),
  A = e => o(e, O) || v(e),
  I = e => null != e && (0, a.D)() && i.A.getConfig({
    location: "isWebPlayerVideoFile"
  }).enabled && m.test(e),
  S = e => null != e && (O.test(e) || I(e)),
  T = e => null != e && b.test(e),
  C = e => s(e, "video")