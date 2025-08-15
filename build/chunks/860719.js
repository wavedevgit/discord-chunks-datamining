/** Chunk was on 76708 **/
/** chunk id: 860719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => i
}), require("./997841.js");
var Chunk85025 = require("./85025.js");

function i(e) {
  let {
    flags: t
  } = e, n = (0, r.O)(t), i = null != n && ((null == n ? true : n.messageContent) || (null == n ? true : n.messageContentLimited)), l = null != n && ((null == n ? true : n.guildPresences) || (null == n ? true : n.guildPresencesLimited)), o = null != n && ((null == n ? true : n.guildMembers) || (null == n ? true : n.guildMembersLimited));
  return {
    hasMessageContent: i,
    hasGuildPresences: l,
    hasGuildMembers: o,
    hasIntents: i || l || o
  }
}