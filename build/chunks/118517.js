/** Chunk was on web.js **/
/** chunk id: 118517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jx: () => o,
  Yf: () => i,
  vz: () => a
});
var Chunk73153 = require("./73153.js");

function i(e) {
  let {
    message: t,
    channel: n,
    shouldMention: i,
    showMentionToggle: a,
    source: o
  } = e;
  r.h.dispatch({
    type: "CREATE_PENDING_REPLY",
    message: t,
    channel: n,
    shouldMention: i,
    showMentionToggle: a,
    source: o
  })
}

function a(e, t) {
  r.h.dispatch({
    type: "SET_PENDING_REPLY_SHOULD_MENTION",
    channelId: e,
    shouldMention: t
  })
}

function o(e) {
  r.h.dispatch({
    type: "DELETE_PENDING_REPLY",
    channelId: e
  })
}