/** Chunk was on 81818 **/
t.d(n, {
  w: () => r
}), t(789020);
var o = t(85025);

function r(e) {
  let {
    flags: n
  } = e, t = (0, o.O)(n), r = null != t && ((null == t ? void 0 : t.messageContent) || (null == t ? void 0 : t.messageContentLimited)), i = null != t && ((null == t ? void 0 : t.guildPresences) || (null == t ? void 0 : t.guildPresencesLimited)), l = null != t && ((null == t ? void 0 : t.guildMembers) || (null == t ? void 0 : t.guildMembersLimited));
  return {
    hasMessageContent: r,
    hasGuildPresences: i,
    hasGuildMembers: l,
    hasIntents: r || i || l
  }
}