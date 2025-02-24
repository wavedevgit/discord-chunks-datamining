/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Bw: () => a,
  px: () => s,
  rY: () => o
});
let r = {},
  i = null;

function o(e) {
  var t;
  let n = null !== (t = r[e]) && void 0 !== t ? t : 0;
  0 === n && (null == i || i(e, !0)), r[e] = n + 1
}

function a(e) {
  r[e]--, 0 === r[e] && (null == i || i(e, !1))
}

function s(e) {
  i = null != e ? e : null
}