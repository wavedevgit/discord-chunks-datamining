/** Chunk was on web.js **/
/** chunk id: 316884, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  b: () => s
});
var Chunk417597 = require("./417597.js"),
  Chunk508675 = require("./508675.js"),
  Chunk307731 = require("./307731.js");
let o = [];

function s(e) {
  let {
    emojiStoreInstance: t = i.Ay,
    guildId: n,
    pickerIntention: r
  } = e;
  return {
    topEmojis: r !== a.b_.REACTION ? t.getTopEmoji(n) : o,
    newlyAddedEmojis: r !== a.b_.REACTION ? t.getNewlyAddedEmoji(n) : o
  }
}

function l(e, t) {
  return (0, r.cf)([i.Ay], () => s({
    emojiStoreInstance: i.Ay,
    guildId: e,
    pickerIntention: t
  }), [e, t])
}