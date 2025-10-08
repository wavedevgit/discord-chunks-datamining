/** Chunk was on 82928 **/
/** chunk id: 860719, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  w: () => c
}), require("./997841.js");
var Chunk85025 = require("./85025.js");

function c(e) {
  let {
    flags: n
  } = e, t = (0, o.O)(n), c = null != t && ((null == t ? true : t.messageContent) || (null == t ? true : t.messageContentLimited)), a = null != t && ((null == t ? true : t.guildPresences) || (null == t ? true : t.guildPresencesLimited)), r = null != t && ((null == t ? true : t.guildMembers) || (null == t ? true : t.guildMembersLimited));
  return {
    hasMessageContent: c,
    hasGuildPresences: a,
    hasGuildMembers: r,
    hasIntents: c || a || r
  }
}