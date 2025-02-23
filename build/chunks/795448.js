/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Gk: () => s,
  Ni: () => a,
  PV: () => o,
  d$: () => i
});
var r = n(570140);

function i() {
  r.Z.dispatch({
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
  r.Z.dispatch({
    type: "FRIENDS_TAB_BADGE_DISMISS"
  })
}