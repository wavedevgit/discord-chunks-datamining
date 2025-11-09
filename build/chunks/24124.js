/** Chunk was on 94709 **/
/** chunk id: 24124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GG: () => o,
  R2: () => a,
  h7: () => i,
  rh: () => l
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

function l(e) {
  r.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_QUERY",
    query: e
  })
}

function o(e) {
  r.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    channelId: e
  })
}

function a(e) {
  r.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    userId: e
  })
}