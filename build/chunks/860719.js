/** Chunk was on 40450 **/
/** chunk id: 860719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => a
}), require("./997841.js");
var Chunk85025 = require("./85025.js");

function a(e) {
  let {
    flags: t
  } = e, n = (0, r.O)(t), a = null != n && ((null == n ? true : n.messageContent) || (null == n ? true : n.messageContentLimited)), i = null != n && ((null == n ? true : n.guildPresences) || (null == n ? true : n.guildPresencesLimited)), l = null != n && ((null == n ? true : n.guildMembers) || (null == n ? true : n.guildMembersLimited));
  return {
    hasMessageContent: a,
    hasGuildPresences: i,
    hasGuildMembers: l,
    hasIntents: a || i || l
  }
}