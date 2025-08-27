/** Chunk was on web.js **/
/** chunk id: 154135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EY: () => o,
  Vh: () => a,
  Yh: () => i
});
var Chunk406432 = require("./406432.js");
let i = 4;

function a(e) {
  var t, n;
  if (null == e) return;
  let {
    thumbnail: r,
    image: i
  } = e;
  return null != r ? null != (t = r.proxy_url) ? t : r.url : null != i ? null != (n = i.proxy_url) ? n : i.url : true
}

function o(e) {
  if (null == e) return;
  let {
    url: t,
    proxy_url: n
  } = e;
  return null != t && null != n ? (0, r.cb)(t) ? "".concat(n, "?format=webp") : n : t
}