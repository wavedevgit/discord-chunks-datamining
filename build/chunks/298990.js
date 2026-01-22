/** Chunk was on 97492 **/
/** chunk id: 298990, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Jb: () => s,
  b4: () => a,
  oR: () => i,
  qf: () => l
});
var Chunk73153 = require("./73153.js");

function l(e, t, n) {
  return new Promise(l => {
    setTimeout(() => {
      r.h.dispatch({
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
  r.h.dispatch({
    type: "ACTIVITY_INVITE_MODAL_QUERY",
    query: e
  })
}

function a(e) {
  r.h.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    channelId: e
  })
}

function s(e) {
  r.h.dispatch({
    type: "ACTIVITY_INVITE_MODAL_SEND",
    userId: e
  })
}