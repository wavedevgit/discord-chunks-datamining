/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  JG: () => s,
  wS: () => a
}), n(411104);
var r = n(852229),
  i = n(358085),
  o = n(998502);
let a = (() => {
  if (i.isPlatformEmbedded) return null != o.ZP.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function s(e) {
  return !!a && (i.isPlatformEmbedded ? (o.ZP.copy(e), !0) : r.J(e))
}