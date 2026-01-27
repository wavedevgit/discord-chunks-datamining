/** Chunk was on web.js **/
/** chunk id: 389234, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => l
});
var Chunk643501 = require("./643501.js"),
  Chunk964404 = require("./964404.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk977997 = require("./977997.js");

function l(e) {
  if (i.Ay.disableVoiceChannelChangeAlert) returnfalse;
  let t = r.default.getRemoteSessionId();
  if (null != s.A.getVoiceStateForSession(a.default.getId(), t) || !s.A.isCurrentClientInVoiceChannel() || s.A.isInChannel(e.id)) returnfalse;
  let n = o.A.getGuild(e.getGuildId());
  return !((null == n ? true : n.afkChannelId) != null && s.A.isInChannel(n.afkChannelId))
}