/** Chunk was on web.js **/
/** chunk id: 405018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  M: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk607567 = require("./607567.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  return (0, r.cf)([a.Ay, i.A], () => {
    let t = a.Ay.countVoiceStatesForChannel(e.id),
      n = i.A.getGuild(e.getGuildId());
    return null == n ? {
      reachedLimit: false,
      limit: false
    } : e.type === s.rbe.GUILD_STAGE_VOICE ? {
      reachedLimit: t > n.maxStageVideoChannelUsers,
      limit: n.maxStageVideoChannelUsers
    } : {
      reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
      limit: n.maxVideoChannelUsers
    }
  }, [e])
}

function l(e) {
  let t = a.Ay.countVoiceStatesForChannel(e.id),
    n = i.A.getGuild(e.getGuildId());
  return null == n ? {
    reachedLimit: false,
    limit: false
  } : e.type === s.rbe.GUILD_STAGE_VOICE ? {
    reachedLimit: t > n.maxStageVideoChannelUsers,
    limit: n.maxStageVideoChannelUsers
  } : {
    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
    limit: n.maxVideoChannelUsers
  }
}