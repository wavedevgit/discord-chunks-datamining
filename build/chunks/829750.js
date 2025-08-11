/** Chunk was on web.js **/
/** chunk id: 829750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  t: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk938475 = require("./938475.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  return (0, r.cj)([o.ZP, i.Z], () => {
    let t = o.ZP.countVoiceStatesForChannel(e.id),
      n = i.Z.getGuild(e.getGuildId());
    return null == n ? {
      reachedLimit: false,
      limit: false
    } : e.type === a.d4z.GUILD_STAGE_VOICE ? {
      reachedLimit: t > n.maxStageVideoChannelUsers,
      limit: n.maxStageVideoChannelUsers
    } : {
      reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
      limit: n.maxVideoChannelUsers
    }
  }, [e])
}

function l(e) {
  let t = o.ZP.countVoiceStatesForChannel(e.id),
    n = i.Z.getGuild(e.getGuildId());
  return null == n ? {
    reachedLimit: false,
    limit: false
  } : e.type === a.d4z.GUILD_STAGE_VOICE ? {
    reachedLimit: t > n.maxStageVideoChannelUsers,
    limit: n.maxStageVideoChannelUsers
  } : {
    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
    limit: n.maxVideoChannelUsers
  }
}