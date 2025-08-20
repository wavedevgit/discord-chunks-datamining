/** Chunk was on 37832 **/
/** chunk id: 24124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GG: () => a,
  R2: () => o,
  h7: () => l,
  rh: () => i
});
var Chunk570140 = require("./570140.js");

function l(e, t, n) {
  return new Promise(l => {
    setTimeout(() => {
      r.Z.dispatch({
        type: "ACTIVITY_INVITE_MODAL_OPEN",
        activity: e,
        isPrivate: t,
        context: n,
        resolve: l
      })
    }, 0)
  })
}

function i(e) {
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

function o(e) {
  r.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    userId: e
  })
}