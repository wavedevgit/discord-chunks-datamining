/** Chunk was on 81818 **/
t.d(n, {
  w: () => o
}), t(789020);
var r = t(85025);

function o(e) {
  let {
    flags: n
  } = e, t = (0, r.O)(n), o = null != t && ((null == t ? void 0 : t.messageContent) || (null == t ? void 0 : t.messageContentLimited)), i = null != t && ((null == t ? void 0 : t.guildPresences) || (null == t ? void 0 : t.guildPresencesLimited)), l = null != t && ((null == t ? void 0 : t.guildMembers) || (null == t ? void 0 : t.guildMembersLimited));
  return {
    hasMessageContent: o,
    hasGuildPresences: i,
    hasGuildMembers: l,
    hasIntents: o || i || l
  }
}