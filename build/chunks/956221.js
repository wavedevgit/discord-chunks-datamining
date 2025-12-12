/** Chunk was on web.js **/
/** chunk id: 956221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk231338 = require("./231338.js");

function l(e) {
  let {
    userId: t,
    guildId: n
  } = e, l = (0, r.e7)([o.Z], () => null != n && null != t ? o.Z.getDiscoverableVoiceState(n, t) : null != t ? o.Z.getDiscoverableVoiceStateForUser(t) : true), c = null == l ? true : l.channelId, u = (0, r.e7)([i.Z], () => {
    if (null != c) return i.Z.getChannel(c)
  });
  return (0, r.e7)([a.Z], () => (null == u ? true : u.isPrivate()) || a.Z.can(s.Pl.VIEW_CHANNEL, u)) ? {
    voiceState: l,
    voiceChannel: u
  } : {}
}