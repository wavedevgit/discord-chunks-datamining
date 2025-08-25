/** Chunk was on web.js **/
/** chunk id: 562831, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => o
});
var Chunk320582 = require("./320582.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  let {
    userId: t
  } = e, n = (0, r.ML)(t);
  return {
    gameFriends: n,
    hasOutgoingPendingGameFriends: (0, r.N8)(t, i.OGo.PENDING_OUTGOING),
    hasIncomingPendingGameFriends: (0, r.N8)(t, i.OGo.PENDING_INCOMING)
  }
}