/** Chunk was on 81818 **/
t.d(n, {
  O: () => i
});
var r = t(630388),
  o = t(981631);

function i(e) {
  if (null != e) return {
    guildPresences: (0, r.yE)(e, o.udG.GATEWAY_PRESENCE),
    guildMembers: (0, r.yE)(e, o.udG.GATEWAY_GUILD_MEMBERS),
    messageContent: (0, r.yE)(e, o.udG.GATEWAY_MESSAGE_CONTENT),
    guildPresencesLimited: (0, r.yE)(e, o.udG.GATEWAY_PRESENCE_LIMITED),
    guildMembersLimited: (0, r.yE)(e, o.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
    messageContentLimited: (0, r.yE)(e, o.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
  }
}