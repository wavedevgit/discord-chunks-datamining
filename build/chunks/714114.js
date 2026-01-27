/** Chunk was on web.js **/
/** chunk id: 714114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk977997 = require("./977997.js"),
  Chunk818348 = require("./818348.js");

function l(e) {
  let {
    userId: t,
    guildId: n
  } = e, l = (0, r.bG)([o.A], () => null != n && null != t ? o.A.getDiscoverableVoiceState(n, t) : null != t ? o.A.getDiscoverableVoiceStateForUser(t) : true), c = null == l ? true : l.channelId, u = (0, r.bG)([i.A], () => {
    if (null != c) return i.A.getChannel(c)
  });
  return (0, r.bG)([a.A], () => (null == u ? true : u.isPrivate()) || a.A.can(s.xB.VIEW_CHANNEL, u)) ? {
    voiceState: l,
    voiceChannel: u
  } : {}
}