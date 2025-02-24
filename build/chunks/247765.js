/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";

function r(e) {
  let {
    isInline: t,
    isVoid: n
  } = e;
  return e.isInline = e => "testInline" === e.type || "testInlineVoid" === e.type || t(e), e.isVoid = e => "testInlineVoid" === e.type || n(e), e
}
n.d(t, {
  Z: () => r
})