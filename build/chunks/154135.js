/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  EY: () => a,
  Vh: () => o,
  Yh: () => i
});
var r = n(406432);
let i = 4;

function o(e) {
  var t, n;
  if (null == e) return;
  let {
    thumbnail: r,
    image: i
  } = e;
  return null != r ? null !== (t = r.proxy_url) && void 0 !== t ? t : r.url : null != i ? null !== (n = i.proxy_url) && void 0 !== n ? n : i.url : void 0
}

function a(e) {
  if (null == e) return;
  let {
    url: t,
    proxy_url: n
  } = e;
  return null != t && null != n ? (0, r.cb)(t) ? "".concat(n, "?format=webp") : n : t
}