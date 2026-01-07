/** Chunk was on web.js **/
/** chunk id: 795448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ni: () => o,
  PV: () => a,
  X9: () => l,
  Zm: () => s,
  d$: () => i
});
var Chunk570140 = require("./570140.js");

function i() {
  r.Z.dispatch({
    type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN"
  })
}

function a(e) {
  r.Z.dispatch({
    type: "MESSAGE_GIFT_INTENT_SHOWN",
    recipientUserId: e
  })
}

function o(e) {
  r.Z.dispatch({
    type: "GIFT_INTENT_FLOW_PURCHASED_GIFT",
    recipientUserId: e
  })
}

function s() {
  r.Z.dispatch({
    type: "GIFT_UNREAD_NOTIFICATION_DISMISS"
  })
}

function l(e) {
  r.Z.dispatch({
    type: "PROFILE_POPOUT_GIFT_INTENTS_DISMISS",
    recipientUserId: e
  })
}