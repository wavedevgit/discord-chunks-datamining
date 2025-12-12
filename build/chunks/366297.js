/** Chunk was on web.js **/
/** chunk id: 366297, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => l
});
var Chunk258609 = require("./258609.js"),
  Chunk740492 = require("./740492.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk979651 = require("./979651.js");

function l(e) {
  if (i.ZP.disableVoiceChannelChangeAlert) returnfalse;
  let t = r.default.getRemoteSessionId();
  if (null != s.Z.getVoiceStateForSession(a.default.getId(), t) || !s.Z.isCurrentClientInVoiceChannel() || s.Z.isInChannel(e.id)) returnfalse;
  let n = o.Z.getGuild(e.getGuildId());
  return !((null == n ? true : n.afkChannelId) != null && s.Z.isInChannel(n.afkChannelId))
}