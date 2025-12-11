/** Chunk was on 7654 **/
/** chunk id: 247272, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => r,
  x: () => s
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk93127 = require("./93127.js");

function s(e) {
  let {
    omitUserIds: t,
    guild: n,
    channel: s,
    applicationId: r,
    inviteTargetType: a
  } = e;
  return (0, i._)().then(() => {
    l.Z.dispatch({
      type: "LOAD_INVITE_SUGGESTIONS",
      omitUserIds: null != t ? t : new Set,
      guild: n,
      channel: s,
      applicationId: r,
      inviteTargetType: a
    })
  })
}

function r(e) {
  l.Z.dispatch({
    type: "INVITE_SUGGESTIONS_SEARCH",
    query: e
  })
}
require("./751771.js")