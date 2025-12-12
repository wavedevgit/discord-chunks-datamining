/** Chunk was on web.js **/
/** chunk id: 893387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk797258 = require("./797258.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  var l, c;
  a.default.track(s.rMx.VOICE_CALL_TRANSFER, {
    source_platform: null != n ? null == (l = o.Z.getSessionById(n)) ? true : l.clientInfo.os : "discord_client",
    guild_id: null == (c = r.Z.getChannel(e)) ? true : c.guild_id,
    channel_id: e,
    rtc_connection_id: i.Z.getRTCConnectionId(),
    target_platform: t
  })
}