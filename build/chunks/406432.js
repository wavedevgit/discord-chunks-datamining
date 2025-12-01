/** Chunk was on web.js **/
/** chunk id: 406432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CO: () => c,
  NU: () => T,
  X2: () => C,
  cb: () => S,
  d$: () => f,
  tw: () => u,
  yn: () => A
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
  c = e => null != e && l.test(e),
  u = e => s(e, "image"),
  d = /\.(webp|gif|avif)$/i,
  f = e => o(e, d),
  p = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  _ = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
  m = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  h = ((0, Chunk358085.isIOS)() || (0, Chunk358085.isAndroid)(), /\.(webm)$/i),
  g = /\.(mp4|mov)$/i,
  E = /\.(mp4|webm|mov)$/i,
  b = /\.(mp4|webm|mov)$/i,
  y = /\.(riv)$/i,
  O = (0, Chunk358085.isIOS)() ? g : (0, Chunk358085.isAndroid)() ? E : b,
  v = e => (0, a.W)() && i.Z.getConfig({
    location: "isWebPlayerVideoUrl"
  }).enabled && o(e, h),
  S = e => o(e, O) || v(e),
  I = e => null != e && (0, a.W)() && i.Z.getConfig({
    location: "isWebPlayerVideoFile"
  }).enabled && h.test(e),
  T = e => null != e && (O.test(e) || I(e)),
  A = e => null != e && y.test(e),
  C = e => s(e, "video")