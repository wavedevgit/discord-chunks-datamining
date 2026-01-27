/** Chunk was on 63974 **/
/** chunk id: 973925, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./938796.js");
var Chunk647006 = require("./647006.js");

function i(e) {
  let {
    flags: t
  } = e, n = (0, l.a)(t), i = null != n && ((null == n ? true : n.messageContent) || (null == n ? true : n.messageContentLimited)), r = null != n && ((null == n ? true : n.guildPresences) || (null == n ? true : n.guildPresencesLimited)), s = null != n && ((null == n ? true : n.guildMembers) || (null == n ? true : n.guildMembersLimited));
  return {
    hasMessageContent: i,
    hasGuildPresences: r,
    hasGuildMembers: s,
    hasIntents: i || r || s
  }
}