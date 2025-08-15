/** Chunk was on 76708 **/
/** chunk id: 85025, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => l
});
var Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  if (null != e) return {
    guildPresences: (0, r.yE)(e, i.udG.GATEWAY_PRESENCE),
    guildMembers: (0, r.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS),
    messageContent: (0, r.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT),
    guildPresencesLimited: (0, r.yE)(e, i.udG.GATEWAY_PRESENCE_LIMITED),
    guildMembersLimited: (0, r.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
    messageContentLimited: (0, r.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
  }
}