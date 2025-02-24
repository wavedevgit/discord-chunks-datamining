/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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