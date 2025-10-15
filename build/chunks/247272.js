/** Chunk was on 7654 **/
/** chunk id: 247272, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => a,
  x: () => s
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk93127 = require("./93127.js");

function s(e) {
  let {
    omitUserIds: t,
    guild: n,
    channel: s,
    applicationId: a,
    inviteTargetType: r
  } = e;
  return (0, l._)().then(() => {
    i.Z.dispatch({
      type: "LOAD_INVITE_SUGGESTIONS",
      omitUserIds: null != t ? t : new Set,
      guild: n,
      channel: s,
      applicationId: a,
      inviteTargetType: r
    })
  })
}

function a(e) {
  i.Z.dispatch({
    type: "INVITE_SUGGESTIONS_SEARCH",
    query: e
  })
}
require("./751771.js")