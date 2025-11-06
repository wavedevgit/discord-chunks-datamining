/** Chunk was on 29446 **/
/** chunk id: 24124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GG: () => a,
  R2: () => s,
  h7: () => l,
  rh: () => r
});
var Chunk570140 = require("./570140.js");

function l(e, t, n) {
  return new Promise(l => {
    setTimeout(() => {
      i.Z.dispatch({
        type: "ACTIVITY_INVITE_MODAL_OPEN",
        activity: e,
        isPrivate: t,
        context: n,
        resolve: l
      })
    }, 0)
  })
}

function r(e) {
  i.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_QUERY",
    query: e
  })
}

function a(e) {
  i.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    channelId: e
  })
}

function s(e) {
  i.Z.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    userId: e
  })
}