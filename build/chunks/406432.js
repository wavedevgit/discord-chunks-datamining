/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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
  p = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i,
  _ = ((0, r.isIOS)() || (0, r.isAndroid)(), /\.(mp4|mov)$/i),
  h = /\.(mp4|webm|mov)$/i,
  m = /\.(mp4|webm|mov)$/i,
  g = (0, r.isIOS)() ? _ : (0, r.isAndroid)() ? h : m,
  E = e => i(e, g),
  v = e => null != e && g.test(e),
  b = e => o(e, "video")