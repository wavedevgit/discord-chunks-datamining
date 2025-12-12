/** Chunk was on web.js **/
/** chunk id: 623292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A6: () => o,
  fE: () => i,
  qx: () => a
});
var Chunk570140 = require("./570140.js");

function i(e) {
  let {
    message: t,
    channel: n,
    shouldMention: i,
    showMentionToggle: a,
    source: o
  } = e;
  r.Z.dispatch({
    type: "CREATE_PENDING_REPLY",
    message: t,
    channel: n,
    shouldMention: i,
    showMentionToggle: a,
    source: o
  })
}

function a(e, t) {
  r.Z.dispatch({
    type: "SET_PENDING_REPLY_SHOULD_MENTION",
    channelId: e,
    shouldMention: t
  })
}

function o(e) {
  r.Z.dispatch({
    type: "DELETE_PENDING_REPLY",
    channelId: e
  })
}