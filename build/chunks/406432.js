/** Chunk was on web.js **/
/** chunk id: 406432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CO: () => s,
  NU: () => b,
  X2: () => y,
  cb: () => E,
  d$: () => u,
  tw: () => l
}), require("./388685.js"), require("./35282.js");
var Chunk358085 = require("./358085.js");
let i = (e, t) => {
    if (null == e) returnfalse;
    let [n, r] = e.split(/\?/, 1);
    return t.test(n)
  },
  o = (e, t) => {
    if (null == e) returnfalse;
    let [n, r] = e.split("/");
    return n === t
  },
  a = /\.(png|jpe?g|webp|gif|heic|heif|dng|avif)$/i,
  s = e => null != e && a.test(e),
  l = e => o(e, "image"),
  c = /\.(webp|gif|avif)$/i,
  u = e => i(e, c),
  d = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  f = /\.(mp3|m4a|wav|ogg|opus|flac)$/i,
  _ = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  p = ((0, Chunk358085.isIOS)() || (0, Chunk358085.isAndroid)(), /\.(mp4|mov)$/i),
  h = /\.(mp4|webm|mov)$/i,
  m = /\.(mp4|webm|mov)$/i,
  g = (0, Chunk358085.isIOS)() ? p : (0, Chunk358085.isAndroid)() ? h : m,
  E = e => i(e, g),
  b = e => null != e && g.test(e),
  y = e => o(e, "video")