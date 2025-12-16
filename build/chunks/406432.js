/** Chunk was on web.js **/
/** chunk id: 406432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CO: () => u,
  NU: () => N,
  TN: () => E,
  X2: () => R,
  cb: () => C,
  d$: () => p,
  hU: () => c,
  tw: () => d,
  yn: () => P
}), require("./388685.js"), require("./35282.js");
var Chunk358085 = require("./358085.js"),
  Chunk259493 = require("./259493.js"),
  Chunk804059 = require("./804059.js");
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
  c = e => o(e, l),
  u = e => null != e && l.test(e),
  d = e => s(e, "image"),
  f = /\.(webp|gif|avif)$/i,
  p = e => o(e, f),
  _ = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  m = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
  h = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  g = (0, Chunk358085.isIOS)() ? _ : (0, Chunk358085.isAndroid)() ? m : h,
  E = e => null != e && g.test(e),
  b = /\.(webm)$/i,
  y = /\.(mp4|mov)$/i,
  O = /\.(mp4|webm|mov)$/i,
  v = /\.(mp4|webm|mov)$/i,
  S = /\.(riv)$/i,
  I = (0, Chunk358085.isIOS)() ? y : (0, Chunk358085.isAndroid)() ? O : v,
  T = e => (0, a.W)() && i.Z.getConfig({
    location: "isWebPlayerVideoUrl"
  }).enabled && o(e, b),
  C = e => o(e, I) || T(e),
  A = e => null != e && (0, a.W)() && i.Z.getConfig({
    location: "isWebPlayerVideoFile"
  }).enabled && b.test(e),
  N = e => null != e && (I.test(e) || A(e)),
  P = e => null != e && S.test(e),
  R = e => s(e, "video")