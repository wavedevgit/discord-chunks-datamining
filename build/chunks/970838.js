/** Chunk was on web.js **/
/** chunk id: 970838, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bw: () => a,
  px: () => s,
  rY: () => o
});
let r = {},
  i = null;

function o(e) {
  var t;
  let n = null != (t = r[e]) ? t : 0;
  0 === n && (null == i || i(e, true)), r[e] = n + 1
}

function a(e) {
  r[e]--, 0 === r[e] && (null == i || i(e, false))
}

function s(e) {
  i = null != e ? e : null
}