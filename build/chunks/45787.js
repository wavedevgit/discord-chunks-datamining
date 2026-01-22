/** Chunk was on web.js **/
/** chunk id: 45787, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ad: () => i,
  BT: () => o,
  CK: () => l,
  Yd: () => s,
  xs: () => a
});
var Chunk73153 = require("./73153.js");

function i() {
  r.h.dispatch({
    type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN"
  })
}

function a(e) {
  r.h.dispatch({
    type: "MESSAGE_GIFT_INTENT_SHOWN",
    recipientUserId: e
  })
}

function s(e) {
  r.h.dispatch({
    type: "GIFT_INTENT_FLOW_PURCHASED_GIFT",
    recipientUserId: e
  })
}

function o() {
  r.h.dispatch({
    type: "GIFT_UNREAD_NOTIFICATION_DISMISS"
  })
}

function l(e) {
  r.h.dispatch({
    type: "PROFILE_POPOUT_GIFT_INTENTS_DISMISS",
    recipientUserId: e
  })
}