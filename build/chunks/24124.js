/** Chunk was on 85496 **/
/** chunk id: 24124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GG: () => a,
  R2: () => s,
  h7: () => i,
  rh: () => r
});
var Chunk570140 = require("./570140.js");

function i(e, t, n) {
  return new Promise(i => {
    setTimeout(() => {
      l.Z.dispatch({
        type: "ACTIVITY_INVITE_MODAL_OPEN",
        activity: e,
        isPrivate: t,
        context: n,
        resolve: i
      })
    }, 0)
  })
}

function r(e) {
  l.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_QUERY",
    query: e
  })
}

function a(e) {
  l.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    channelId: e
  })
}

function s(e) {
  l.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    userId: e
  })
}