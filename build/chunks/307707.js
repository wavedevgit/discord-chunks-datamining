/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(399606),
  i = n(339085),
  o = n(633302);

function a(e, t) {
  return {
    customEmoji: (0, r.e7)([i.ZP], () => null != e ? i.ZP.getCustomEmojiById(e) : null, [e]),
    unicodeEmoji: null != t ? o.ZP.getByName(o.ZP.convertSurrogateToName(t, !1)) : null
  }
}