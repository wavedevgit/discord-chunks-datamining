/** Chunk was on web.js **/
/** chunk id: 912893, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => a,
  U: () => i
});
var Chunk570140 = require("./570140.js");

function i(e, t, n, i) {
  r.Z.dispatch({
    type: "BURST_REACTION_PICKER_ANIMATION_ADD",
    messageId: e,
    emojiName: t,
    emojiId: n,
    startPosition: i
  })
}

function a(e, t, n) {
  r.Z.dispatch({
    type: "BURST_REACTION_PICKER_ANIMATION_CLEAR",
    messageId: e,
    emojiName: t,
    emojiId: n
  })
}