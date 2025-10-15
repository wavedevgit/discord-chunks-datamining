/** Chunk was on 93979 **/
/** chunk id: 860719, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  w: () => i
}), require("./997841.js");
var Chunk85025 = require("./85025.js");

function i(e) {
  let {
    flags: n
  } = e, t = (0, l.O)(n), i = null != t && ((null == t ? true : t.messageContent) || (null == t ? true : t.messageContentLimited)), o = null != t && ((null == t ? true : t.guildPresences) || (null == t ? true : t.guildPresencesLimited)), r = null != t && ((null == t ? true : t.guildMembers) || (null == t ? true : t.guildMembersLimited));
  return {
    hasMessageContent: i,
    hasGuildPresences: o,
    hasGuildMembers: r,
    hasIntents: i || o || r
  }
}