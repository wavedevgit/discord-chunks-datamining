/** Chunk was on 82928 **/
/** chunk id: 85025, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  O: () => a
});
var Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  if (null != e) return {
    guildPresences: (0, o.yE)(e, c.udG.GATEWAY_PRESENCE),
    guildMembers: (0, o.yE)(e, c.udG.GATEWAY_GUILD_MEMBERS),
    messageContent: (0, o.yE)(e, c.udG.GATEWAY_MESSAGE_CONTENT),
    guildPresencesLimited: (0, o.yE)(e, c.udG.GATEWAY_PRESENCE_LIMITED),
    guildMembersLimited: (0, o.yE)(e, c.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
    messageContentLimited: (0, o.yE)(e, c.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
  }
}