/** Chunk was on 99799 **/
/** chunk id: 860719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => o
}), require("./997841.js");
var Chunk85025 = require("./85025.js");

function o(e) {
  let {
    flags: t
  } = e, n = (0, r.O)(t), o = null != n && ((null == n ? true : n.messageContent) || (null == n ? true : n.messageContentLimited)), i = null != n && ((null == n ? true : n.guildPresences) || (null == n ? true : n.guildPresencesLimited)), l = null != n && ((null == n ? true : n.guildMembers) || (null == n ? true : n.guildMembersLimited));
  return {
    hasMessageContent: o,
    hasGuildPresences: i,
    hasGuildMembers: l,
    hasIntents: o || i || l
  }
}