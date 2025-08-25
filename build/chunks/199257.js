/** Chunk was on web.js **/
/** chunk id: 199257, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l,
  _: () => s
});
var Chunk399606 = require("./399606.js"),
  Chunk339085 = require("./339085.js"),
  Chunk185923 = require("./185923.js");
let a = [];

function s(e) {
  let {
    emojiStoreInstance: t = i.ZP,
    guildId: n,
    pickerIntention: r
  } = e;
  return {
    topEmojis: r !== o.Hz.REACTION ? t.getTopEmoji(n) : a,
    newlyAddedEmojis: r !== o.Hz.REACTION ? t.getNewlyAddedEmoji(n) : a
  }
}

function l(e, t) {
  return (0, r.cj)([i.ZP], () => s({
    emojiStoreInstance: i.ZP,
    guildId: e,
    pickerIntention: t
  }), [e, t])
}