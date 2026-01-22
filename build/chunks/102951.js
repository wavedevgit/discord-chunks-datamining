/** Chunk was on web.js **/
/** chunk id: 102951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => a
});
var Chunk922590 = require("./922590.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  let {
    userId: t
  } = e, n = (0, r.f1)(t);
  return {
    gameFriends: n,
    hasOutgoingPendingGameFriends: (0, r.KL)(t, i.eA$.PENDING_OUTGOING),
    hasIncomingPendingGameFriends: (0, r.KL)(t, i.eA$.PENDING_INCOMING)
  }
}