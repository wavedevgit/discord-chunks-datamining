/** Chunk was on web.js **/
/** chunk id: 147421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => i,
  p: () => a
});
var Chunk73153 = require("./73153.js");

function i(e, t, n, i) {
  r.h.dispatch({
    type: "BURST_REACTION_PICKER_ANIMATION_ADD",
    messageId: e,
    emojiName: t,
    emojiId: n,
    startPosition: i
  })
}

function a(e, t, n) {
  r.h.dispatch({
    type: "BURST_REACTION_PICKER_ANIMATION_CLEAR",
    messageId: e,
    emojiName: t,
    emojiId: n
  })
}