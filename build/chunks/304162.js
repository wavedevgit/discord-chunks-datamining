/** Chunk was on web.js **/
/** chunk id: 304162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A8: () => i,
  et: () => s,
  m3: () => a
});
var Chunk77350 = require("./77350.js");
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

function s(e) {
  if (null == e) return;
  let {
    url: t,
    proxy_url: n
  } = e;
  return null != t && null != n ? (0, r.r1)(t) ? "".concat(n, "?format=webp") : n : t
}