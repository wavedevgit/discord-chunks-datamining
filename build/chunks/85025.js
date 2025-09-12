/** Chunk was on 63875 **/
/** chunk id: 85025, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => o
});
var Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  if (null != e) return {
    guildPresences: (0, a.yE)(e, r.udG.GATEWAY_PRESENCE),
    guildMembers: (0, a.yE)(e, r.udG.GATEWAY_GUILD_MEMBERS),
    messageContent: (0, a.yE)(e, r.udG.GATEWAY_MESSAGE_CONTENT),
    guildPresencesLimited: (0, a.yE)(e, r.udG.GATEWAY_PRESENCE_LIMITED),
    guildMembersLimited: (0, a.yE)(e, r.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
    messageContentLimited: (0, a.yE)(e, r.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
  }
}