/** Chunk was on 93626 **/
/** chunk id: 903749, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js");

function o(e) {
  let {
    emojiId: t,
    emojiName: l
  } = e, n = (0, r.e7)([s.ZP], () => null != t ? s.ZP.getCustomEmojiById(t) : null);
  if (null != n || null != l)
    if (null == t) return i()(null != l, "emojiName must be defined if emojiId is not defined"), a.ZP.convertSurrogateToName(l, false);
    else return null == n ? true : n.name
}