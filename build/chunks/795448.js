/** Chunk was on web.js **/
/** chunk id: 795448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ni: () => a,
  PV: () => o,
  Zm: () => s,
  d$: () => i
});
var Chunk570140 = require("./570140.js");

function i() {
  Chunk570140.Z.dispatch({
    type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN"
  })
}

function o(e) {
  r.Z.dispatch({
    type: "MESSAGE_GIFT_INTENT_SHOWN",
    recipientUserId: e
  })
}

function a(e) {
  r.Z.dispatch({
    type: "GIFT_INTENT_FLOW_PURCHASED_GIFT",
    recipientUserId: e
  })
}

function s() {
  Chunk570140.Z.dispatch({
    type: "GIFT_UNREAD_NOTIFICATION_DISMISS"
  })
}