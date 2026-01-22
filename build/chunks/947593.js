/** Chunk was on web.js **/
/** chunk id: 947593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => o,
  I: () => l
}), require("./896048.js");
var Chunk954571 = require("./954571.js"),
  Chunk99066 = require("./99066.js"),
  Chunk424994 = require("./424994.js"),
  Chunk652215 = require("./652215.js");
let o = function(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
    let {
      trackingEnabled: s
    } = (0, i.Lj)("trackSampledContentEntryAnalytics:".concat(e));
    return s ? r.default.track(e, ...n) : Promise.resolve()
  },
  l = (e, t) => {
    o(s.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
      request_id: t.requestId,
      item_id: t.entry.id,
      surface_type: a.UG.GUILD_MEMBER_LIST,
      channel_id: t.channelId,
      guild_id: t.guildId,
      interaction_type: e,
      destination_channel_id: t.destinationChannelId,
      destination_guild_id: t.destinationGuildId,
      rich_presence_name: t.richPresenceName
    })
  }