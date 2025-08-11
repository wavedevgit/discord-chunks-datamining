/** Chunk was on web.js **/
/** chunk id: 623292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A6: () => a,
  fE: () => i,
  qx: () => o
});
var Chunk570140 = require("./570140.js");

function i(e) {
  let {
    message: t,
    channel: n,
    shouldMention: i,
    showMentionToggle: o,
    source: a
  } = e;
  r.Z.dispatch({
    type: "CREATE_PENDING_REPLY",
    message: t,
    channel: n,
    shouldMention: i,
    showMentionToggle: o,
    source: a
  })
}

function o(e, t) {
  r.Z.dispatch({
    type: "SET_PENDING_REPLY_SHOULD_MENTION",
    channelId: e,
    shouldMention: t
  })
}

function a(e) {
  r.Z.dispatch({
    type: "DELETE_PENDING_REPLY",
    channelId: e
  })
}