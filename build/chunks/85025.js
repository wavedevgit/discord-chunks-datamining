/** Chunk was on 93979 **/
/** chunk id: 85025, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  O: () => o
});
var Chunk95015 = require("./95015.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  if (null != e) return {
    guildPresences: (0, l.yE)(e, i.udG.GATEWAY_PRESENCE),
    guildMembers: (0, l.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS),
    messageContent: (0, l.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT),
    guildPresencesLimited: (0, l.yE)(e, i.udG.GATEWAY_PRESENCE_LIMITED),
    guildMembersLimited: (0, l.yE)(e, i.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
    messageContentLimited: (0, l.yE)(e, i.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
  }
}