/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  G: () => o,
  U: () => i
});
var r = n(570140);

function i(e, t, n, i) {
  r.Z.dispatch({
    type: "BURST_REACTION_PICKER_ANIMATION_ADD",
    messageId: e,
    emojiName: t,
    emojiId: n,
    startPosition: i
  })
}

function o(e, t, n) {
  r.Z.dispatch({
    type: "BURST_REACTION_PICKER_ANIMATION_CLEAR",
    messageId: e,
    emojiName: t,
    emojiId: n
  })
}