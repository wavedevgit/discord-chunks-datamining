/** Chunk was on web.js **/
/** chunk id: 316884, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  b: () => o
});
var Chunk417597 = require("./417597.js"),
  Chunk508675 = require("./508675.js"),
  Chunk307731 = require("./307731.js");
let s = [];

function o(e) {
  let {
    emojiStoreInstance: t = i.Ay,
    guildId: n,
    pickerIntention: r
  } = e;
  return {
    topEmojis: r !== a.b_.REACTION ? t.getTopEmoji(n) : s,
    newlyAddedEmojis: r !== a.b_.REACTION ? t.getNewlyAddedEmoji(n) : s
  }
}

function l(e, t) {
  return (0, r.cf)([i.Ay], () => o({
    emojiStoreInstance: i.Ay,
    guildId: e,
    pickerIntention: t
  }), [e, t])
}