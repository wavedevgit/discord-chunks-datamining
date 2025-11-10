/** Chunk was on 84983 **/
/** chunk id: 24124, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  GG: () => a,
  R2: () => r,
  h7: () => i,
  rh: () => s
});
var Chunk570140 = require("./570140.js");

function i(e, t, l) {
  return new Promise(i => {
    setTimeout(() => {
      n.Z.dispatch({
        type: "ACTIVITY_INVITE_MODAL_OPEN",
        activity: e,
        isPrivate: t,
        context: l,
        resolve: i
      })
    }, 0)
  })
}

function s(e) {
  n.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_QUERY",
    query: e
  })
}

function a(e) {
  n.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    channelId: e
  })
}

function r(e) {
  n.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    userId: e
  })
}