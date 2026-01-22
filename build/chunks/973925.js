/** Chunk was on 64228 **/
/** chunk id: 973925, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./938796.js");
var Chunk647006 = require("./647006.js");

function i(e) {
  let {
    flags: l
  } = e, t = (0, n.a)(l), i = null != t && ((null == t ? true : t.messageContent) || (null == t ? true : t.messageContentLimited)), r = null != t && ((null == t ? true : t.guildPresences) || (null == t ? true : t.guildPresencesLimited)), s = null != t && ((null == t ? true : t.guildMembers) || (null == t ? true : t.guildMembersLimited));
  return {
    hasMessageContent: i,
    hasGuildPresences: r,
    hasGuildMembers: s,
    hasIntents: i || r || s
  }
}