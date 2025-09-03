/** Chunk was on 49979 **/
/** chunk id: 860719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => r
}), require("./997841.js");
var Chunk85025 = require("./85025.js");

function r(e) {
  let {
    flags: t
  } = e, n = (0, a.O)(t), r = null != n && ((null == n ? true : n.messageContent) || (null == n ? true : n.messageContentLimited)), o = null != n && ((null == n ? true : n.guildPresences) || (null == n ? true : n.guildPresencesLimited)), i = null != n && ((null == n ? true : n.guildMembers) || (null == n ? true : n.guildMembersLimited));
  return {
    hasMessageContent: r,
    hasGuildPresences: o,
    hasGuildMembers: i,
    hasIntents: r || o || i
  }
}