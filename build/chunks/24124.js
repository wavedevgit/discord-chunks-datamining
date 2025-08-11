/** Chunk was on web.js **/
/** chunk id: 24124, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GG: () => a,
  R2: () => s,
  h7: () => i,
  rh: () => o
});
var Chunk570140 = require("./570140.js");

function i(e, t, n) {
  return new Promise(i => {
    setTimeout(() => {
      r.Z.dispatch({
        type: "ACTIVITY_INVITE_MODAL_OPEN",
        activity: e,
        isPrivate: t,
        context: n,
        resolve: i
      })
    }, 0)
  })
}

function o(e) {
  r.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_QUERY",
    query: e
  })
}

function a(e) {
  r.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    channelId: e
  })
}

function s(e) {
  r.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    userId: e
  })
}