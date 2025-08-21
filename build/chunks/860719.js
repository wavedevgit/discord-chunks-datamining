/** Chunk was on 98360 **/
/** chunk id: 860719, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  w: () => o
}), require("./997841.js");
var Chunk85025 = require("./85025.js");

function o(e) {
  let {
    flags: n
  } = e, t = (0, r.O)(n), o = null != t && ((null == t ? true : t.messageContent) || (null == t ? true : t.messageContentLimited)), l = null != t && ((null == t ? true : t.guildPresences) || (null == t ? true : t.guildPresencesLimited)), i = null != t && ((null == t ? true : t.guildMembers) || (null == t ? true : t.guildMembersLimited));
  return {
    hasMessageContent: o,
    hasGuildPresences: l,
    hasGuildMembers: i,
    hasIntents: o || l || i
  }
}