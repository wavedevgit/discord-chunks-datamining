/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
}), n(301563);
var r = n(701488),
  i = n(981631);

function o(e) {
  return e.type === i.IIU.STREAMING && null != e.url && r.d.test(e.url)
}

function a(e) {
  return null != e && (Array.isArray(e) ? e.some(o) : o(e))
}