/** Chunk was on web.js **/
"use strict";
n.d(t, {
  CO: () => s,
  NU: () => v,
  X2: () => b,
  cb: () => E,
  d$: () => u,
  tw: () => l
}), n(47120), n(301563);
var r = n(358085);
let i = (e, t) => {
    if (null == e) return !1;
    let [n, r] = e.split(/\?/, 1);
    return t.test(n)
  },
  o = (e, t) => {
    if (null == e) return !1;
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
  p = ((0, r.isIOS)() || (0, r.isAndroid)(), /\.(mp4|mov)$/i),
  h = /\.(mp4|webm|mov)$/i,
  g = /\.(mp4|webm|mov)$/i,
  m = (0, r.isIOS)() ? p : (0, r.isAndroid)() ? h : g,
  E = e => i(e, m),
  v = e => null != e && m.test(e),
  b = e => o(e, "video")