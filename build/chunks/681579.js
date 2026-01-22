/** Chunk was on 43600 **/
/** chunk id: 681579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => r,
  t: () => s
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk219271 = require("./219271.js");

function s(e) {
  let {
    omitUserIds: t,
    guild: n,
    channel: s,
    applicationId: r,
    inviteTargetType: a
  } = e;
  return (0, i.u)().then(() => {
    l.h.dispatch({
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
  l.h.dispatch({
    type: "INVITE_SUGGESTIONS_SEARCH",
    query: e
  })
}
require("./535820.js")