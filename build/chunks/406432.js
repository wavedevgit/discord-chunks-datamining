/** Chunk was on web.js **/
/** chunk id: 406432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CO: () => c,
  NU: () => S,
  X2: () => T,
  cb: () => v,
  d$: () => f,
  tw: () => u
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
  l = /\.(png|jpe?g|webp|gif|heic|heif|dng|avif)$/i,
  c = e => null != e && l.test(e),
  u = e => s(e, "image"),
  d = /\.(webp|gif|avif)$/i,
  f = e => o(e, d),
  _ = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  p = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
  h = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  m = ((0, Chunk358085.isIOS)() || (0, Chunk358085.isAndroid)(), /\.(webm)$/i),
  g = /\.(mp4|mov)$/i,
  E = /\.(mp4|webm|mov)$/i,
  b = /\.(mp4|webm|mov)$/i,
  y = (0, Chunk358085.isIOS)() ? g : (0, Chunk358085.isAndroid)() ? E : b,
  O = e => (0, a.W)() && i.Z.getConfig({
    location: "isWebPlayerVideoUrl"
  }).enabled && o(e, m),
  v = e => o(e, y) || O(e),
  I = e => null != e && (0, a.W)() && i.Z.getConfig({
    location: "isWebPlayerVideoFile"
  }).enabled && m.test(e),
  S = e => null != e && (y.test(e) || I(e)),
  T = e => s(e, "video")