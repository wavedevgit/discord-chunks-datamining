/** Chunk was on 29458 **/
/** chunk id: 860719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => l
}), require("./997841.js");
var Chunk85025 = require("./85025.js");

function l(e) {
  let {
    flags: t
  } = e, n = (0, r.O)(t), l = null != n && ((null == n ? true : n.messageContent) || (null == n ? true : n.messageContentLimited)), i = null != n && ((null == n ? true : n.guildPresences) || (null == n ? true : n.guildPresencesLimited)), o = null != n && ((null == n ? true : n.guildMembers) || (null == n ? true : n.guildMembersLimited));
  return {
    hasMessageContent: l,
    hasGuildPresences: i,
    hasGuildMembers: o,
    hasIntents: l || i || o
  }
}