/** Chunk was on 82008 **/
/** chunk id: 860719, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  w: () => l
}), require("./997841.js");
var Chunk85025 = require("./85025.js");

function l(e) {
  let {
    flags: n
  } = e, t = (0, r.O)(n), l = null != t && ((null == t ? true : t.messageContent) || (null == t ? true : t.messageContentLimited)), o = null != t && ((null == t ? true : t.guildPresences) || (null == t ? true : t.guildPresencesLimited)), i = null != t && ((null == t ? true : t.guildMembers) || (null == t ? true : t.guildMembersLimited));
  return {
    hasMessageContent: l,
    hasGuildPresences: o,
    hasGuildMembers: i,
    hasIntents: l || o || i
  }
}